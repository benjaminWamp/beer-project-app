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
    const [currentPage, setCurrentPage] = useState<number>();
    const [totalPages, setTotalPages] = useState<number>();
    const [totalProducts, setTotalProducts] = useState<number>();

    const getProducts = async (
        page,
        categories?,
        manufacturers?,
        sorting?,
        order?
    ) => {
        const response = await fetchProducts(
            page,
            categories,
            manufacturers,
            sorting,
            order
        );

        return response;
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
            const ProductsData = await getProducts(1);
            const categoriesData = await getCategories();
            const manufacturersData = await getManufacturers();
            setProductList(ProductsData.data);
            setCurrentPage(ProductsData.current_page);
            setTotalPages(ProductsData.last_page);
            setTotalProducts(ProductsData.total);
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
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalPages={totalPages}
                setTotalPages={setTotalPages}
                setTotalProducts={setTotalProducts}
                totalProducts={totalProducts}
                getProducts={getProducts}
            />
        )
    );
};

export default Catalogue;
