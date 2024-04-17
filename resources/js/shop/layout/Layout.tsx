import React from "react";
import NavBar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <div>
            <NavBar />
            <div className="m-24">{children}</div>
            <Footer />
        </div>
    );
};

export default Layout;
