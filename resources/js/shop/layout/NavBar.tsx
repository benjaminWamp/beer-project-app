import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import AlertContext from "../context/AlertContext";

const NavBar = () => {
    const navigate = useNavigate();
    const { isLogged, logOut } = useContext(UserContext);
    const { addAlert } = useContext(AlertContext);

    const handleLogOut = async () => {
        try {
            const result = await logOut();
            addAlert("success", result);
            navigate("/");
        } catch (e) {
            addAlert("failure", e);
        }
    };

    return (
        <nav className="bg-accent fixed w-full z-20 top-0 start-0">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 shadow-md">
                <a
                    href="http://127.0.0.1:8000/#/"
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <img
                        src="\images\mb-logo.png"
                        className="h-12"
                        alt="Monsieur Bière Logo"
                    />
                    <span className="self-center font-title text-secondary text-2xl font-bold whitespace-nowrap dark:text-white">
                        Monsieur Bière
                    </span>
                </a>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-2">
                    {isLogged ? (
                        <>
                            <button
                                type="button"
                                className="rounded-md transition-all text-sm inline-block font-title font-bold border-2 py-2 px-4 shadow-buttonLightBase hover:shadow-buttonLightHover hover:text-accent text-secondary border-secondary"
                                onClick={() => {
                                    navigate("/account");
                                }}
                            >
                                Mon Compte
                            </button>
                            <button
                                type="button"
                                className="rounded-md transition-all text-sm inline-block font-title font-bold border-2 py-2 px-4 shadow-buttonLightBase hover:shadow-buttonLightHover hover:text-accent text-secondary border-secondary"
                                onClick={() => {
                                    handleLogOut();
                                }}
                            >
                                Se déconnecter
                            </button>
                        </>
                    ) : (
                        <>
                            <button
                                type="button"
                                className="rounded-md transition-all text-sm inline-block font-title font-bold border-2 py-2 px-4 shadow-buttonLightBase hover:shadow-buttonLightHover hover:text-accent text-secondary border-secondary"
                                onClick={() => {
                                    navigate("/login");
                                }}
                            >
                                Se connecter
                            </button>
                            <button
                                type="button"
                                className="rounded-md transition-all text-sm inline-block font-title font-bold border-2 py-2 px-4 shadow-buttonLightBase hover:shadow-buttonLightHover hover:text-accent text-secondary border-secondary"
                                onClick={() => {
                                    navigate("/register");
                                }}
                            >
                                Créer un compte
                            </button>
                        </>
                    )}
                    <button
                        data-collapse-toggle="navbar-sticky"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-sticky"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                </div>
                <div
                    className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                    id="navbar-sticky"
                >
                    <ul className="bg-transparent flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                        <li>
                            <a
                                href="/"
                                className="block py-2 px-3 font-title font-bold text-white rounded md:p-0 hover:text-secondary active:text-secondary"
                                aria-current="page"
                            >
                                Accueil
                            </a>
                        </li>
                        <li>
                            <a
                                href="#/catalogue"
                                className="block py-2 px-3 font-title font-bold text-white rounded md:p-0 hover:text-secondary"
                            >
                                Catalogue
                            </a>
                        </li>
                        <li>
                            <a
                                href="#/a-propos"
                                className="block py-2 px-3 font-title font-bold text-white rounded md:p-0 hover:text-secondary"
                            >
                                À propos
                            </a>
                        </li>
                        <li>
                            <a
                                href="#/contact"
                                className="block py-2 px-3 font-title font-bold text-white rounded md:p-0 hover:text-secondary"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
