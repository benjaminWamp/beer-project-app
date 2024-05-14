import React, { useContext, useEffect, useState } from "react";
import ProductList from "./catalogue/ProductList";
import { fetchProducts } from "../utils/services/CatalogueServices";
import Filters from "./catalogue/Filters";
import { fetchCategories } from "../utils/services/CategoryService";
import { fetchManufacturers } from "../utils/services/ManufacturerService";
import { Category } from "../types/category.types";
import { Manufacturer } from "../types/manufacturer.types";
import { Product } from "../types/product.types";
import {
    addToFavorites,
    deleteFavorites,
    fetchUserFavorite,
} from "../utils/services/FavoriteService";
import UserContext from "../context/UserContext";
import FavoriteContext from "../context/FavoriteContext";
import { useSearchParams } from "react-router-dom";
import ProductListSkeleton from "./skeletons/ProductListSkeleton";

const Catalogue = () => {
    const [productList, setProductList] = useState<Product[]>();
    const [categories, setCategories] = useState<Category[]>();
    const [manufacturers, setManufacturers] = useState<Manufacturer[]>();
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [totalProducts, setTotalProducts] = useState<number>(0);
    const [perPage, setPerPage] = useState<number>(0);
    const [userFavorites, setUserFavorites] = useState<any>();
    const { token } = useContext(UserContext);
    const { userAllFavorites, handleDeleteFavorite, handleAddToFavorite } =
        useContext(FavoriteContext);
    const [searchParams, setSearchParams] = useSearchParams();

    const getProducts = async (
        page: number,
        categories?: string[],
        manufacturers?: string[],
        sorting?: string,
        order?: string,
        search?: string
    ) => {
        const response = await fetchProducts(
            page,
            categories,
            manufacturers,
            sorting,
            order,
            search
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

    const getDatas = async () => {
        let productsData;

        if (searchParams.get("category") !== null) {
            const category: string[] = [searchParams.get("category")].filter(
                (value) => value !== null
            ) as string[];
            productsData = await getProducts(1, category);
        } else {
            productsData = await getProducts(1);
        }
        const categoriesData = await getCategories();
        const manufacturersData = await getManufacturers();
        setProductList(productsData.data);
        setCurrentPage(productsData.current_page);
        setTotalPages(productsData.last_page);
        setTotalProducts(productsData.total);
        setPerPage(productsData.to);
        setCategories(categoriesData);
        setManufacturers(manufacturersData);
        setUserFavorites(userAllFavorites);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        getDatas();
    }, [token]);

    return productList && categories && manufacturers ? (
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
            perPage={perPage}
            setPerPage={setPerPage}
        />
    ) : (
        <div className="min-h-screen flex flex-row flex-wrap gap-16 justify-center bg-background pt-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {[0, 1, 2, 3, 4, 5, 6, 7].map((key) => (
                <ProductListSkeleton key={key} />
            ))}
        </div>
    );
};

export default Catalogue;
