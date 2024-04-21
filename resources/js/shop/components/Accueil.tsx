import React from "react";
import Button from "./shared/Button";
import H2Bars from "./shared/H2Bars";


const Accueil = () => {
    return <>
        <section className="bg-cover bg-headerHome bg-no-repeat h-heroVh">
            <div className="bg-gradient-to-r from-black/90 via-black/50 h-heroVh flex flex-col justify-center">
            <div className="max-w-screen-xl w-full mx-auto px-4 h-4/6 m-0 grid grid-cols-2">
                <div>
                    <h1 className="text-8xl font-bold mt-4 mb-8 font-title text-secondary">Monsieur Bière</h1>
                    <p className="mb-10 text-white text-2xl font-bold">Vos bières, notre bonheur.</p>
                    <Button href={"#"} text={"Les bières"} startCenterEnd={"start"} textColorHover={"accent"} buttonShadowHover={"buttonLightHover"} textColor={"secondary"} borderColor={"secondary"} buttonShadow={"buttonLightBase"}/>
                </div>
            </div>
            </div>
        </section>
        <div className="py-12 max-w-screen-xl w-full mx-auto px-4">
            <div className="bg-offWhite flex flex-col justify-center">
                <H2Bars textColor={"text-accent"} hrColor={"border-accent"} text={"Nos Bières"} />
                <Button href={"#"} text={"Les bières"} startCenterEnd={"center"} textColorHover={"secondary"} buttonShadowHover={"buttonDarkHover"} textColor={"accent"} borderColor={"accent"} buttonShadow={"buttonDarkBase"}/>
            </div>
            
        </div>
    </>
};
export default Accueil;