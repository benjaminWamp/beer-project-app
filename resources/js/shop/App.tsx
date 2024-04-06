import React, { useEffect, useState } from "react";
import Coucou from "./components/Coucou";
import { fetchData } from "./utils/CatalogueServices";
import { fetchProduct } from "./utils/ProductServices";
import TestServices from "./components/TestServices";
import { fetchUserFavorite } from "./utils/CartService";
import { fetchUser } from "./utils/LoginService";

const App = () => {
    const [userToken, setUserToken] = useState<any>();
    const token = async () => {
        return await fetchUser();
    };
    useEffect(() => {
        const test = async () => {
            const tokenData = await token();

            setUserToken(tokenData);
            localStorage.setItem("token", tokenData.token);
        };
        test();
    }, []);

    return (
        <>
            <Coucou />
            <TestServices />
        </>
    );
};

export default App;
