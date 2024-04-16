import React, { useEffect, useState } from "react";
import { fetchProducts } from "../utils/CatalogueServices";
import ProductList from "./catalogue/ProductList";

const Catalogue = () => {
    const [productList, setProductList] = useState<any>();
    const getProduct = async () => {
        const response = await fetchProducts();

        return response.data;
    };

    useEffect(() => {
        const getDatas = async () => {
            const ListData = await getProduct();
            setProductList(ListData);
        };
        getDatas();
    }, []);

    return productList && <ProductList products={productList} />;
};

export default Catalogue;
