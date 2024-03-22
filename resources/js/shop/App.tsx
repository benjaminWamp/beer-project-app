import React, { useEffect, useState } from "react";
import Coucou from "./components/Coucou";
import { fetchData } from "./utils/OrderServices";

const App = () => {
    const [data, setData] = useState("");
    const putdata = async () => {
        const testApi = await fetchData();
        console.log("data ?", testApi.data);
    };

    useEffect(() => {
        putdata();
    }, []);

    return <Coucou />;
};

export default App;
