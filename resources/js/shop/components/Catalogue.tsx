import React, { useEffect, useState } from "react";
import ProductList from "./catalogue/ProductList";
import { fetchProducts } from "../utils/services/CatalogueServices";
import Filters from "./catalogue/Filters";
import { fetchCategories } from "../utils/services/CategoryService";
import { fetchManufacturers } from "../utils/services/ManufacturerService";

const Catalogue = () => {
    const [productList, setProductList] = useState<any>();
    const [categories, setCategories] = useState<any>();
    const [manufacturers, setManufacturers] = useState<any>();

    const getProducts = async () => {
        const response = await fetchProducts(1);

        return response.data;
    };

    const getCategories = async () => {
        const response = await fetchCategories();

        return response;
    };

    const getManufacturers = async () => {
        const response = await fetchManufacturers();

        return response;
    };

    useEffect(() => {
        const getDatas = async () => {
            const ProductsData = await getProducts();
            const categoriesData = await getCategories();
            const manufacturersData = await getManufacturers();
            setProductList(ProductsData);
            setCategories(categoriesData);
            setManufacturers(manufacturersData);
        };
        getDatas();
    }, []);

    return (
        productList &&
        categories &&
        manufacturers && (
            <Filters
                products={productList}
                categories={categories}
                manufacturers={manufacturers}
            />
        )
    );
};

export default Catalogue;
