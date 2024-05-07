import React, { useContext, useEffect } from "react";
import { User } from "../../types/user.types";
import UpdateForm from "./UpdateForm";
import {
    deleteUser,
    updateUser,
    updateUserPassword,
} from "../../utils/services/UserServices";
import UserContext from "../../context/Context";
import UpdatePasswordForm from "./UpdatePasswordForm";
import DeleteUserModal from "./DeleteUserModal";
import { useNavigate } from "react-router-dom";

interface AccountDetailProps {
    user: User;
    getUser: () => void;
}

const AccountDetails = (props: AccountDetailProps) => {
    const { user, getUser } = props;
    const { token, logOut } = useContext(UserContext);
    const navigate = useNavigate();

    const [openUserForm, setUserForm] = React.useState(false);
    const [openUserPasswordForm, setUserPasswordForm] = React.useState(false);
    const [openDeleteUserModal, setDeleteUserModal] = React.useState(false);

    const handleClosUserForm = () => {
        setUserForm(false);
    };

    const handleClosePasswordForm = () => {
        setUserPasswordForm(false);
    };

    const handleCloseDeleteUser = () => {
        setDeleteUserModal(false);
    };

    const handleUpdateUser = async (e) => {
        e.preventDefault();

        const { name, email, number, street, city, zip_code } = e.target;

        const userData = {
            name: name.value,
            email: email.value,
            number: number.value,
            street: street.value,
            city: city.value,
            zip_code: zip_code.value,
        };
        await updateUser(userData, token);
        setUserForm(false);
        getUser();
    };

    const handleUpdateUserPassword = async (e) => {
        e.preventDefault();

        const { currentPassword, newPassword, newPassword_confirmation } =
            e.target;

        const userData = {
            currentPassword: currentPassword.value,
            newPassword: newPassword.value,
            newPassword_confirmation: newPassword_confirmation.value,
        };
        await updateUserPassword(userData, token);
        setUserPasswordForm(false);
        getUser();
    };

    const handleDeleteUser = async () => {
        await deleteUser(token);
        setDeleteUserModal(false);
        logOut();
        navigate("/");
    };

    return (
        <>
            <UpdateForm
                open={openUserForm}
                onClose={handleClosUserForm}
                onSubmit={handleUpdateUser}
                user={user}
            />
            <UpdatePasswordForm
                open={openUserPasswordForm}
                onClose={handleClosePasswordForm}
                onSubmit={handleUpdateUserPassword}
            />
            <DeleteUserModal
                open={openDeleteUserModal}
                onClose={handleCloseDeleteUser}
                onDelete={handleDeleteUser}
            />
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
                <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-orange-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    onClick={() => {
                        setUserPasswordForm(true);
                    }}
                >
                    Modifier mon mot de passe
                </button>
                <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    onClick={() => {
                        setDeleteUserModal(true);
                    }}
                >
                    Supprimer mon compte
                </button>
            </div>
        </>
    );
};

export default AccountDetails;
