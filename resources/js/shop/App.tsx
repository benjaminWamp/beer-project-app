import React, { useEffect, useState } from "react";
import "./App.css";
import { fetchUser } from "./utils/LoginService";
import Catalogue from "./components/Catalogue";

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
            <Catalogue />
        </>
    );
};

export default App;
