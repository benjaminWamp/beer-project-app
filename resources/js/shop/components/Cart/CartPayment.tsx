import {
    useElements,
    useStripe,
    PaymentElement,
} from "@stripe/react-stripe-js";
import React, { useContext, useState } from "react";
import { payedCart } from "../../utils/services/CartService";
import { useNavigate } from "react-router-dom";
import { Cart } from "../../types/cart.types";
import { User } from "../../types/user.types";
import { updateOrderAddress } from "../../utils/services/CartService";
import AlertContext from "../../context/AlertContext";
import UserContext from "../../context/UserContext";

interface CartPaymentProps {
    cart: Cart;
    user: User | undefined;
}

const CartPayment = (props: CartPaymentProps) => {
    const navigate = useNavigate();
    const { cart, user } = props;
    const { addAlert } = useContext(AlertContext);
    const { token } = useContext(UserContext);

    const [isComplete, setIsCompleted] = useState(false);

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const tempCart = {
            ...cart,
            zip_code: e.target.zip_code.value,
            city: e.target.city.value,
            number: e.target.number.value,
            street: e.target.street.value,
        };
        if (token)
            try {
                await updateOrderAddress(token, tempCart);

                if (!stripe || !elements) {
                    addAlert(
                        "failure",
                        "Une erreur est survenue veuillez réessayer"
                    );
                    return;
                }

                if (!isComplete) {
                    addAlert(
                        "failure",
                        "Une erreur est survenue veuillez réessayer votre carte"
                    );
                    return;
                }

                try {
                    await stripe.confirmPayment({
                        elements,
                        redirect: "if_required",
                    });

                    const response = await payedCart(token);
                    navigate("/thank-u");
                    addAlert("success", response.message);
                } catch (error) {
                    if (
                        error.type === "card_error" ||
                        error.type === "validation_error"
                    ) {
                        addAlert("failure", error.message);
                    } else {
                        addAlert(
                            "failure",
                            "Une erreur est survenue lors du paiement. Veuillez réessayer."
                        );
                    }
                }
            } catch (e) {
                addAlert("failure", e.message);
            }
    };

    return (
        <div className=" min-w-96 py-10 px-16">
            <h1 className="font-title font-bold text-accent text-5xl mb-4">
                Paiement
            </h1>
            <form onSubmit={(e) => handleSubmit(e)} className="mt-3">
                <div className="grid grid-cols-2 gap-6 ">
                    <div>
                        <div className="flex flex-col">
                            <label
                                htmlFor="name"
                                className="text-[#30313d] text-sm"
                            >
                                Nom
                            </label>
                            <input
                                className="mb-3 rounded border-[#e6e6e6] shadow-[0_1px_1px_0_rgba(0, 0, 0, 0.03)] p-3 text-sm"
                                type="text"
                                defaultValue={user ? user.name : ""}
                                name="name"
                                id="name"
                                required
                            />
                        </div>
                        <div className="flex flex-col">
                            <label
                                htmlFor="street"
                                className="text-[#30313d] text-sm"
                            >
                                Addresse
                            </label>
                            <input
                                className="mb-3 rounded border-[#e6e6e6] shadow-[0_1px_1px_0_rgba(0, 0, 0, 0.03)] p-3 text-sm"
                                type="text"
                                defaultValue={cart.street}
                                name="street"
                                id="street"
                                required
                            />
                        </div>
                        <div className="flex flex-col">
                            <label
                                htmlFor="number"
                                className="text-[#30313d] text-sm"
                            >
                                Nº addresse
                            </label>
                            <input
                                className="mb-3 rounded border-[#e6e6e6] shadow-[0_1px_1px_0_rgba(0, 0, 0, 0.03)] p-3 text-sm"
                                type="number"
                                defaultValue={cart.number}
                                min={0}
                                name="number"
                                id="number"
                                required
                            />
                        </div>
                        <div className="flex flex-col">
                            <label
                                htmlFor="zip_code"
                                className="text-[#30313d] text-sm"
                            >
                                Code postal
                            </label>
                            <input
                                className="mb-3 rounded border-[#e6e6e6] shadow-[0_1px_1px_0_rgba(0, 0, 0, 0.03)] p-3 text-sm"
                                type="text"
                                defaultValue={cart.zip_code}
                                name="zip_code"
                                pattern="[0-9]{5}"
                                id="zip_code"
                                required
                            />
                        </div>
                        <div className="flex flex-col">
                            <label
                                htmlFor="city"
                                className="text-[#30313d] text-sm"
                            >
                                Ville
                            </label>
                            <input
                                className="mb-3 rounded border-[#e6e6e6] shadow-[0_1px_1px_0_rgba(0, 0, 0, 0.03)] p-3 text-sm"
                                type="text"
                                defaultValue={cart.city}
                                name="city"
                                id="city"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <PaymentElement
                            className="text-sans"
                            onChange={(e) => setIsCompleted(e.complete)}
                        />
                        <div className="flex justify-end items-center gap-6 mt-2">
                            <p> Total panier HT:{cart.total / 100}€</p>
                            <p>
                                Total panier TTC :
                                {((cart.total * (1 + 0.2)) / 100).toFixed(2)} €
                            </p>
                            <button
                                type="submit"
                                disabled={!stripe}
                                className="rounded-md transition-all text-m inline-block font-title font-bold border-2 py-2 px-4 shadow-buttonDarkBase hover:shadow-buttonDarkHover hover:text-secondary text-accent border-accent"
                            >
                                Payer
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CartPayment;
