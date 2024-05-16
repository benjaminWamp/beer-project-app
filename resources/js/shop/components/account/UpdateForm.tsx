import React from "react";
import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { User } from "../../types/user.types";

interface DialogProps {
    open: boolean;
    onClose: () => void;
    onSubmit: (e: any) => void;
    user: User;
}

const UpdateForm = (props: DialogProps) => {
    const { open, onClose, user, onSubmit } = props;

    const cancelButtonRef = useRef(null);

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog
                as="div"
                className="relative z-10 "
                initialFocus={cancelButtonRef}
                onClose={() => onClose()}
            >
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto mt-24">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 ">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-5xl">
                                <form onSubmit={(e) => onSubmit(e)}>
                                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 ">
                                        <div className="border-b border-gray-900/10 pb-12">
                                            <h2 className="text-2xl font-title text-accent font-bold leading-7">
                                                Information personelles
                                            </h2>
                                            <p className="mt-1 text-sm leading-6 text-gray-600">
                                                Utilisez une adresse mail
                                                permanente où vous pourrez
                                                recevoir des mails
                                            </p>

                                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                                <div className="sm:col-span-3">
                                                    <label
                                                        htmlFor="name"
                                                        className="block text-sm font-title text-accent font-bold leading-6"
                                                    >
                                                        Nom Prénom
                                                    </label>
                                                    <div className="mt-2">
                                                        <input
                                                            type="text"
                                                            name="name"
                                                            id="name"
                                                            defaultValue={
                                                                user.name
                                                            }
                                                            autoComplete="given-name"
                                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="sm:col-span-3">
                                                    <label
                                                        htmlFor="email"
                                                        className="block text-sm font-title text-accent font-bold leading-6"
                                                    >
                                                        Adresse email
                                                    </label>
                                                    <div className="mt-2">
                                                        <input
                                                            id="email"
                                                            name="email"
                                                            type="email"
                                                            defaultValue={
                                                                user.email
                                                            }
                                                            autoComplete="email"
                                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="sm:col-span-6">
                                                    <h3 className="text-2xl font-title text-accent font-bold leading-7">
                                                        Votre Adresse
                                                    </h3>
                                                    <p className="mt-1 text-sm leading-6 text-gray-600">
                                                        Votre adresse de
                                                        livraison
                                                    </p>
                                                </div>

                                                <div className="sm:col-span-3">
                                                    <label
                                                        htmlFor="number"
                                                        className="block text-sm font-title text-accent font-bold leading-6 "
                                                    >
                                                        Numéro
                                                    </label>
                                                    <div className="mt-2">
                                                        <input
                                                            type="number"
                                                            name="number"
                                                            id="number"
                                                            defaultValue={
                                                                user.number
                                                            }
                                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="sm:col-span-3">
                                                    <label
                                                        htmlFor="street"
                                                        className="block text-sm font-title text-accent font-bold leading-6"
                                                    >
                                                        Rue
                                                    </label>
                                                    <div className="mt-2">
                                                        <input
                                                            type="text"
                                                            name="street"
                                                            id="street"
                                                            defaultValue={
                                                                user.street
                                                            }
                                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="sm:col-span-3 ">
                                                    <label
                                                        htmlFor="city"
                                                        className="block text-sm font-title text-accent font-bold leading-6"
                                                    >
                                                        Ville
                                                    </label>
                                                    <div className="mt-2">
                                                        <input
                                                            type="text"
                                                            name="city"
                                                            id="city"
                                                            defaultValue={
                                                                user.city
                                                            }
                                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="sm:col-span-3">
                                                    <label
                                                        htmlFor="zip_code"
                                                        className="block text-sm font-title text-accent font-bold leading-6"
                                                    >
                                                        Code Postal
                                                    </label>
                                                    <div className="mt-2">
                                                        <input
                                                            type="text"
                                                            pattern="[0-9]{5}"
                                                            name="zip_code"
                                                            id="zip_code"
                                                            defaultValue={
                                                                user.zip_code
                                                            }
                                                            autoComplete="zip_code"
                                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse gap-2 sm:px-6">
                                        <button
                                            type="submit"
                                            className="rounded-md transition-all text-sm inline-block font-title font-bold border-2 py-2 px-4 shadow-buttonDarkBase hover:shadow-buttonDarkHover hover:text-secondary text-accent border-accent"
                                        >
                                            Modifier
                                        </button>
                                        <button
                                            type="button"
                                            className="rounded-md transition-all text-sm inline-block font-title font-bold border-2 py-2 px-4 shadow-buttonDarkBase hover:shadow-buttonDarkHover hover:text-secondary text-accent border-accent"
                                            onClick={() => onClose()}
                                            ref={cancelButtonRef}
                                        >
                                            Annuler
                                        </button>
                                    </div>
                                </form>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
};

export default UpdateForm;
