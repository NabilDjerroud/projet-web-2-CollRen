import React from 'react';
import { useTranslation } from 'react-i18next'; 

function Commande({ voiture }) {
    const { t, i18n } = useTranslation(); 

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img className="w-full h-48 object-cover" src={voiture.image} alt={voiture.modele} />
            <div className="p-4">
                <h2 className="text-xl font-bold">{voiture.modele.type}</h2>
                <p className="text-gray-700">{t("prix")} : {voiture.prix}$</p>
                <div className="mt-2">
                    <p className="text-gray-500">{voiture.carburant.type}</p>
                    <p className="text-gray-500">{voiture.transmission.type}</p>
                </div>
            </div>
        </div>
    );
}

export default Commande;
