import React, { useContext, useEffect, useState } from "react";
import AccountDetails from "./account/AccountDetail";
import FavoriteList from "./account/FavoriteList";
import { fetchUser } from "../utils/services/UserServices";
import UserContext from "../context/UserContext";
import { fetchUserFavorite } from "../utils/services/FavoriteService";
import { User } from "../types/user.types";
import AccountSkeleton from "./skeletons/AccountSkeleotn";

const AccountPage = () => {
    const [user, setUser] = useState<User>();

    const { token } = useContext(UserContext);

    const getUser = async () => {
        const response = await fetchUser(token);

        setUser(response);
    };

    useEffect(() => {
        if (token) {
            window.scrollTo(0, 0);
            getUser();
        }
    }, [token]);

    return (
        <div className="min-h-screen bg-background ">
            {user && token ? (
                <div className=" flex flex-row justify-around items-start">
                    <AccountDetails user={user} getUser={getUser} />
                    <FavoriteList />
                </div>
            ) : (
                <AccountSkeleton />
            )}
        </div>
    );
};

export default AccountPage;
