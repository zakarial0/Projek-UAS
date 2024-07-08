import { Link } from "gatsby";
import React from "react";

const Navbar = () => {  
    return(
        <div className="bg-[#4FC3F7] flex w-full py-5">
            <h1 className="ms-8 w-4/6">TotalClean</h1>
            <ul className="flex font-medium space-x-9 w-2/6 me-8">
                <li>
                    <Link to="/" className="text-xl font-bold text-color">Home</Link>
                </li>
                <li>
                    <Link to="/produk" className="text-xl font-bold text-color">Products</Link>
                </li>
                <li>
                    <Link to="/about" className="text-xl font-bold text-color">About Us</Link>
                </li>
                <li>
                    <Link to="/contact" className="text-xl font-bold text-color">Contact</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;