import React, { useEffect, useState, useContext } from "react";
import { fetchCartList, deleteOrderItem } from "../utils/services/CartService";
import { Cart as CartType } from "../types/cart.types";
import DeleteOrderItemModal from "./Cart/DeleteOrderItemModal";
import AlertContext from "../context/AlertContext";
import UserContext from "../context/UserContext";
import TableSkeleton from "./skeletons/TableSkeleton";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const [cartList, setCartList] = useState<CartType>();
    const [openDeleteOrderItemModal, setOpenDeleteOrderItemModal] =
        useState(false);
    const [productId, setProductId] = useState(0);
    const { token } = useContext(UserContext);
    const { addAlert } = useContext(AlertContext);
    const { url } = useContext(UserContext);
    const navigate = useNavigate();

    const getCartList = async () => {
        if (token)
            try {
                const cartData = await fetchCartList(token);
                setCartList(cartData);
            } catch (err) {
                addAlert("failure", err);
            }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        getCartList();
    }, [token]);

    const handleCloseDeleteOrderItem = () => {
        setOpenDeleteOrderItemModal(false);
    };

    const handleDeleteOrderItem = async () => {
        if (token)
            try {
                await deleteOrderItem(token, productId);
                getCartList();
            } catch (err: any) {
                const message: string = (Object.values(err)[0] as string[])[0];
                addAlert("failure", message);
                return;
            }
        await getCartList();
        handleCloseDeleteOrderItem();
    };
    const handleOpenModal = (id: number) => {
        setOpenDeleteOrderItemModal(true);
        setProductId(id);
    };

    return (
        <div className="flex justify-center py-14 px-4">
            <div className="w-full max-w-screen-xl">
                <h1 className="font-title font-bold text-accent text-5xl mb-4">
                    Panier
                </h1>
                <div className="max-w-screen-xl w-full flex justify-between gap-16">
                    {cartList ? (
                        cartList.total > 0 ? (
                            cartList.order_items.length > 0 ? (
                                <>
                                    <DeleteOrderItemModal
                                        open={openDeleteOrderItemModal}
                                        onClose={handleCloseDeleteOrderItem}
                                        onDelete={handleDeleteOrderItem}
                                    />

                                    <div className="w-full">
                                        <div className="w-full flex flex-row gap-6">
                                            <div className="w-3/4 overflow-hidden">
                                                <div className="relative rounded-md overflow-hidden my-4">
                                                    <table className="w-full text-sm text-left rtl:text-right text-zinc-50">
                                                        <thead className="text-xs text-zinc-50 uppercase bg-accent ">
                                                            <tr>
                                                                <th
                                                                    scope="col"
                                                                    className="w-16 font-title font-bold text-background px-6 py-3"
                                                                >
                                                                    Image
                                                                    Produit
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
                                                                <th
                                                                    scope="col"
                                                                    className="font-title font-bold text-background py-3 pr-7 text-end"
                                                                >
                                                                    Supprimer
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {cartList.order_items.map(
                                                                (
                                                                    product,
                                                                    index
                                                                ) => {
                                                                    return (
                                                                        <>
                                                                            <tr className="bg-table border-b border-accent text-slate-950">
                                                                                <th className="px-6 py-3">
                                                                                    <img
                                                                                        src={`${url}/storage/images/${product.product.image}`}
                                                                                        alt={
                                                                                            product
                                                                                                .product
                                                                                                .name
                                                                                        }
                                                                                        className="rounded-md w-16 h-16 object-cover"
                                                                                    />
                                                                                </th>
                                                                                <td className="px-6 py-3">
                                                                                    <p className="">
                                                                                        {
                                                                                            product
                                                                                                .product
                                                                                                .name
                                                                                        }
                                                                                    </p>
                                                                                    <p className="text-xs">
                                                                                        {product.product.categories.map(
                                                                                            (
                                                                                                category,
                                                                                                index
                                                                                            ) => {
                                                                                                return (
                                                                                                    <span
                                                                                                        key={`category-${index}`}
                                                                                                        className="font-title"
                                                                                                    >
                                                                                                        {category.name +
                                                                                                            " / "}
                                                                                                    </span>
                                                                                                );
                                                                                            }
                                                                                        )}
                                                                                    </p>
                                                                                </td>
                                                                                <td className="px-6 py-3 text-end">
                                                                                    {
                                                                                        product.quantity
                                                                                    }
                                                                                </td>
                                                                                <td className="px-6 py-3 text-end">
                                                                                    {(
                                                                                        (product.price_ht *
                                                                                            (1 +
                                                                                                0.2)) /
                                                                                        100
                                                                                    ).toFixed(
                                                                                        2
                                                                                    )}{" "}
                                                                                    €
                                                                                </td>
                                                                                <td className="px-6 py-3 text-end">
                                                                                    <button
                                                                                        type="button"
                                                                                        className="border-2 border-accent bg-secondary rounded-3xl px-2 py-2 text-sm font-medium hover:-translate-y-1 transition-all"
                                                                                        onClick={() => {
                                                                                            handleOpenModal(
                                                                                                product.id
                                                                                            );
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

                                                                            {cartList
                                                                                .order_items
                                                                                .length -
                                                                                1 >
                                                                                index && (
                                                                                <hr />
                                                                            )}
                                                                        </>
                                                                    );
                                                                }
                                                            )}
                                                        </tbody>
                                                        <tfoot>
                                                            <tr className="bg-accent">
                                                                <th
                                                                    colSpan={5}
                                                                    className="text-end text-background px-6 py-3 font-title"
                                                                >
                                                                    <p>
                                                                        Total
                                                                        panier
                                                                        TTC :{" "}
                                                                        {(
                                                                            (cartList.total *
                                                                                (1 +
                                                                                    0.2)) /
                                                                            100
                                                                        ).toFixed(
                                                                            2
                                                                        )}{" "}
                                                                        €
                                                                    </p>
                                                                </th>
                                                            </tr>
                                                        </tfoot>
                                                    </table>
                                                </div>
                                            </div>

                                            <div className="flex flex-col justify-start items-start gap-6 my-4">
                                                <button
                                                    className="rounded-md transition-all text-m inline-block font-title font-bold border-2 py-2 px-4 shadow-buttonDarkBase hover:shadow-buttonDarkHover hover:text-secondary text-accent border-accent"
                                                    onClick={() =>
                                                        navigate("/checkout")
                                                    }
                                                >
                                                    Aller au paiement
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        navigate("/catalogue")
                                                    }
                                                    className="rounded-md transition-all text-m inline-block font-title font-bold border-2 py-2 px-4 shadow-buttonDarkBase hover:shadow-buttonDarkHover hover:text-secondary text-accent border-accent"
                                                >
                                                    Revenir au catalogue
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <div className="min-w-full p-6">
                                    <TableSkeleton />
                                </div>
                            )
                        ) : (
                            <div className="mt-8 w-screen h-1/2 flex flex-col gap-12 items-center justify-center">
                                <p className="text-xl font-title text-accent">
                                    Votre panier est vide...
                                </p>
                                <button
                                    onClick={() => navigate("/catalogue")}
                                    className="rounded-md transition-all text-xl inline-block font-title font-bold border-2 py-4 px-10 shadow-buttonDarkBase hover:shadow-buttonDarkHover hover:text-secondary text-accent border-accent"
                                >
                                    ...Remplissez le !
                                </button>
                            </div>
                        )
                    ) : (
                        <div className="min-w-full p-6">
                            <TableSkeleton />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Cart;
