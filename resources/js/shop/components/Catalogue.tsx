import React, { useEffect, useState } from "react";
import ProductList from "./catalogue/ProductList";
import { fetchProducts } from "../utils/services/CatalogueServices";
import Filters from "./catalogue/Filters";
import { fetchCategories } from "../utils/services/CategoryService";
import { fetchManufacturers } from "../utils/services/ManufacturerService";
import { Category } from "../types/category.types";
import { Manufacturer } from "../types/manufacturer.types";
import { Product } from "../types/product.types";

const Catalogue = () => {
    const [productList, setProductList] = useState<Product[]>();
    const [categories, setCategories] = useState<Category[]>();
    const [manufacturers, setManufacturers] = useState<Manufacturer[]>();
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [totalProducts, setTotalProducts] = useState<number>(0);

    const getProducts = async (
        page: number,
        categories?: string[],
        manufacturers?: string[],
        sorting?: string,
        order?: string
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
