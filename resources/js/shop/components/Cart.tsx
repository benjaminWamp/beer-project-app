import React, { useEffect, useState, useContext } from "react";
import InputCart from "./Cart/InputCart";
import {
    fetchCartList,
    createPaymentIntent,
    deleteOrderItem,
} from "../utils/services/CartService";
import { Cart as CartType } from "../types/cart.types";
import { fetchUser } from "../utils/services/UserServices";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CartPayment from "./Cart/CartPayment";
import DeleteOrderItemModal from "./Cart/DeleteOrderItemModal";
import AlertContext from "../context/AlertContext";
import UserContext from "../context/UserContext";
import { User } from "../types/user.types";
import TableSkeleton from "./skeletons/TableSkeleton";

const stripePromise = loadStripe(
    "pk_test_51P7HxBIvgCNdAzyGQvbsSdlBBNixi3ZSsQA51phuRXn3ePYTkWrWOUPwIs0bhBcwqnIVq35P25Qd5t6dgxDR5jSD00SSsNWJ2r"
);

const Cart = () => {
    const [cartList, setCartList] = useState<CartType>();
    const [clientSecret, setClientSecret] = useState<string | undefined>(
        undefined
    );
    const [openDeleteOrderItemModal, setOpenDeleteOrderItemModal] =
        useState(false);
    const [user, setUser] = useState<User>();
    const [productId, setProductId] = useState(0);
    const { token } = useContext(UserContext);
    const { addAlert } = useContext(AlertContext);

    const getCartList = async () => {
        if (token)
            try {
                const cartData = await fetchCartList(token);
                setCartList(cartData);
                if (cartData.total > 0) {
                    const description = `Commande de ${cartData.order_items
                        .map((el) => el.product.name)
                        .join(", ")}`;
                    const user = await fetchUser(localStorage.getItem("token"));
                    setUser(user);

                    const paymentIntent = await createPaymentIntent(token, {
                        amount: cartData.total,
                        description: description,
                        receipt_email: user.email,
                        metadata: cartData.id,
                    });

                    if (paymentIntent && paymentIntent.client_secret)
                        setClientSecret(paymentIntent.client_secret);
                }
            } catch (err) {
                addAlert("failure", err);
            }
    };

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

    console.log(cartList);

    return (
        <div className="flex pt-14">
            {cartList ? (
                cartList.total > 0 ? (
                    clientSecret && cartList.order_items.length > 0 ? (
                        <>
                            <DeleteOrderItemModal
                                open={openDeleteOrderItemModal}
                                onClose={handleCloseDeleteOrderItem}
                                onDelete={handleDeleteOrderItem}
                            />
                            <aside className="bg-blue h-full flex-1 m-4">
                                <h2>Panier</h2>

                                {cartList.order_items.map((product, index) => {
                                    return (
                                        <>
                                            <div
                                                className="flex py-4 gap-4 items-center justify-between"
                                                key={`product-${index}`}
                                            >
                                                <div className="flex gap-4">
                                                    <img
                                                        src={
                                                            product.product
                                                                .image
                                                        }
                                                        alt={
                                                            product.product.name
                                                        }
                                                    />
                                                    <div>
                                                        <p className="">
                                                            {
                                                                product.product
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
                                                                        >
                                                                            {
                                                                                category.name
                                                                            }
                                                                        </span>
                                                                    );
                                                                }
                                                            )}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-4">
                                                    <div className="flex items-center gap-4">
                                                        <span>Qté :</span>
                                                        <input
                                                            type="number"
                                                            value={
                                                                product.quantity
                                                            }
                                                        />
                                                    </div>
                                                    <p>
                                                        {product.price_ht / 100}
                                                        €
                                                    </p>
                                                    <button
                                                        onClick={() => {
                                                            handleOpenModal(
                                                                product.id
                                                            );
                                                        }}
                                                    >
                                                        <svg
                                                            className="w-6 h-6 text-gray-800 dark:text-white"
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
                                                </div>
                                            </div>
                                            {cartList.order_items.length - 1 >
                                                index && <hr />}
                                        </>
                                    );
                                })}
                            </aside>
                            <Elements
                                stripe={stripePromise}
                                options={{ clientSecret }}
                            >
                                <CartPayment cart={cartList} user={user} />
                            </Elements>
                        </>
                    ) : (
                        <TableSkeleton />
                    )
                ) : (
                    <div className="w-screen h-1/2 flex items-center justify-center">
                        <h1>
                            Votre panier est vide...
                            <span>
                                <a href="/catalogue">Remplisez le</a>
                            </span>
                        </h1>
                    </div>
                )
            ) : (
                <TableSkeleton />
            )}
        </div>
    );
};

export default Cart;
