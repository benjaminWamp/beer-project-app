import React, { useState } from "react";

const Contact = () => {

    const [thankU, setThankU] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        const contactEntry = {
            name:e.target.name.value,
            email: e.target.email.value,
            message: e.target.message.value,
            rgpd : e.target.rgpd.checked
        };

        setThankU(true);
    }

    return <>
        <header className="bg-cover bg-headerHome bg-no-repeat h-screen">
            <div className="bg-gradient-to-r from-black via-black h-screen flex flex-col justify-center">
            <div className="max-w-screen-xl w-full mx-auto px-4 h-5/6 m-0 grid grid-cols-2">
                <div>
                    <h1 className="text-5xl font-bold mt-4 mb-8 font-title text-table">Nous contacter</h1>
                    {thankU && <h2 className="bg-table text-accent text-2xl mb-8 p-4 rounded-md font-title font-bold">Merci de nous avoir contacté !</h2>}
                    <form onSubmit={(e) => handleSubmit(e) }>
                        <div className="mb-6">
                            <div className="flex justify-between">
                                <label htmlFor="name" className="font-title block text-m font-semibold leading-6 text-table">Votre nom *</label>
                                <span className="text-xs text-table">* Champs obligatoires</span>
                            </div>
                            
                            <div className="text-red-500"></div>
                            
                            <div className="mt-2.5">
                                <input required type="text" name="name" id="name" className="required:text-table bg-accent p-4 block w-full rounded-md border-0 px-3.5 py-2 text-table shadow-sm ring-1 ring-inset ring-accent focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6"></input>
                            </div>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="email" className="font-title block text-m font-semibold leading-6 text-table">Votre e-mail *</label>
                           
                            <div className="text-red-500"></div>
                            
                            <div className="mt-2.5">
                                <input type="text" name="email" id="email" className="bg-accent p-4 block w-full rounded-md border-0 px-3.5 py-2 text-table shadow-sm ring-1 ring-inset ring-accent focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6"></input>
                            </div>               
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="font-title block text-m font-semibold leading-6 text-table">Votre message *</label>
                            
                            <div className="text-red-500"></div>
                            
                            <div className="mt-2.5">
                                <textarea placeholder="Écrivez-nous quelque chose..." name="message" id="message" className="min-h-40 placeholder:text-table placeholder:opacity-70 bg-accent p-4 block w-full rounded-md border-0 px-3.5 py-2 text-table shadow-sm ring-1 ring-inset ring-accent focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6"></textarea>
                            </div>
                        </div>
                        <div className="mb-6">
                           
                            <label className="font-title block text-m font-semibold leading-6 text-table">Confidentialité *</label>
                            
                            <div className="text-red-500"></div>
                            
                            <div className="mt-2.5">
                                <input type="checkbox" name="rgpd"/> <span className="text-xs text-table ml-2">"Oui, j'accepte que les données personnelles collectées soient conservées pendant 2 ans dans le cadre de la mise en relation avec l'entreprise Monsieur Bière pour accéder aux prestations qu'elle fournit."</span>
                            </div>
                        </div>

                        <div className="mt-10">
                            <button type="submit" className="block w-full font-title bg-table text-accent rounded-md px-3 py-3 text-m font-bold hover:-translate-y-1 transition-all">
                                Envoyer
                            </button>
                        </div>
                    </form>
                </div>
                <div></div>
                
            </div>
            </div>
        </header>

        

    </>
    };
export default Contact;