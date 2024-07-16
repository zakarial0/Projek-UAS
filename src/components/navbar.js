import { Link } from "gatsby";
import React from "react";

const Navbar = () => {  
    return(
        <div className="bg-[#16a34a] flex w-full py-5">
            <h1 className="ms-8 w-4/6 font-bold text-2xl text-color">Al-Hikmah</h1>
            <ul className="flex font-medium space-x-9 w-2/6 me-8">
                <li>
                    <Link to="/" className="text-xl font-medium text-color">Home</Link>
                </li>
                <li>
                    <Link to="/articlePage" className="text-xl font-medium text-color">Article</Link>
                </li>
                <li>
                    <Link to="/about" className="text-xl font-medium text-color">About Us</Link>
                </li>
                <li>
                    <Link to="/contact" className="text-xl font-medium text-color">Contact us</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;