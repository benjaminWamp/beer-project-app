import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";

const CartPayment = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [errorMessage, setErrorMessage] = useState(null);

    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    
    //     if (elements == null) {
    //       return;
    //     }
    
    //     // Trigger form validation and wallet collection
    //     const {error: submitError} = await elements.submit();
    //     if (submitError) {
    //       // Show error to your customer
    //     //   setErrorMessage(submitError.message);
    //       return;
    //     }
    
    //     // Create the PaymentIntent and obtain clientSecret from your server endpoint
    //     const res = await fetch('/create-intent', {
    //       method: 'POST',
    //     });
    
    //     const {client_secret: clientSecret} = await res.json();
    
    //     const {error} = await  stripe?.confirmPayment({
    //       //`Elements` instance that was used to create the Payment Element
    //       elements,
    //       clientSecret,
    //       confirmParams: {
    //         return_url: 'https://example.com/order/123/complete',
    //       },
    //     });
    
    //     if (error) {
    //       // This point will only be reached if there is an immediate error when
    //       // confirming the payment. Show error to your customer (for example, payment
    //       // details incomplete)
    //     //   setErrorMessage(error.message);
    //     } else {
    //       // Your customer will be redirected to your `return_url`. For some payment
    //       // methods like iDEAL, your customer will be redirected to an intermediate
    //       // site first to authorize the payment, then redirected to the `return_url`.
    //     }
    //   };

    const handleSubmit = async (event) => {
      event.preventDefault();
      const {error, paymentMethod } = await stripe?.createPaymentMethod({
        type: "card",
        card: elements?.getElement(CardElement)
      })
      if(!error){
        console.log("Token generated : ", paymentMethod);
        
      }
    }
    return (
        <form onSubmit={handleSubmit} style={{maxWidth: 400, width: 99999999999999999}}>
            <CardElement options={{
              hidePostalCode: true,
            }}/>
            <button type="submit" disabled={!stripe || !elements}>
                Pay
            </button>
            {errorMessage && <div>{errorMessage}</div>}
        </form>
    );
};

export default CartPayment;