import React, { useEffect, useState } from "react";
import { fetchProduct } from "../utils/ProductServices";
import { fetchUser } from "../utils/LoginService";
import { fetchUserFavorite } from "../utils/CartService";
import { fetchUserReviews } from "../utils/ReviewsService";
import ProductList from "./catalogue/ProductList";
import { fetchProducts } from "../utils/CatalogueServices";

const TestServices = () => {
    const [productList, setProductList] = useState<any>();
    const [product, setProduct] = useState<any>();
    // const [userToken, setUserToken] = useState<any>();
    const [favorites, setFavorites] = useState<any>();
    const [reviews, setReviews] = useState<any>();

    const putdata = async () => {
        const testApi = await fetchProducts();

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
            // const tokenData = await token();
            setProductList(ListData);
            setProduct(productData);
            // setUserToken(tokenData);
        };
        test();
    }, []);

    useEffect(() => {
        const userToken = localStorage.getItem("token");
        const userGet = async () => {
            if (userToken) {
                console.log("useEffect2", userToken);
                const favorites = await fetchUserFavorite(userToken);
                const reviewsFetch = async () =>
                    await fetchUserReviews(userToken);
                setReviews(reviewsFetch);
                setFavorites(favorites);
            }
        };
        userGet();
    }, []);

    console.log("datas ?", productList);
    console.log("datas2 ?", product);

    console.log(favorites);
    console.log(reviews);

    return (
        <>
            {product && productList && (
                <>
                    <ProductList products={productList} />
                    <h3>Liste de 15 produits</h3>
                    {productList?.map((product) => {
                        return <p>{product.name}</p>;
                    })}
                    <h3>Produit id 1</h3>
                    {product && <p>{product.name}</p>}
                </>
            )}
        </>
    );
};

export default TestServices;
