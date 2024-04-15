import React, { useEffect, useState } from "react";
import "./App.css";
import { fetchUser } from "./utils/LoginService";
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

const router = createHashRouter([
    {
        path: "/",
        element: <div>Coucou</div>,
    },
    {
        path: "/catalogue",
        element: <Catalogue />,
    },
    {
        path: "/product/:productId",
        element: <div>Produit</div>,
    },
    {
        path: "/login",
        element: <div>Login</div>,
    },
    {
        path: "/login",
        element: <div>Login</div>,
    },
]);

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
            <RouterProvider router={router} />
            {/* <HashRouter>
                <Routes>
                    <Route path="/" element={<div>Coucou</div>} />
                    <Route path="catalogue" element={<Catalogue />} />
                </Routes>
            </HashRouter> */}
        </Layout>
    );
};

export default App;
