import { useElements, useStripe, PaymentElement } from "@stripe/react-stripe-js";
import React, { useState } from "react";

const CartPayment = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [errorMessage, setErrorMessage] = useState(null);
    const options = {

      clientSecret: 'sk_test_51P7HxBIvgCNdAzyGFtNcHYStYKyWmyEJxj4wad4KG1DUW5njNS2N1xrUAY71flyg36KiepJDgUhk2m0LqQU2I9DG00NTDquJGj'
    }


    // const handleSubmit = async (event) => {
    //   event.preventDefault();
    //   const {error, paymentMethod } = await stripe?.createPaymentMethod({
    //     type: "card",
    //     card: elements?.getElement(CardElement)
    //   })
    //   if(!error){
    //     console.log("Token generated : ", paymentMethod);
        
    //   }
    // }
    return (
      <form>
        <PaymentElement options={options}/>
        <button>Submit</button>
      </form>
    );
};

export default CartPayment;