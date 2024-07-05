
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Bouton from '../../partialsFormulaire/Bouton/Bouton';
import ChampText from '../../partialsFormulaire/ChampText/ChampText.js';
import './Recherche.css'

function BarreRecherche({ t }) {

    // Obtenir les données de la table voitures
    async function getVoituresData() {

        const data = {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        };

        const response = await fetch(`${t("fetch")}voitures`, data);
       console.log(response);
        return data
    }

/*     const [dataVoitures, setDataVoitures] = useState(getVoituresData());
    console.log(dataVoitures); */

    // console.log(dataVoitures);


    // Enregistrer les données dans 2 variables


    // onChange, enlever d'une des variables ce qui ne coresspond pas (fonction js --> include)



    // Faire apparaître les résultats sous la barre de recherche après l'entré de 2 caratères minimum
    const handleRechercheWithShow = true;


    return (
  
            <div className="form-container">
                <h1 className="text-4xl font-titre font-bold">{t("barreRecheche.titre")}</h1>
                <form className='form-inner' onChange={handleRechercheWithShow}>
                    <ChampText type="text" name="termeRecherche" placeholder={t("barreRecheche.placeHolder")} />
                    <div className="flex justify-center">
                        <Bouton>Recherche</Bouton>
                    </div>
                </form>
            </div>


    );
}

export default BarreRecherche;
