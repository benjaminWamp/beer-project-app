import React, { useContext, useEffect } from "react";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { UserLogin } from "../types/user.types";
import AlertContext from "../context/AlertContext";

const Login = () => {
    const { token, isLogged, logIn } = useContext(UserContext);
    const navigate = useNavigate();
    const { addAlert } = useContext(AlertContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userInfo: UserLogin = {
            email: e.target.email.value,
            password: e.target.password.value,
        };
        try {
            const result = await logIn(userInfo);
            addAlert("success", result);
        } catch (e) {
            addAlert("failure", e);
        }
    };

    useEffect(() => {
        if (isLogged) {
            navigate("/");
        }
    }, [token, isLogged]);

    return (
        <>
            <div className="bg-background flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-xl">
                    <img
                        className="mx-auto h-36 w-auto"
                        src="/images/mb-logo.png"
                        alt="Logo Monsieur Bière"
                    />
                    <h1 className="mt-10 text-center font-title text-4xl font-bold leading-9 tracking-tight text-accent">
                        Connexion à votre compte
                    </h1>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form
                        className="space-y-5"
                        onSubmit={(e) => handleSubmit(e)}
                    >
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-m font-title font-bold text-accent leading-6"
                            >
                                Adresse email
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="bg-accent block w-full rounded-md border-0 py-1.5 text-background shadow-sm ring-1 ring-inset ring-accent placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="password"
                                    className="block text-m font-title font-bold text-accent leading-6"
                                >
                                    Mot de passe
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="bg-accent block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-accent placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="mt-4 w-full rounded-md transition-all text-l inline-block font-title font-bold border-2 py-2 px-10 shadow-buttonDarkBase hover:shadow-buttonDarkHover hover:text-secondary text-accent border-accent"
                            >
                                Se connecter
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
