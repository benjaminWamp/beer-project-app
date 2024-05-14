import { useElements, useStripe, PaymentElement } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import { Cart } from "../../types/cart.types";
import { User } from "../../types/user.types";
import { updateOrderAddress } from "../../utils/services/CartService";

interface CartPaymentProps {
  cart: Cart;
  user: User | undefined;
}

const CartPayment = (props: CartPaymentProps) => {
  const { cart, user } = props;
    const [errorMessage, setErrorMessage] = useState(null);
    const options = {

      clientSecret: 'sk_test_51P7HxBIvgCNdAzyGFtNcHYStYKyWmyEJxj4wad4KG1DUW5njNS2N1xrUAY71flyg36KiepJDgUhk2m0LqQU2I9DG00NTDquJGj'
    }

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e) => {
      e.preventDefault()
      const tempCart = {...cart, zip_code: e.target.zip_code.value, city: e.target.city.value, number: e.target.number.value, street: e.target.street.value}      
      await updateOrderAddress(tempCart)

      if (!stripe || !elements) {
        return;
      }

      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/`,
        },
      });

      if (error) {
        if (error.type === "card_error" || error.type === "validation_error") {
          console.error(error.message);
        } else {
          console.error(
            "Une erreur est survenue lors du paiement. Veuillez réessayer."
          );
        }
      }
    };

    return (
      <div >
        <PaymentElement/>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="flex justify-between">
            <label htmlFor="name">Nom</label>
            <input type="text" defaultValue={user ? user.name : ''} name="name" id="name" required/>
          </div>
          <div className="flex justify-between">
            <label htmlFor="street">Addresse</label>
            <input type="text" defaultValue={cart.street} name="street" id="street" required/>
          </div>
          <div className="flex justify-between">
            <label htmlFor="number">Nº addresse</label>
            <input type="number" defaultValue={cart.number} min={0} name="number" id="number" required/>
          </div>
          <div className="flex justify-between">
            <label htmlFor="zip_code">Code postal</label>
            <input type="text" defaultValue={cart.zip_code} name="zip_code" pattern="[0-9]{5}" id="zip_code" required/>
          </div>
          <div className="flex justify-between">
            <label htmlFor="city">Ville</label>
            <input type="text" defaultValue={cart.city} name="city" id="city" required/>
          </div>
          <button type="submit">Payer</button>
        </form>
      </div>
    );
};

export default CartPayment;