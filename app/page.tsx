

import Link from "next/link";
import Products from "./products/page";
const Home = () => {
  return (
   <div className="py-10">
    <div className=" text-2xl sm:text-4xl font-bold text-center">Welcome to product store</div>
    <Link
        href="/adminlogin"
        className="w-fit block mx-auto mt-6 hover:underline"
      >
        Admin Login
      </Link>
    <Products/>
   </div>
  );
};

export default Home;

