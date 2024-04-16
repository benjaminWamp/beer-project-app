import React, { useEffect, useState } from "react";
import ProductList from "./catalogue/ProductList";
import { fetchProducts } from "../utils/services/CatalogueServices";

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
