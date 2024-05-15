import React, { useContext, useEffect } from "react";
import { User } from "../../types/user.types";
import UpdateForm from "./UpdateForm";
import {
    deleteUser,
    updateUser,
    updateUserPassword,
} from "../../utils/services/UserServices";
import UserContext from "../../context/UserContext";
import UpdatePasswordForm from "./UpdatePasswordForm";
import DeleteUserModal from "./DeleteUserModal";
import { useNavigate } from "react-router-dom";
import AlertContext from "../../context/AlertContext";

interface AccountDetailProps {
    user: User;
    getUser: () => void;
}

const AccountDetails = (props: AccountDetailProps) => {
    const { user, getUser } = props;
    const { token, logOut } = useContext(UserContext);
    const { addAlert } = useContext(AlertContext);
    const navigate = useNavigate();

    const [openUserForm, setUserForm] = React.useState(false);
    const [openUserPasswordForm, setUserPasswordForm] = React.useState(false);
    const [openDeleteUserModal, setOpenDeleteUserModal] = React.useState(false);

    const handleClosUserForm = () => {
        setUserForm(false);
    };

    const handleClosePasswordForm = () => {
        setUserPasswordForm(false);
    };

    const handleCloseDeleteUser = () => {
        setOpenDeleteUserModal(false);
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
        if(token)
        try {
            const result = await updateUser(userData, token);
            addAlert("success", result.message);
        } catch (err) {
            const message: string = (Object.values(err)[0] as string[])[0];
            addAlert("failure", message);
            return;
        }

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
        try {
            const result = await updateUserPassword(userData, token);
            addAlert("success", result.message);
        } catch (err: any) {
            const message: string = (Object.values(err)[0] as string[])[0];
            addAlert("failure", message);
            return;
        }
        setUserPasswordForm(false);
        getUser();
    };

    const handleDeleteUser = async () => {
        try {
            const result = await deleteUser(token);
            addAlert("success", result.message);
        } catch (err) {
            const message: string = (Object.values(err)[0] as string[])[0];
            addAlert("failure", message);
            return;
        }
        setOpenDeleteUserModal(false);
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
            <div className="pb-5 bg-white w-1/3 overflow-hidden shadow rounded-lg border flex flex-col justify-between">
                <div>
                    <div className="px-4 py-5 sm:px-6">
                        <h2 className="font-title text-accent text-lg leading-6 font-bold mb-4">
                            Profil Utilisateur
                        </h2>
                        <button
                            type="button"
                            className="rounded-md transition-all text-sm inline-block font-title font-bold border-2 py-2 px-4 shadow-buttonDarkBase hover:shadow-buttonDarkHover hover:text-secondary text-accent border-accent"
                            onClick={() => {
                                setUserForm(true);
                            }}
                        >
                            Modifier mes informations
                        </button>
                    </div>
                    <div className="border-t border-b mb-5 border-gray-200 px-4 py-5 sm:p-0">
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
                <div className="px-5">
                    <button
                        type="button"
                        className="rounded-md transition-all text-sm inline-block font-title font-bold border-2 py-2 px-4 shadow-buttonDarkBase hover:shadow-buttonDarkHover hover:text-secondary text-accent border-accent w-full mb-2"
                        onClick={() => {
                            setUserPasswordForm(true);
                        }}
                    >
                        Modifier mon mot de passe
                    </button>
                    <button
                        type="button"
                        className="rounded-md transition-all text-sm inline-block font-title font-bold border-2 py-2 px-4 text-[#E02424] border-[#E02424] shadow-buttonRedBase hover:shadow-buttonRedHover hover:text-white w-full"
                        onClick={() => {
                            setOpenDeleteUserModal(true);
                        }}
                    >
                        Supprimer mon compte
                    </button>
                </div>
            </div>
        </>
    );
};

export default AccountDetails;
