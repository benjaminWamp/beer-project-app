import React, { useContext, useEffect, useState } from "react";
import { Favorite } from "../../types/favorite.types";
import UserContext from "../../context/Context";
import Pagination from "../shared/Pagination";
import { User } from "../../types/user.types";
import { fetchUserFavorite } from "../../utils/services/FavoriteService";

interface FavoriteListProps {
    token: string;
}

const FavoriteList = (props: FavoriteListProps) => {
    const { token } = props;
    const [favorites, setFavorites] = useState<Favorite[]>();
    const [userFavorites, setUserFavorites] = useState<any>();
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [totalFavorite, setTotalFavorite] = useState<number>(0);
    const { url } = useContext(UserContext);

    const getFavorite = async (page: number) => {
        const response = await fetchUserFavorite(token, page);

        return response;
    };

    useEffect(() => {
        const getDatas = async () => {
            const favoritesData = await getFavorite(currentPage);
            setFavorites(favoritesData.data);
            setCurrentPage(favoritesData.current_page);
            setTotalPages(favoritesData.last_page);
            setTotalFavorite(favoritesData.total);
        };
        if (token) {
            getDatas();
        }
    }, [token, currentPage]);

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
