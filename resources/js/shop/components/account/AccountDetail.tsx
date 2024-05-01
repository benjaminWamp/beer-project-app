import React from "react";
import { User } from "../../types/user.types";
import UpdateForm from "./UpdateForm";

interface AccountDetailProps {
    user: User;
}

const AccountDetails = (props: AccountDetailProps) => {
    const { user } = props;
    const [openUserForm, setUserForm] = React.useState(false);

    const handleClosUserForm = () => {
        setUserForm(false);
    };

    return (
        <>
            <UpdateForm open={openUserForm} onClose={handleClosUserForm} />
            <div className="bg-white overflow-hidden shadow rounded-lg border">
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                        Profil Utilisateur
                    </h3>
                    <button
                        type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={() => {
                            setUserForm(true);
                        }}
                    >
                        Modifier mes informations
                    </button>
                </div>
                <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                    <dl className="sm:divide-y sm:divide-gray-200">
                        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Nom Prénom
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {user.name}
                            </dd>
                        </div>
                        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Adresse email
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {user.email}
                            </dd>
                        </div>

                        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Addresse
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {`${user.number} ${user.street} ${user.city} ${user.zip_code}`}
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </>
    );
};

export default AccountDetails;
