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
import ProductList from "./components/catalogue/ProductList";
import ProductLayer from "./components/Product";

const router = createHashRouter([
    {
        path: "/",
        element: <div>Acceuil</div>,
    },
    {
        path: "/a-propos",
        element: <div>A propos</div>,
    },
    {
        path: "/contact",
        element: <div>Contact</div>,
    },
    {
        path: "/catalogue",
        element: <Catalogue />,
    },
    {
        path: "/produit",
        element: <ProductLayer />,
    },
    {
        path: "/login",
        element: <div>Login</div>,
    },
    {
        path: "/account",
        element: <div>Account</div>,
    },
    {
        path: "/cart",
        element: <div>Cart</div>,
    },
    {
        path: "/checkout",
        element: <div>Checkout</div>,
    },
    {
        path: "/mentions-legales",
        element: <div>Mentions Légales</div>,
    },
    {
        path: "/cgv",
        element: <div>CGV</div>,
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
