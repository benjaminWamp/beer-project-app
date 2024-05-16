import React, { useContext, useEffect, useState } from "react";
import { Favorite } from "../../types/favorite.types";
import UserContext from "../../context/UserContext";
import Pagination from "../shared/Pagination";
import FavoriteContext from "../../context/FavoriteContext";
import { fetchUserOrders } from "../../utils/services/OrderService";
import { Order } from "../../types/order.types";
import TableSkeleton from "../skeletons/TableSkeleton";
import { OrderStatus } from "../../types/orderStatus.enum";

const OrderList = () => {
    const [orders, setOrders] = useState<Order[]>();
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [totalFavorite, setTotalFavorite] = useState<number>(0);
    const { token } = useContext(UserContext);

    const getDatas = async () => {
        if (token) {
            const ordersData = await fetchUserOrders(token, currentPage);

            setOrders(ordersData.data);
            setCurrentPage(ordersData.current_page);
            setTotalPages(ordersData.last_page);
            setTotalFavorite(ordersData.total);
        }
    };

    useEffect(() => {
        getDatas();
    }, [currentPage]);

    return (
        <div className="w-full flex flex-col bg-white overflow-hidden shadow rounded-lg border px-4 py-5 sm:px-6 ">
            <h2 className="font-title text-lg font-bold leading-6 text-accent mb-4">
                Mes Commandes
            </h2>
            {orders ? (
                orders.length > 0 ? (
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
                                                Status
                                            </th>
                                            <th
                                                scope="col"
                                                className="font-title font-bold text-background px-6 py-3"
                                            >
                                                Total
                                            </th>
                                            <th
                                                scope="col"
                                                className="font-title font-bold text-background px-6 py-3"
                                            >
                                                Adresse d'envoi
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {orders &&
                                            orders.map((order) => {
                                                if (order.status !== "cart") {
                                                    return (
                                                        <tr className="bg-table border-b border-accent text-slate-950">
                                                            <th className="h-16 w-16 px-6 py-4">
                                                                <h3>
                                                                    {order.status ===
                                                                    "payed"
                                                                        ? OrderStatus.PAYED
                                                                        : order.status ===
                                                                          "delivered"
                                                                        ? OrderStatus.DELIVERED
                                                                        : order.status ===
                                                                          "cancel"
                                                                        ? OrderStatus.CANCELLED
                                                                        : "Status inconnu"}
                                                                </h3>
                                                            </th>

                                                            <td className="px-6 py-4">
                                                                <div className="w-96 flex justify-between text-accent font-medium">
                                                                    <h3>
                                                                        {(
                                                                            (order.total +
                                                                                0.2) /
                                                                            100
                                                                        ).toFixed(
                                                                            2
                                                                        )}
                                                                        €
                                                                    </h3>
                                                                </div>
                                                            </td>
                                                            <td className="px-6 py-4">
                                                                <div className="w-96 flex justify-between text-accent font-medium">
                                                                    <h3>
                                                                        {order.number +
                                                                            " " +
                                                                            order.street +
                                                                            " " +
                                                                            order.city +
                                                                            " " +
                                                                            order.zip_code}
                                                                    </h3>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    );
                                                }
                                            })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="flex justify-end text-sm">
                            <Pagination
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                                totalPages={totalPages}
                                totalElements={totalFavorite}
                                numberOfElements={5}
                            />
                        </div>
                    </>
                ) : (
                    <h3 className="font-title text-md font-bold leading-6 text-accent mb-4">
                        Passe ta première commande, tu attends quoi ?
                    </h3>
                )
            ) : (
                <TableSkeleton />
            )}
        </div>
    );
};

export default OrderList;
