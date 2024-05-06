import React from "react";
import { Mode } from "../../types/style.enum";

interface ButtonProps {
    href: string;
    text: string;
    startCenterEnd: string;
    mode: Mode;
}

const Button = (props: ButtonProps) => {
    const { href, mode, text, startCenterEnd} = props;

    const light = 'rounded-md transition-all text-xl inline-block font-title font-bold border-2 py-4 px-10 shadow-buttonLightBase hover:shadow-buttonLightHover hover:text-accent text-secondary border-secondary'
    const dark = 'rounded-md transition-all text-xl inline-block font-title font-bold border-2 py-4 px-10 shadow-buttonDarkBase hover:shadow-buttonDarkHover hover:text-secondary text-accent border-accent'

    return <>
        <div className={`flex justify-${startCenterEnd}`}>
            {

            }
            <a href={href} className={mode === Mode.LIGHT ? light : dark}
                >
                {text}
            </a>
        </div>
    </>
}   

export default Button;