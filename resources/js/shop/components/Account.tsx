import React, { useContext, useEffect, useState } from "react";
import AccountDetails from "./account/AccountDetail";
import FavoriteList from "./account/FavoriteList";
import { fetchUser } from "../utils/services/UserServices";
import UserContext from "../context/UserContext";
import { fetchUserFavorite } from "../utils/services/FavoriteService";
import { User } from "../types/user.types";

const AccountPage = () => {
    const [user, setUser] = useState<User>();

    const { token } = useContext(UserContext);

    const getUser = async () => {
        const response = await fetchUser(token);

        setUser(response);
    };

    useEffect(() => {
        if (token) {
            getUser();
        }
    }, [token]);

    return (
        <div className="min-h-screen bg-background flex flex-col items-center pt-12">
            <div className="max-w-screen-xl w-full">
                <h1 className="mx-0 font-title text-accent font-bold text-5xl">
                    Mon compte
                </h1>

                {user && token && (
                <div className="flex justify-center py-12">
                    <div className="max-w-screen-xl w-full flex justify-between gap-8">
                        <AccountDetails user={user} getUser={getUser} />
                        <FavoriteList />
                    </div>
                </div>
            )}
            </div>

            
        </div>
    );
};

export default AccountPage;
