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

        setUser(response);
    };

    useEffect(() => {
        if (token) {
            getUser();
        }
    }, [token]);

    return (
        <div>
            {user && token && (
                <div className="flex flex-row justify-around items-start">
                    <AccountDetails user={user} getUser={getUser} />
                    <FavoriteList token={token} />
                </div>
            )}
        </div>
    );
};

export default AccountPage;
