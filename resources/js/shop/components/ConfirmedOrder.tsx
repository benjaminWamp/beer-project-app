import React, { useContext, useEffect, useState } from "react";
import Button from "./shared/Button";
import { Mode } from "../types/style.enum";
import UserContext from "../context/UserContext";
import { fetchUserOrders } from "../utils/services/OrderService";
import TableSkeleton from "./skeletons/TableSkeleton";
import { Order } from "../types/order.types";

const ConfirmedOrder = () => {
    const [lastOrder, setLastOrder] = useState<Order>();
    const { token, url } = useContext(UserContext);

    const getLastOrder = async () => {
        try {
            if (token) {
                const response = await fetchUserOrders(token, 1);
                setLastOrder(response.data[0]);
            }
        } catch (err) {}
    };

    useEffect(() => {
        getLastOrder();
    }, [token]);

    return lastOrder ? (
        <>
            <section className="min-h-screen flex justify-center py-12">
                <div className="w-screen flex flex-col gap-8 items-center">
                    <h1 className="font-title text-6xl font-bold text-accent mb-2">
                        Commande Validée !
                    </h1>
                    <p>Merci de nous faire confiance !</p>
                    <Button
                        href="/#/catalogue"
                        text="Retourner au catalogue"
                        startCenterEnd="center"
                        mode={Mode.DARK}
                    />
                    <div className="w-full flex flex-col items-center px-12 gap-4">
                        <div>
                            <h2 className="font-title text-2xl font-bold text-accent">
                                Adresse d'envoie
                            </h2>

                            <p>{`${lastOrder.number} ${lastOrder.street} ${lastOrder.city} ${lastOrder.zip_code}`}</p>
                        </div>
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
                                        className="font-title font-bold text-background px-6 py-3 text-end"
                                    >
                                        Quantité
                                    </th>
                                    <th
                                        scope="col"
                                        className="font-title font-bold text-background px-6 py-3 text-end"
                                    >
                                        Prix
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {lastOrder.order_items.map((product, index) => {
                                    return (
                                        <>
                                            <tr className="bg-table border-b border-accent text-slate-950">
                                                <th className="px-6 py-3">
                                                    <img
                                                        src={`${url}/storage/images/${product.product.image}`}
                                                        alt={
                                                            product.product.name
                                                        }
                                                        className="rounded-md w-16 h-16 object-cover"
                                                    />
                                                </th>
                                                <td className="px-6 py-3">
                                                    <p className="">
                                                        {product.product.name}
                                                    </p>
                                                </td>
                                                <td className="px-6 py-3 text-end">
                                                    {product.quantity}
                                                </td>
                                                <td className="px-6 py-3 text-end">
                                                    {(
                                                        (product.price_ht *
                                                            (1 + 0.2)) /
                                                        100
                                                    ).toFixed(2)}{" "}
                                                    €
                                                </td>
                                            </tr>

                                            {lastOrder.order_items.length - 1 >
                                                index && <hr />}
                                        </>
                                    );
                                })}
                            </tbody>
                            <tfoot>
                                <tr className="bg-accent">
                                    <th
                                        colSpan={5}
                                        className="text-end text-background px-6 py-3 font-title"
                                    >
                                        <p>
                                            Total panier TTC :{" "}
                                            {(
                                                (lastOrder.total * (1 + 0.2)) /
                                                100
                                            ).toFixed(2)}{" "}
                                            €
                                        </p>
                                    </th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </section>
        </>
    ) : (
        <TableSkeleton />
    );
};
export default ConfirmedOrder;
