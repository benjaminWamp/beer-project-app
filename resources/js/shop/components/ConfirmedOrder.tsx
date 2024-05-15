import React from "react";
import Button from "./shared/Button";
import { Mode } from "../types/style.enum";

const ConfirmedOrder = () => {
    return (
        <>
            <section className="min-h-screen bg-table flex justify-center py-12">
                <div className="max-w-screen-lg flex flex-col gap-8 items-center">
                    <h1 className="font-title text-6xl font-bold text-accent mb-8">
                        Commande Validée !
                    </h1>
                    <p>Merci de nous faire confiance !</p>
                    <Button
                        href="/#/catalogue"
                        text="Retourner au catalogue"
                        startCenterEnd="center"
                        mode={Mode.DARK}
                    />
                </div>
            </section>
        </>
    );
};
export default ConfirmedOrder;
