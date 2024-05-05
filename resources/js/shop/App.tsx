import React, { useEffect, useState } from "react";
import "./App.css";
import Catalogue from "./components/Catalogue";
import Layout from "./layout/Layout";
import { HashRouter, Route, Routes } from "react-router-dom";

import { routes } from "./utils/routes";
import { UserContextProvider } from "./context/UserContext";
import { FavoriteContextProvider } from "./context/FavoriteContext";

const App = () => {
    return (
        <HashRouter>
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
        </HashRouter>
    );
};

export default App;
