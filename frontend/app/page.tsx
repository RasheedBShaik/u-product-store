

import Link from "next/link";
// import Products from "./pages/products/page";

const Home = () => {
  return (
   <div>
    <Link
        href="/pages/adminlogin"
        className="w-fit block mx-auto mt-6 hover:underline"
      >
        Admin Login
      </Link>
    {/* <Products/> */}
   </div>
  );
};

export default Home;

