import { useElements, useStripe, PaymentElement } from "@stripe/react-stripe-js";
import React, { useState } from "react";

const CartPayment = () => {
    const [errorMessage, setErrorMessage] = useState(null);
    const options = {

      clientSecret: 'sk_test_51P7HxBIvgCNdAzyGFtNcHYStYKyWmyEJxj4wad4KG1DUW5njNS2N1xrUAY71flyg36KiepJDgUhk2m0LqQU2I9DG00NTDquJGj'
    }

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e) => {
      e.preventDefault();

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


    // const handleSubmit = async (event) => {
    //   event.preventDefault();
    //   // const {error, paymentMethod } = await stripe?.createPaymentMethod({
    //   //   type: "card",
    //   //   card: elements?.getElement(CardElement)
    //   // })
    //   // if(!error){
    //   //   console.log("Token generated : ", paymentMethod);
        
    //   // }
    //   console.log(event);
      
    // }
    return (
      <form>
        <PaymentElement/>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    );
};

export default CartPayment;