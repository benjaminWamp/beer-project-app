import React, { useEffect, useState } from "react";
import "./App.css";
import Catalogue from "./components/Catalogue";
import Layout from "./layout/Layout";
import { HashRouter, Route, Routes } from "react-router-dom";

import { routes } from "./utils/routes";
import { UserContextProvider } from "./context/UserContext";
import { FavoriteContextProvider } from "./context/FavoriteContext";
import { AlertContextProvider } from "./context/AlertContext";

const App = () => {
    return (
        <HashRouter>
            <AlertContextProvider>
                <UserContextProvider>
                    <FavoriteContextProvider>
                        <Layout>
                            <Routes>
                                {Object.values(routes).map((route) => (
                                    <Route
                                        key={route.path}
                                        path={route.path}
                                        element={route.element}
                                    />
                                ))}
                            </Routes>
                        </Layout>
                    </FavoriteContextProvider>
                </UserContextProvider>
            </AlertContextProvider>
        </HashRouter>
    );
};

export default App;
