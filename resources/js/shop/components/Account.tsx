import React, { useContext, useEffect, useState } from "react";
import AccountDetails from "./account/AccountDetail";
import FavoriteList from "./account/FavoriteList";
import { fetchUser } from "../utils/services/UserServices";
import UserContext from "../context/Context";
import { fetchUserFavorite } from "../utils/services/FavoriteService";
import { User } from "../types/user.types";

const AccountPage = () => {
    const [user, setUser] = useState<User>();

    const { token } = useContext(UserContext);

    const getUser = async () => {
        const response = await fetchUser(token);

        return response;
    };

    useEffect(() => {
        const getDatas = async () => {
            const userData = await getUser();

            setUser(userData);
        };
        if (token) {
            getDatas();
        }
    }, [token]);

    return (
        <div>
            {user && token && (
                <div className="flex flex-row justify-around items-start">
                    <AccountDetails user={user} />
                    <FavoriteList token={token} />
                </div>
            )}
        </div>
    );
};

export default AccountPage;
