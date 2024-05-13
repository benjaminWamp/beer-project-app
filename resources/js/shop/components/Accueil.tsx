import React, { useEffect, useState } from "react";
import Button from "./shared/Button";
import H2Bars from "./shared/H2Bars";
import { Mode } from "../types/style.enum";
import ProductList from "./catalogue/ProductList";
import { fetchProducts } from "../utils/services/CatalogueServices";
import { Product } from "../types/product.types";
import ProductListSkeleton from "./skeletons/ProductListSkeleton";

const Accueil = () => {
    const [fiveProducts, setFiveProducts] = useState<Product[]>();

    const [bestProducts, setBestProducts] = useState<Product[]>();

    const getProduct = async (sorting?: string, order?: string) => {
        const response = await fetchProducts(
            1,
            undefined,
            undefined,
            sorting,
            order
        );

        return response.data.slice(0, 4);
    };

    const getBestProduct = async () => {
        const response = await getProduct("reviews_sum", "desc");

        return response.slice(0, 4);
    };

    useEffect(() => {
        const getDatas = async () => {
            const listData = await getProduct();
            const bestData = await getBestProduct();
            setFiveProducts(listData);
            setBestProducts(bestData);
        };
        window.scrollTo(0, 0);
        getDatas();
    }, []);

    return (
        <>
            <section className="bg-cover bg-headerHome bg-no-repeat h-heroVh">
                <div className="bg-gradient-to-r from-black/90 via-black/50 h-heroVh flex flex-col justify-center">
                    <div className="max-w-screen-xl w-full mx-auto px-4 h-4/6 m-0 grid grid-cols-2">
                        <div>
                            <h1 className="text-8xl font-bold mt-4 mb-8 font-title text-secondary lg:text-6xl">
                                Monsieur Bière
                            </h1>
                            <p className="mb-10 text-white text-2xl font-bold">
                                Nos bières, votre bonheur.
                            </p>
                            <Button
                                href={"#/catalogue"}
                                text={"Les bières"}
                                startCenterEnd={"start"}
                                mode={Mode.LIGHT}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-12 max-w-screen-xl w-full mx-auto px-4">
                <div className="bg-offWhite flex flex-col justify-center gap-8">
                    <H2Bars
                        textColor={"text-accent"}
                        hrColor={"border-accent"}
                        text={"Nos Bières"}
                    />
                    {fiveProducts ? (
                        <ProductList products={fiveProducts} />
                    ) : (
                        <div className="flex flex-row flex-wrap gap-12 justify-center pt-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            {[0, 1, 2, 3].map((key) => (
                                <ProductListSkeleton key={key} />
                            ))}
                        </div>
                    )}
                    <Button
                        href={"#/catalogue"}
                        text={"Découvrez tous nos produits"}
                        startCenterEnd={"center"}
                        mode={Mode.DARK}
                    />
                </div>
            </section>
            <section className="bg-cover bg-connexion bg-no-repeat w-full mx-auto">
                <div className="bg-gradient-to-t from-black/95 via-black/75 h-heroVh flex flex-col justify-center">
                    <div className="max-w-screen-xl w-full mx-auto px-4">
                        <H2Bars
                            textColor={"text-secondary"}
                            hrColor={"border-secondary"}
                            text={"Connecte-toi pardi !"}
                        />
                        <p className="text-center text-2xl font-title font-bold text-white my-12">
                            Et accède à tes bières plus facilement !
                        </p>
                        <Button
                            href={"#/account"}
                            text={"Mes bières"}
                            startCenterEnd={"center"}
                            mode={Mode.LIGHT}
                        />
                    </div>
                </div>
            </section>
            <section className="pt-12 max-w-screen-xl w-full mx-auto px-4">
                <div className="bg-offWhite flex flex-col justify-center">
                    <H2Bars
                        textColor={"text-accent"}
                        hrColor={"border-accent"}
                        text={"Catégories"}
                    />
                    <div className="flex flex-between gap-8 my-8">
                        <div className="flex flex-col gap-8">
                            <img
                                src="\images\categorie-blanche.png"
                                alt="Bière blanche"
                                className="max-w-full rounded-md"
                            />
                            <Button
                                href={"#/catalogue"}
                                text={"Blanche"}
                                startCenterEnd={"center"}
                                mode={Mode.DARK}
                            />
                        </div>
                        <div className="flex flex-col gap-8">
                            <img
                                src="\images\categorie-blonde.png"
                                alt="Bière blonde"
                                className="max-w-full rounded-md"
                            />
                            <Button
                                href={"#/catalogue?category=1"}
                                text={"Blonde"}
                                startCenterEnd={"center"}
                                mode={Mode.DARK}
                            />
                        </div>
                        <div className="flex flex-col gap-8">
                            <img
                                src="\images\categorie-brune.png"
                                alt="Bière brune"
                                className="max-w-full rounded-md"
                            />
                            <Button
                                href={"#/catalogue?category=2"}
                                text={"Brune"}
                                startCenterEnd={"center"}
                                mode={Mode.DARK}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-12 max-w-screen-xl w-full mx-auto px-4">
                <div className="bg-offWhite flex flex-col justify-center">
                    <H2Bars
                        textColor={"text-accent"}
                        hrColor={"border-accent"}
                        text={"Les 4 Glorieuses"}
                    />
                    {bestProducts ? (
                        <ProductList products={bestProducts} />
                    ) : (
                        <div className="flex flex-row flex-wrap gap-12 justify-center pt-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            {[0, 1, 2, 3].map((key) => (
                                <ProductListSkeleton key={key} />
                            ))}
                        </div>
                    )}
                </div>
            </section>
            <section className="bg-cover bg-connexion bg-no-repeat w-full mx-auto">
                <div className="bg-gradient-to-t from-black/95 via-black/75 h-heroVh flex flex-col justify-center">
                    <div className="max-w-screen-xl w-full mx-auto px-4">
                        <H2Bars
                            textColor={"text-secondary"}
                            hrColor={"border-secondary"}
                            text={"Notre histoire"}
                        />
                        <p className="text-center text-l font-title font-bold text-white my-12">
                            Depuis 1975, Monsieur Bière brasse une histoire
                            pétillante.<br></br>
                            Fondée par Pierre, passionné de houblon, cette
                            entreprise est bien plus qu'une simple boutique de
                            bières.<br></br>
                            C'est un lieu de rencontre où chaque bouteille
                            raconte une histoire.<br></br>
                            Aujourd'hui, l'équipe parcourt le monde à la
                            recherche des meilleures saveurs pour partager la
                            joie de la bière artisanale.<br></br>
                            Santé !
                        </p>
                        <Button
                            href={"#"}
                            text={"Notre Histoire"}
                            startCenterEnd={"center"}
                            mode={Mode.LIGHT}
                        />
                    </div>
                </div>
            </section>
        </>
    );
};
export default Accueil;
