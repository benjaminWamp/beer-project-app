import React from "react";
import { createHashRouter } from "react-router-dom";
import Catalogue from "../components/Catalogue";
import ProductLayer from "../components/Product";
import Login from "../components/Login";
import AccountPage from "../components/Account";

export const routes = {
    home: {
        path: "/",
        element: <div>Acceuil</div>,
    },
    about: {
        path: "/a-propos",
        element: <div>A propos</div>,
    },
    contact: {
        path: "/contact",
        element: <div>Contact</div>,
    },
    catalogue: {
        path: "/catalogue",
        element: <Catalogue />,
    },
    product: {
        path: "/produit/:id",
        element: <ProductLayer />,
    },
    login: {
        path: "/login",
        element: <Login />,
    },
    account: {
        path: "/account",
        element: <AccountPage />,
    },
    cart: {
        path: "/cart",
        element: <div>Cart</div>,
    },
    checkout: {
        path: "/checkout",
        element: <div>Checkout</div>,
    },
    mentionsLegales: {
        path: "/mentions-legales",
        element: <div>Mentions Légales</div>,
    },
    cgv: {
        path: "/cgv",
        element: <div>CGV</div>,
    },
};
