import React, { useContext, useEffect } from "react";
import { Accordion } from "flowbite-react";
import { registerUser } from "../utils/services/UserServices";
import UserContext from "../context/UserContext";
import AlertContext from "../context/AlertContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const { logIn } = useContext(UserContext);
    const { addAlert } = useContext(AlertContext);
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleRegistration = async (e) => {
        e.preventDefault();
        const {
            name,
            email,
            password,
            password_confirmation,
            number,
            street,
            city,
            zip_code,
        } = e.target;

        const userInfo = {
            name: name.value,
            email: email.value,
            password: password.value,
            password_confirmation: password_confirmation.value,
            number: number.value,
            street: street.value,
            city: city.value,
            zip_code: zip_code.value,
        };

        const logInfo = { email: email.value, password: password.value };

        try {
            const response = await registerUser(userInfo);
            await logIn(logInfo);
            addAlert("success", response.message);
            navigate("/");
        } catch (error) {
            addAlert("failure", error);
        }
    };

    return (
        <div className="bg-tonneau bg-cover">
            <div className="bg-gradient-to-r from-black/50 via-black/70 to-black/50 flex flex-col items-center justify-center px-6 py-12 mx-auto lg:px-8">
                <a
                    href="#"
                    className="flex flex-col gap-4 items-center mb-6 text-2xl font-semibold text-gray-900"
                >
                    <img
                        className="w-32 mr-2"
                        src="/images/mb-logo.png"
                        alt="Logo Monsieur Bière"
                    />
                    <h1 className="text-background text-4xl font-title font-bold">Monsieur Bière</h1>
                    
                </a>
                <div className="w-full bg-background rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h2 className="text-xl font-bold font-title leading-tight tracking-tight text-accent md:text-2xl">
                            Créer un compte
                        </h2>
                        <form
                            className="space-y-4 md:space-y-"
                            onSubmit={(e) => handleRegistration(e)}
                        >
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block mb-2 text-sm font-bold font-title text-accent"
                                >
                                    Votre Nom Prénom
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-accent focus:border-secondary block w-full p-2.5"
                                    placeholder="name@email.com"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-bold font-title text-accent"
                                >
                                    Votre mail
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-accent focus:border-secondary block w-full p-2.5"
                                    placeholder="name@email.com"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-sm font-bold font-title text-accent"
                                >
                                    Mot de passe
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-accent focus:border-secondary block w-full p-2.5"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="password_confirmation"
                                    className="block mb-2 text-sm font-bold font-title text-accent"
                                >
                                    Confirmer le mot de passe
                                </label>
                                <input
                                    type="password"
                                    name="password_confirmation"
                                    id="password_confirmation"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-accent focus:border-secondary block w-full p-2.5"
                                    required
                                />
                            </div>
                            
                            <Accordion collapseAll>
                                <Accordion.Panel>
                                    <Accordion.Title>
                                        <div className="px-2">
                                            Votre Adresse (peut être ajouté plus tard)
                                        </div>
                                        
                                    </Accordion.Title>
                                    <Accordion.Content>
                                        <div className="sm:col-span-3 px-2">
                                            <label
                                                htmlFor="number"
                                                className="block my-2 text-sm font-bold font-title text-accent"
                                            >
                                                Numéro
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    type="number"
                                                    name="number"
                                                    id="number"
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-accent placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>
                                        <div className="sm:col-span-3 px-2">
                                            <label
                                                htmlFor="street"
                                                className="block my-2 text-sm font-bold font-title text-accent"
                                            >
                                                Rue
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    type="text"
                                                    name="street"
                                                    id="street"
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-accent placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-3 px-2">
                                            <label
                                                htmlFor="city"
                                                className="block my-2 text-sm font-bold font-title text-accent"
                                            >
                                                Ville
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    type="text"
                                                    name="city"
                                                    id="city"
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-accent placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-3 px-2">
                                            <label
                                                htmlFor="zip_code"
                                                className="block my-2 text-sm font-bold font-title text-accent"
                                            >
                                                Code Postal
                                            </label>
                                            <div className="my-2">
                                                <input
                                                    type="text"
                                                    pattern="[0-9]{5}"
                                                    name="zip_code"
                                                    id="zip_code"
                                                    autoComplete="zip_code"
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-accent placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>
                                    </Accordion.Content>
                                </Accordion.Panel>
                            </Accordion>
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input
                                        id="RGPD"
                                        aria-describedby="RGPD"
                                        type="checkbox"
                                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-accent checked:bg-accent checked:hover:bg-accent"
                                        required
                                    />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label
                                        htmlFor="RGPD"
                                        className="font-light text-gray-500 dark:text-gray-300"
                                    >
                                        J'accepte les{" "}
                                        <a
                                            className="font-medium text-accent hover:underline dark:text-primary-500"
                                            href="#"
                                        >
                                            Termes et Conditions.
                                        </a>
                                    </label>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="w-full rounded-md transition-all text-m inline-block font-title font-bold border-2 py-2 px-10 shadow-buttonDarkBase hover:shadow-buttonDarkHover hover:text-secondary text-accent border-accent"
                            >
                                Créer un compte
                            </button>
                            <div className="flex justify-between items-center">
                                <p className="text-sm font-light text-gray-500">
                                    Déjà un compte ?
                                </p>
                                <a
                                    href="#/login"
                                    className="text-end ml-4 rounded-md transition-all text-sm inline-block font-title font-bold border-2 py-1 px-4 shadow-buttonDarkBase hover:shadow-buttonDarkHover hover:text-secondary text-accent border-accent"
                                >
                                    Se connecter
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
