import { Link } from "gatsby";
import React from "react";

const Navbar = () => {  
    return(
        <div className="bg-blue-300 w-full h-6 flex">
            <h1>logo</h1>
            <ul className="flex font-medium space-x-4">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/produk">Products</Link>
                </li>
                <li>
                    <Link to="/about">About Us</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;