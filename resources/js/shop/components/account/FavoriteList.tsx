import React, { useContext, useEffect, useState } from "react";
import { Favorite } from "../../types/favorite.types";
import UserContext from "../../context/UserContext";
import Pagination from "../shared/Pagination";
import FavoriteContext from "../../context/FavoriteContext";
import TableSkeleton from "../skeletons/TableSkeleton";

const FavoriteList = () => {
    const [favorites, setFavorites] = useState<Favorite[]>();
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [totalFavorite, setTotalFavorite] = useState<number>(0);
    const [perPage, setPerPage] = useState<number>(0);

    const { url } = useContext(UserContext);
    const { getUserFavorites, handleDeleteFavorite } =
        useContext(FavoriteContext);

    const getDatas = async () => {
        const favoritesData = await getUserFavorites(currentPage, true);
        setFavorites(favoritesData.data);
        setCurrentPage(favoritesData.current_page);
        setTotalPages(favoritesData.last_page);
        setTotalFavorite(favoritesData.total);
        setPerPage(favoritesData.to);
    };

    useEffect(() => {
        getDatas();
    }, [currentPage]);

    return (
        <div className="w-2/3 flex flex-col bg-white overflow-hidden shadow rounded-lg border px-4 py-5 sm:px-6 ">
            <h2 className="font-title text-lg font-bold leading-6 text-accent mb-4">
                Mes favoris
            </h2>
            {favorites ? (
                favorites.length > 0 ? (
                    <>
                        <div className=" overflow-hidden">
                            <div className="relative rounded-md overflow-hidden my-4">
                                <table className="w-full text-sm text-left rtl:text-right text-zinc-50">
                                    <thead className="text-xs text-zinc-50 uppercase bg-accent ">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="w-16 font-title font-bold text-background px-6 py-3"
                                            >
                                                Image Produit
                                            </th>
                                            <th
                                                scope="col"
                                                className="font-title font-bold text-background px-6 py-3"
                                            >
                                                Produit
                                            </th>
                                            <th
                                                scope="col"
                                                className="font-title font-bold text-background px-6 py-3"
                                            >
                                                Prix
                                            </th>
                                            <th
                                                scope="col"
                                                className="font-title font-bold text-background py-3 pr-7"
                                            >
                                                Supprimer
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {favorites.map((favorite) => (
                                            <tr className="bg-table border-b border-accent text-slate-950">
                                                <th className="h-16 w-16 px-6 py-4">
                                                    <img
                                                        src={`${url}/storage/images/${favorite.product.image}`}
                                                        alt={`image de ${favorite.product.name}`}
                                                        className="h-full w-full object-cover object-center"
                                                    />
                                                </th>

                                                <td className="px-6 py-4">
                                                    <div className=" text-accent font-medium">
                                                        <h3>
                                                            <a
                                                                href={`#/produit/${favorite.product_id}`}
                                                            >
                                                                {
                                                                    favorite
                                                                        .product
                                                                        .name
                                                                }
                                                            </a>
                                                        </h3>
                                                    </div>
                                                </td>

                                                <td className="px-6 py-4">
                                                    <p>
                                                        {(
                                                            (favorite.product
                                                                .price_ht +
                                                                0.2) /
                                                            100
                                                        ).toFixed(2)}
                                                        €
                                                    </p>
                                                </td>

                                                <td className=" min-h-full justify-end px-6 py-4">
                                                    <button
                                                        type="button"
                                                        className="border-2 border-accent bg-secondary rounded-3xl px-2 py-2 text-sm font-medium hover:-translate-y-1 transition-all"
                                                        onClick={() => {
                                                            handleDeleteFavorite(
                                                                favorite.product_id
                                                            );
                                                            getDatas();
                                                        }}
                                                    >
                                                        <svg
                                                            className="w-5 h-5 text-black"
                                                            aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path
                                                                stroke="currentColor"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                stroke-width="2"
                                                                d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
                                                            />
                                                        </svg>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="flex justify-end text-sm ">
                            <Pagination
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                                totalPages={totalPages}
                                totalElements={totalFavorite}
                                numberOfElements={perPage}
                            />
                        </div>
                    </>
                ) : (
                    <h3 className="font-title text-md font-bold leading-6 text-accent mb-4">
                        Ajoute donc des favoris !
                    </h3>
                )
            ) : (
                <TableSkeleton />
            )}
        </div>
    );
};

export default FavoriteList;
