import React from 'react';
import { useTranslation } from 'react-i18next'; 

function Tuile({ voiture, language }) {
    const principaleImage = voiture.images.find(image => image.est_principale === 1 && image.voiture_id === voiture.id);

    return (
        <div className="border border-gray-300 rounded-lg overflow-hidden w-72 bg-white shadow-md">
            {principaleImage && (
                <img 
                    src={`/imgs/${principaleImage.chemin}`} 
                    alt={voiture.description[language]} 
                    className="w-full h-48 object-cover"
                />
            )}
            <div className="p-4">
                <h2 className="text-xl font-bold text-gray-900">{voiture.modele.type}</h2>
                <p className="text-gray-700">{voiture.description[language]}</p>
                <p className="text-gray-700">{voiture.prix}</p>
                <p className="text-gray-700">{voiture.transmission.type[language]}</p>
                <p className="text-gray-700">{voiture.motopropulseur.type[language]}</p>
                <p className="text-gray-700">{voiture.carburant.type[language]}</p>
                <p className="text-gray-700">{voiture.corp.type[language]}</p>
            </div>
        </div>
    );
}

export default Tuile;
