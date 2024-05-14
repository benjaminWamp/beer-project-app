import React from "react";
import { InputCartType } from "../../types/inputCart.types";

const InputCart = (props: InputCartType) => {
    return (
        <div className="flex flex-col">
            <label htmlFor={props.name}>{props.title}</label>
            <input type={props.type} name={props.name} placeholder={props.placeholder}/>
        </div>
    )
}

export default InputCart;