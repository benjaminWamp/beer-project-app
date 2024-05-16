import React from "react";

const Footer = () => {
    return (
        <footer className="bg-black py-4">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-start w-full flex justify-start text-sm text-white/80">
                    © 2024 
                    <a href="http://127.0.0.1:8000/" className="hover:underline">
                         Mister Beer
                    </a>
                    . All Rights Reserved.
                </span>

                <div className="w-full flex justify-center">
                    <img
                        src="\images\mb-logo.png"
                        className="h-24"
                        alt="Flowbite Logo"
                    />
                </div>

                <div className="w-full flex justify-end">
                    <ul className="text-end flex flex-wrap items-end mt-3 text-sm font-medium text-white/80 sm:mt-0">
                    <li>
                        <a
                            href="#/a-propos"
                            className="hover:underline me-4 md:me-6"
                        >
                            À propos
                        </a>
                    </li>
                    <li>
                        <a
                            href="#/mentions-legales"
                            className="hover:underline me-4 md:me-6"
                        >
                            Mentions Légales
                        </a>
                    </li>
                    <li>
                        <a
                            href="#/cgv"
                            className="hover:underline me-4 md:me-6"
                        >
                            CGV
                        </a>
                    </li>
                    <li>
                        <a href="#/contact" className="hover:underline">
                            Contact
                        </a>
                    </li>
                </ul>
                </div>
                
            </div>
        </footer>
    );
};

export default Footer;
