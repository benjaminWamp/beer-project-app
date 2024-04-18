import React, { useEffect, useState } from "react";
import "./App.css";
import Catalogue from "./components/Catalogue";
import Layout from "./layout/Layout";
import { HashRouter, Route, Routes } from "react-router-dom";

import { routes } from "./utils/routes";
import { UserContextProvider } from "./context/Context";

const App = () => {
    return (
        <HashRouter>
            <UserContextProvider>
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
            </UserContextProvider>
        </HashRouter>
    );
};

export default App;
