import React, { useEffect, useState } from "react";
import Coucou from "./components/Coucou";
import { fetchData } from "./utils/OrderServices";

const App = () => {
    const [data, setData] = useState<any>();
    const putdata = async () => {
        const testApi = await fetchData();

        return testApi.data;
    };

    useEffect(() => {
        const test = async () => {
            const datas = await putdata();
            setData(datas);
        };
        test();
    }, []);

    console.log("datas ?", data);

    return (
        <>
            <Coucou />
            {data?.map((data) => {
                return <p>{data.name}</p>;
            })}
        </>
    );
};

export default App;
