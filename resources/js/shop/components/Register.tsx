import React, { useContext, useEffect } from "react";
import { Accordion } from "flowbite-react";
import { registerUser } from "../utils/services/UserServices";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const { logIn } = useContext(UserContext);
    const navigate = useNavigate();

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
            await registerUser(userInfo);
            await logIn(logInfo);
            navigate("/");
        } catch (error) {
            // TODO : alert
        }
    };

    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
            <a
                href="#"
                className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
            >
                <img
                    className="w-8 h-8 mr-2"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
                    alt="logo"
                />
                Mister Beer
            </a>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Créer un compte
                    </h1>
                    <form
                        className="space-y-4 md:space-y-"
                        onSubmit={(e) => handleRegistration(e)}
                    >
                        <div>
                            <label
                                htmlFor="name"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Votre Nom Prénom
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="name@email.com"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Votre mail
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="name@email.com"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="password"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Mot de passe
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="password_confirmation"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Confirmer le mot de passe
                            </label>
                            <input
                                type="password"
                                name="password_confirmation"
                                id="password_confirmation"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required
                            />
                        </div>

                        <Accordion collapseAll>
                            <Accordion.Panel>
                                <Accordion.Title>
                                    Votre Adresse (peut être ajouté plus tard)
                                </Accordion.Title>
                                <Accordion.Content>
                                    <div className="sm:col-span-3">
                                        <label
                                            htmlFor="number"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Numéro
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="number"
                                                name="number"
                                                id="number"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-3">
                                        <label
                                            htmlFor="street"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Rue
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name="street"
                                                id="street"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-3 ">
                                        <label
                                            htmlFor="city"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Ville
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name="city"
                                                id="city"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                        <label
                                            htmlFor="zip_code"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Code Postal
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                pattern="[0-9]{5}"
                                                name="zip_code"
                                                id="zip_code"
                                                autoComplete="zip_code"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                    required
                                />
                            </div>
                            <div className="ml-3 text-sm">
                                <label
                                    htmlFor="RGPD"
                                    className="font-light text-gray-500 dark:text-gray-300"
                                >
                                    I accept the{" "}
                                    <a
                                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                        href="#"
                                    >
                                        Terms and Conditions
                                    </a>
                                </label>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Create an account
                        </button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Already have an account?{" "}
                            <a
                                href="#/login"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Login here
                            </a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
