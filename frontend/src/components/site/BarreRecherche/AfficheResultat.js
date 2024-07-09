import React from 'react';
import UneVoiture from './UneVoiture';

function AfficherResultats(props) {
    console.log(props);
    let t = props.t
    let voitures = props.voitures;
    let language = props.language;
    
    
    let blockTableRow;

    function tableauDuResultatRecherche(array) {
        let listeDesVehicule = array.map((voiture, index) => {
            return <UneVoiture key={index} voiture={voiture} t={t} language={language}></UneVoiture>

        })
        return listeDesVehicule;
    }

    blockTableRow = tableauDuResultatRecherche(voitures);
    console.log(blockTableRow);
    return (
        <div>
        <table className="divide-y divide-gray-200 bg-[#21283B] my-[2rem] rounded-lg">
            <thead>
                <tr>

                    <th className="px-6 py-3 text-left text-xs font-large text-gray-500 uppercase tracking-wider">{t("voituretableau_Carburant")}</th>
                    <th className="px-6 py-3 text-left text-xs font-large text-gray-500 uppercase tracking-wider">{t("voituretableau_Corps")}</th>
                    <th className="px-6 py-3 text-left text-xs font-large text-gray-500 uppercase tracking-wider">{t("voituretableau_Modele")}</th>
                    <th className="px-6 py-3 text-left text-xs font-large text-gray-500 uppercase tracking-wider">{t("voituretableau_Motopropulseur")}</th>
                    <th className="px-6 py-3 text-left text-xs font-large text-gray-500 uppercase tracking-wider">{t("voituretableau_Transmission")}</th>
                    <th className="px-6 py-3 text-left text-xs font-large text-gray-500 uppercase tracking-wider">Action</th>
                </tr>
            </thead>
            <tbody className="bg-[#21283B] divide-y divide-gray-200">
                {blockTableRow}
            </tbody>
        </table>
        </div>
    );


}
export default AfficherResultats;