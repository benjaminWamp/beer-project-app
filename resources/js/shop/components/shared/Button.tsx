import React from "react";

interface ButtonProps {
    href: string;
    text: string;
    textColor: string;
    borderColor: string;
    textColorHover: string;
    buttonShadowHover: string;
    buttonShadow: string;
    startCenterEnd: string;
}

const Button = (props: ButtonProps) => {
    const { href } = props;
    const { text } = props;
    const { textColor } = props;
    const { borderColor } = props;
    const { textColorHover } = props;
    const { buttonShadowHover } = props;
    const { buttonShadow } = props;
    const { startCenterEnd } = props;


    return <>
        <div className={`flex justify-${startCenterEnd}`}>
            <a href={href} className={`
                rounded-md
                transition-all
                text-xl
                inline-block
                font-title
                font-bold
                border-2
                py-4
                px-10
                
                shadow-${buttonShadow}
                hover:text-${textColorHover}
                hover:shadow-${buttonShadowHover}
                text-${textColor}
                border-${borderColor}
                
                `}
                >
                {text}
            </a>
        </div>
    </>
}   

export default Button;