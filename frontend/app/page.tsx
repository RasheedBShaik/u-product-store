
import { Product } from "./Product";
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
    <Product/>
   </div>
  );
};

export default Home;

