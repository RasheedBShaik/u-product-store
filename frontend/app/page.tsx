
import { Products } from "./pages/adminlogin/products/page";
import Link from "next/link";

const Home = () => {
  return (
   <div>
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

