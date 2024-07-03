import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

const Layout = ({ children }) => {
    return(
        <div>
            <Navbar className="mb-6"/>
            <main>
                {children}
            </main>
            <Footer/>
        </div>
    )
}

export default Layout;