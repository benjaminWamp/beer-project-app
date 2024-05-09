import React, { useEffect, useState } from "react";
import InputCart from "./Cart/InputCart";
import { fetchCartList, fetchPrivateKey } from "../utils/services/CartService";
import { Cart as CartType } from "../types/cart.types";
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CartPayment from "./Cart/CartPayment";

const stripePromise = loadStripe('pk_test_51P7HxBIvgCNdAzyGQvbsSdlBBNixi3ZSsQA51phuRXn3ePYTkWrWOUPwIs0bhBcwqnIVq35P25Qd5t6dgxDR5jSD00SSsNWJ2r');

const Cart = () => {
    const [cartList, setCartList] = useState<CartType>();
    const [clientSecret, setClientSecret] = useState<string | undefined>(undefined);

    
    const getCartList = async () => {
        const response = await fetchCartList();
        const privateKey = await fetchPrivateKey();
        if (privateKey.clientSecret) setClientSecret(privateKey.clientSecret)
        console.log('response', response);
        setCartList(response);
    }


    
    useEffect(() => {
        getCartList();
    }, [])
    
    
    return (
        <div className="flex">
            {/* <InputCart title="Adresse mail" type="" /> */}
            <Elements stripe={stripePromise} options={{clientSecret}}>
                <PaymentElement />
                {/* <CartPayment /> */}
            </Elements>
            {/* <div className="flex flex-2">
                <div className="flex flex-col">
                    <label htmlFor="email">Adresse mail</label>
                    <input type="string" name="email" placeholder="Adresse mail"/>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="email">Adresse mail</label>
                    <input type="string" name="email" placeholder="Adresse mail"/>
                </div>
            </div> */}
            {/* <aside className="bg-blue h-full flex-1" >
                <h2>Cart</h2>
                {cartList && cartList.order_items.length > 0 ? cartList.order_items.map((product, index) => {
                    return (
                        <div className="flex py-4" key={`product-${index}`}>
                            <div>
                                <img src={product.product.image} alt={product.product.name} />
                                <div>
                                    <p className="w-1/2">{product.product.name}</p>
                                    <p className="text-xs">{
                                        product.product.categories.map((category, index) => {
                                            return (
                                                <span key={`category-${index}`}>{category.name}</span>
                                            )
                                        })
                                    }</p>
                                </div>
                            </div>
                            <p>{product.price_ht / 100}€</p>
                        </div>
                    )
                }) : 
                    <p>Pas de produits dans le panier</p>
                } 
            </aside> */}
        </div>
    )
}

export default Cart;