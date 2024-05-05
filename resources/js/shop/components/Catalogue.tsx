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
import UserContext from "../context/Context";

const Catalogue = () => {
    const [productList, setProductList] = useState<Product[]>();
    const [categories, setCategories] = useState<Category[]>();
    const [manufacturers, setManufacturers] = useState<Manufacturer[]>();
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [totalProducts, setTotalProducts] = useState<number>(0);
    const [userFavorites, setUserFavorites] = useState<any>();
    const { token } = useContext(UserContext);

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

    const getUserFavorites = async () => {
        if (token) {
            return await fetchUserFavorite(token, 0, false);
        }
    };

    const getDatas = async () => {
        const productsData = await getProducts(1);
        const categoriesData = await getCategories();
        const manufacturersData = await getManufacturers();
        const favoritesDatas = await getUserFavorites();
        setProductList(productsData.data);
        setCurrentPage(productsData.current_page);
        setTotalPages(productsData.last_page);
        setTotalProducts(productsData.total);
        setCategories(categoriesData);
        setManufacturers(manufacturersData);
        setUserFavorites(favoritesDatas.data);
    };

    useEffect(() => {
        getDatas();
    }, [token]);

    const handleAddToFavorite = async (token: string, productId: number) => {
        const newFavoriteDatas = await addToFavorites(token, productId);
        await getDatas();
    };

    const handleDeleteFavorite = async (token: string, productId: number) => {
        await deleteFavorites(token, productId);
        await getDatas();
    };

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
                handleAddToFavorite={handleAddToFavorite}
                userFavorites={userFavorites}
                handleDeleteFavorite={handleDeleteFavorite}
            />
        )
    );
};

export default Catalogue;
