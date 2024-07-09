
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Bouton from '../../partialsFormulaire/Bouton/Bouton';
import ChampText from '../../partialsFormulaire/ChampText/ChampText.js';
import './Recherche.css'

function BarreRecherche({ t }) {
    let results = []
    let arrayVoitures = [];

    const [arrayResultatRecherche, setArrayResultatRecherche] = useState([]);

    async function setDataVoitures() {
        const fetchVoitures = async () => {
            try {
                const response = await fetch(`${t("fetch")}voitures`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                arrayVoitures = await response.json();

            } catch (error) {
                console.error('Error fetching voitures:', error);
            }
        };
        fetchVoitures();
    };
    setDataVoitures();

    function trimString(s) {
        var l = 0, r = s.length - 1;
        while (l < s.length && s[l] == ' ') l++;
        while (r > l && s[r] == ' ') r -= 1;
        return s.substring(l, r + 1);
    }

    function compareObjects(o1, o2) {
        var k = '';
        for (k in o1) if (o1[k] != o2[k]) return false;
        for (k in o2) if (o1[k] != o2[k]) return false;
        return true;
    }

    function itemExists(haystack, needle) {

        for (var i = 0; i < haystack.length; i++) if (compareObjects(haystack[i], needle)) return true;
        return false;
    }

    function searchFor(ArrOfObjects, toSearch, objetPrincipal) {
        toSearch = trimString(toSearch).toLowerCase(); // trim & lower case it
        ArrOfObjects.map((objects) => {

            for (var i = 0; i < objects.length; i++) {
                for (var value in objects[i]) {
                    if (objects[i][value].toLowerCase().indexOf(toSearch) != -1) {

                        if (!itemExists(results, objects[i])) {
                            // Si ce résultat n'est pas déjà là, ajoute-le
                            results.indexOf(objetPrincipal) === -1 ? results.push(objetPrincipal) : console.log("This item already exists")
                        }
                    }
                }
            }
        })
        return results;
    }

    const handleInputChange = async (e) => {
        e.preventDefault();
        let termeRecherche = e.target[0].value;
        console.log(termeRecherche);
        if (termeRecherche == []) return []
        let ObjetContientRecherche;

        for (let i = 0; i < arrayVoitures.length; i++) {
            // Créer un array d'objet pour chacune des catégories dans lesquelles effectuer la recherche
            const elementCarburant = [JSON.parse(arrayVoitures[i].carburant.type)];
            const elementCorp = [JSON.parse(arrayVoitures[i].corp.type)];
            const elementModele = [JSON.parse(arrayVoitures[i].modele.type)];
            const elementMotopropulseur = [JSON.parse(arrayVoitures[i].motopropulseur.type)];
            const elementTransmission = [JSON.parse(arrayVoitures[i].transmission.type)];

            // Mettre toutes les arrays d'objet dans un tableau pour y faire un map
            const arrayOfElementToSearchIn = [elementCarburant, elementModele, elementMotopropulseur, elementTransmission]

            // Enregistrer les objets dans lesquels la recherche à trouver une concordance
            ObjetContientRecherche = searchFor(arrayOfElementToSearchIn, termeRecherche, arrayVoitures[i])
        }

        setArrayResultatRecherche(ObjetContientRecherche);

    };

    // Faire apparaître les résultats sous la barre de recherche après l'entré de 2 caratères minimum

    // 1. Vérification: est-ce le résultat attendu ? --> oui à date
    if (arrayResultatRecherche !== undefined) {
        console.log(arrayResultatRecherche)
    } else {
        console.log('undefined')
    }


    // 2. À chaque changement de "arrayResultatRecherche" useEffect pour ajuster l'affichage des résultats
    


    return (
        <div className="form-container">
            <h1 className="text-4xl font-titre font-bold">{t("barreRecheche.titre")}</h1>
            <form onSubmit={handleInputChange} className='form-inner'>
                <ChampText type="text" name="termeRecherche" placeholder={t("barreRecheche.placeHolder")} />
                <div className="flex justify-center">
                    <Bouton type="submit">{t("barreRecheche.titre")}</Bouton>
                </div>
            </form>
        </div>
    );
}
export default BarreRecherche;
