import React, { useEffect, useState } from "react";
import "./App.css";
import Catalogue from "./components/Catalogue";
import Layout from "./layout/Layout";
import {
    BrowserRouter,
    createBrowserRouter,
    createHashRouter,
    HashRouter,
    Route,
    RouterProvider,
    Routes,
} from "react-router-dom";
import ProductList from "./components/catalogue/ProductList";
import ProductLayer from "./components/Product";
import { fetchUser } from "./utils/services/LoginService";
import { routes } from "./utils/routes";

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
        <Layout>
            <HashRouter>
                <Routes>
                    {Object.values(routes).map((route) => (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={route.element}
                        />
                    ))}
                </Routes>
            </HashRouter>
        </Layout>
    );
};

export default App;
