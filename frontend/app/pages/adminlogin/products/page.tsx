"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
Link
type ProductType = {
  _id: string;
  name: string;
  price: string;
  image?: string;
};

export const Products = () => {
      const [products, setProducts] = useState<ProductType[]>([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState<string | null>(null);
    
      const fetchProducts = async () => {
        try {
          setLoading(true);
          const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`);


          if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
          const data = await res.json();
    
          // Safety check: make sure products is an array
          if (Array.isArray(data)) {
            setProducts(data);
          } else if (Array.isArray(data.data)) {
            setProducts(data.data);
          } else {
            setProducts([]);
            setError("Invalid data format from server");
          }
    
          setError(null);
        } catch (err) {
          console.error(err);
          setError("Failed to load products.");
          setProducts([]);
        } finally {
          setLoading(false);
        }
      };
    
      useEffect(() => {
        fetchProducts();
      }, []);
    
  return (
    <div className="w-[90%] mx-auto">
      <div className="text-center text-2xl md:text-3xl xl:text-4xl font-semibold py-10 text-blue-900">Products List</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {loading && <p className="col-span-full text-center">Loading products...</p>}
        {error && <p className="col-span-full text-center text-red-500">{error}</p>}
        {!loading && products.length === 0 && !error && (
          <p className="col-span-full text-center text-gray-500">No products added yet.</p>
        )}
        {products.map((product) => (
          <div
            key={product._id}
            className="border border-gray-400 rounded-md shadow-sm bg-gray-100 flex flex-col p-4"
          >
            {product?.image && (
                    <img src={product.image} alt={product.name} className="w-full aspect-square object-cover rounded-t-md" />
             )}
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-700">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}