import React, { useEffect, useState } from "react";
import { fetchData } from "../utils/CatalogueServices";
import { fetchProduct } from "../utils/ProductServices";

const TestServices = () => {
    const [productList, setProductList] = useState<any>();
    const [product, setProduct] = useState<any>();
    const putdata = async () => {
        const testApi = await fetchData();

        return testApi.data;
    };

    const productFetch = async () => {
        const productData = await fetchProduct("1");

        return productData;
    };

    useEffect(() => {
        const test = async () => {
            const ListData = await putdata();
            const productData = await productFetch();
            setProductList(ListData);
            setProduct(productData);
        };
        test();
    }, []);

    console.log("datas ?", productList);
    console.log("datas2 ?", product);

    return (
        <>
            <h3>Liste de 15 produits</h3>
            {productList?.map((product) => {
                return <p>{product.name}</p>;
            })}
            <h3>Produit id 1</h3>
            {product && <p>{product.name}</p>}
        </>
    );
};

export default TestServices;
