import React, { useContext, useEffect, useState } from "react";
import { Favorite } from "../../types/favorite.types";
import UserContext from "../../context/UserContext";
import Pagination from "../shared/Pagination";
import FavoriteContext from "../../context/FavoriteContext";

const FavoriteList = () => {
    const [favorites, setFavorites] = useState<Favorite[]>();
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [totalFavorite, setTotalFavorite] = useState<number>(0);
    const { url } = useContext(UserContext);
    const { getUserFavorites, handleDeleteFavorite } =
        useContext(FavoriteContext);

    const getDatas = async () => {
        const favoritesData = await getUserFavorites(currentPage, true);
        setFavorites(favoritesData.data);
        setCurrentPage(favoritesData.current_page);
        setTotalPages(favoritesData.last_page);
        setTotalFavorite(favoritesData.total);
    };

    useEffect(() => {
        getDatas();
    }, [currentPage]);

    return (
        favorites && (
            <div className="flex flex-col bg-white overflow-hidden shadow rounded-lg border px-4 py-5 sm:px-6 ">
                <h2 className="text-lg font-medium leading-6 text-gray-900">
                    Mes favoris
                </h2>
                <Pagination
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    totalPages={totalPages}
                    totalElements={totalFavorite}
                    numberOfElements={5}
                />
                <div className="mt-8 max-h-screen overflow-hidden overflow-y-auto">
                    <div className="flow-root ">
                        <ul
                            role="list"
                            className="-my-6 divide-y divide-gray-200"
                        >
                            {favorites.map((favorite) => (
                                <li key={favorite.id} className="flex py-6">
                                    <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                        <img
                                            src={`${url}/storage/images/${favorite.product.image}`}
                                            alt={`image de ${favorite.product.name}`}
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </div>

                                    <div className="ml-4 flex flex-1 flex-col">
                                        <div>
                                            <div className="flex justify-between text-base font-medium text-gray-900">
                                                <h3>
                                                    <a
                                                        href={`#/produit/${favorite.product_id}`}
                                                    >
                                                        {favorite.product.name}
                                                    </a>
                                                </h3>
                                                <p className="ml-4">
                                                    {(
                                                        (favorite.product
                                                            .price_ht +
                                                            0.2) /
                                                        100
                                                    ).toFixed(2)}
                                                    €
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex">
                                            <button
                                                type="button"
                                                className="font-medium text-indigo-600 hover:text-indigo-500"
                                                onClick={() => {
                                                    handleDeleteFavorite(
                                                        favorite.product_id
                                                    );
                                                    getDatas();
                                                }}
                                            >
                                                Supprimer
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        )
    );
};

export default FavoriteList;
