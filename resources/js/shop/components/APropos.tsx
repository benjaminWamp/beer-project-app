import React from "react";
import Button from "./shared/Button";
import { Mode } from "../types/style.enum";

const APropos = () => {
    return <>
        <section className="bg-cover bg-tonneau bg-no-repeat">
            <div className="bg-gradient-to-r from-black/50 via-black/70 to-black/50 flex flex-col gap-4 items-center py-24">
                <div className="max-w-screen-xl w-full">
                    <h1 className="text-8xl font-bold mt-4 mb-8 font-title text-secondary text-center">Monsieur Bière</h1>
                    <p className="mb-10 text-white text-md text-center">
                        
                        Ah, laisse-moi te conter l'histoire pétillante de Monsieur Bière, une aventure brassicole débutée en 1975 et toujours aussi rafraîchissante aujourd'hui !<br /><br />

                        Tout a commencé il y a des décennies, quand un jeune amateur de houblon nommé Pierre a décidé de faire de sa passion pour la bière une véritable entreprise.<br /> Armé de sa bonne humeur contagieuse et d'une soif insatiable de découvertes gustatives, il a créé Monsieur Bière, un petit coin de paradis pour les amateurs de mousse dans tous ses états.<br /><br />

                        Depuis lors, Monsieur Bière est devenu bien plus qu'une simple boutique ; c'est un lieu de rencontre, d'échange et de célébration pour tous les amoureux de la bonne bière. <br />De la blonde légère à la brune robuste, en passant par les IPA audacieuses et les trappistes mystiques, chaque bouteille raconte une histoire, chaque gorgée est une aventure.<br /><br />

                        Au fil des ans, l'équipe de Monsieur Bière n'a cessé de s'agrandir, attirant des passionnés de tous horizons, tous unis par une seule et même mission : répandre la joie de la bière artisanale à travers le monde.<br />Ils parcourent les brasseries les plus reculées, dénichent les trésors les plus cachés et partagent leurs découvertes avec une générosité sans faille.<br /><br />

                        Aujourd'hui, quand vous poussez la porte de Monsieur Bière, c'est bien plus qu'une simple boutique que vous découvrez. <br />C'est un univers de saveurs, de convivialité et de bonne humeur où chaque client est accueilli comme un ami et chaque bière comme une œuvre d'art.<br /><br />

                        Alors, si vous avez soif d'aventure et de bonne compagnie, venez donc rendre visite à Monsieur Bière. Car ici, chaque jour est une fête, et chaque bière est une raison de célébrer la vie ! Santé !</p>
                </div>
                <Button href={"#"} text={"Les bières"} startCenterEnd={"start"} mode={Mode.LIGHT}/>
            </div>
        </section>
    </>;
};

export default APropos;