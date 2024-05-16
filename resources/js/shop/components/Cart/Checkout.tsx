import { Elements } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import CartPayment from "./CartPayment";
import { loadStripe } from "@stripe/stripe-js";
import { fetchUser } from "../../utils/services/UserServices";
import {
    createPaymentIntent,
    fetchCartList,
} from "../../utils/services/CartService";
import { User } from "../../types/user.types";
import UserContext from "../../context/UserContext";
import { Cart as CartType } from "../../types/cart.types";
import AlertContext from "../../context/AlertContext";
import TableSkeleton from "../skeletons/TableSkeleton";

//@ts-ignore
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);

const Checkout = () => {
    const { token } = useContext(UserContext);

    const [user, setUser] = useState<User>();
    const [clientSecret, setClientSecret] = useState<string | undefined>(
        undefined
    );
    const [cartList, setCartList] = useState<CartType>();
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
                    const user = await fetchUser(token);
                    setUser(user);
                    const priceTTC = Math.round(cartData.total * (1 + 0.2));

                    const paymentIntent = await createPaymentIntent(token, {
                        amount: priceTTC,
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
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        getCartList();
    }, [token]);

    return cartList && clientSecret ? (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
            <CartPayment cart={cartList} user={user} />
        </Elements>
    ) : (
        <div className=" min-w-96 py-10 px-16">
            <TableSkeleton />
        </div>
    );
};

export default Checkout;
