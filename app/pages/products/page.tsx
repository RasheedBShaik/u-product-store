"use client"

import React, { useState, useEffect } from 'react';

type ProductType = {
  _id: string;
  name: string;
  price: string;
  image?: string;
};

const Products = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null); // Reset error on each fetch attempt
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`);

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const data = await res.json();

      // Safety check: make sure data is an array or has a `data` array
      if (Array.isArray(data)) {
        setProducts(data);
      } else if (Array.isArray(data?.data)) {
        setProducts(data.data);
      } else {
        setError("Invalid data format received from the server.");
        setProducts([]);
      }
    } catch (err) {
      console.error("Error fetching products:", err);
      setError("Failed to load products. Please try again later.");
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return <p className="text-center">Loading products...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  if (products.length === 0) {
    return <p className="text-center text-gray-500">No products found.</p>;
  }

  return (
    <div className="w-[90%] mx-auto">
      <div className="text-center text-2xl md:text-3xl xl:text-4xl font-semibold py-10 text-blue-900">
        Products List
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product._id}
            className="border border-gray-400 rounded-md shadow-sm bg-gray-100 flex flex-col p-4"
          >
            {product.image && (
              <img
                src={product.image}
                alt={product.name}
                className="w-full aspect-square object-cover rounded-t-md"
              />
            )}
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-700">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products; // Ensure that you export this component as default
