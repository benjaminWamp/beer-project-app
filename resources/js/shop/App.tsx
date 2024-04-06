import React, { useEffect, useState } from "react";
import Coucou from "./components/Coucou";
import { fetchData } from "./utils/CatalogueServices";
import { fetchProduct } from "./utils/ProductServices";
import TestServices from "./components/TestServices";

const App = () => {
    return (
        <>
            <Coucou />
            <TestServices />
        </>
    );
};

export default App;
