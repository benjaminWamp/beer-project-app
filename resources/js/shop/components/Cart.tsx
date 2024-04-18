import React, { useEffect } from "react";
import InputCart from "./Cart/InputCart";
import { fetchCartList } from "../utils/services/CartService";
const Cart = () => {
    useEffect(() => {
        fetchCartList();
    }, [])
    return (
        <div className="flex">
            {/* <InputCart title="Adresse mail" type="" /> */}
            <div className="flex flex-2">
                <div className="flex flex-col">
                    <label htmlFor="email">Adresse mail</label>
                    <input type="string" name="email" placeholder="Adresse mail"/>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="email">Adresse mail</label>
                    <input type="string" name="email" placeholder="Adresse mail"/>
                </div>
            </div>
            <aside className="bg-blue h-full flex-1" >
                <h2>Cart</h2>
                <ul>
                    <div className="flex py-4">
                        <div>
                            <img src="" alt="" />
                            <div>
                                <p className="w-1/2">Vital Seamless 2.0 Crop Top - Woodland Green Marl</p>
                                <p className="text-xs">Taille: XS</p>
                            </div>
                        </div>
                        <p>40€</p>
                    </div>
                    <li>Product 1</li>
                    <li>Product 2</li>
                    <li>Product 3</li>
                </ul>
            </aside>
        </div>
    )
}

export default Cart;