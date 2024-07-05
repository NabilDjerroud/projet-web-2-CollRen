import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MenuDashboardAdmin from '../../dashboards/MenuDashboardAdmin/MenuDashboardAdmin';
import Bouton from '../../partialsFormulaire/Bouton/Bouton';

function VoitureIndex({ t, changeLanguage }) {
    const [voitures, setVoitures] = useState([]);
    const [modeles, setModeles] = useState([]);
    const [language, setLanguage] = useState(localStorage.getItem('langueChoisie'));

    useEffect(() => {

        const fetchVoitures = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/voitures');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();

                const parseJSONSafely = (str) => {
                    try {
                        return JSON.parse(str);
                    } catch (e) {
                        console.error('JSON parse error:', e);
                        return { en: str, fr: str };
                    }
                };

                const updatedData = data.map(item => ({
                    ...item,
                    description: parseJSONSafely(item.description),
                    carburant: { ...item.carburant, type: parseJSONSafely(item.carburant.type) },
                    corp: { ...item.corp, type: parseJSONSafely(item.corp.type) },
                    transmission: { ...item.transmission, type: parseJSONSafely(item.transmission.type) },
                    motopropulseur: { ...item.motopropulseur, type: parseJSONSafely(item.motopropulseur.type) }
                }));

                setVoitures(updatedData);
            } catch (error) {
                console.error('Error fetching voitures:', error);
            }
        };

        const fetchModeles = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/modeles');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setModeles(data);
            } catch (error) {
                console.error('Error fetching modeles:', error);
            }
        };

        fetchVoitures();
        fetchModeles();
    }, [language]);

    useEffect(() => {
        const storedLanguage = localStorage.getItem('langueChoisie') || '';
        setLanguage(storedLanguage);
    }, [changeLanguage]);

    const handleDeleteVoiture = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/api/voitures/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const updatedVoitures = voitures.filter(voiture => voiture.id !== id);
            setVoitures(updatedVoitures);

            alert('Voiture supprimée avec succès!');
        } catch (error) {
            console.error('Error deleting voiture:', error);
            alert('Error deleting voiture. Please try again.');
        }
    };

    const getConstructeurType = (modeleId) => {
        const modele = modeles.find(m => m.id === modeleId);
        return modele ? modele.constructeur.type : '';
    };

    return (
        <main className="flex">
            <div>
                <MenuDashboardAdmin t={t} />
            </div>

            <div className="w-[70%] mx-[4rem] mt-24">
                <h1 className='text-[#21283B]'>{t("voitureIndex_titre")}</h1>

                <Link to={"/voiture-create"}>
                    <p className='my-[1rem]'>+ {t("voitureIndex_create")}</p>
                </Link>

                <table className="w-full divide-y divide-gray-200 bg-[#21283B] my-[2rem] rounded-lg">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-large text-gray-500 uppercase tracking-wider">Date</th>
                            <th className="px-6 py-3 text-left text-xs font-large text-gray-500 uppercase tracking-wider">Description</th>
                            <th className="px-6 py-3 text-left text-xs font-large text-gray-500 uppercase tracking-wider">Prix</th>
                            <th className="px-6 py-3 text-left text-xs font-large text-gray-500 uppercase tracking-wider">Modèle</th>
                            <th className="px-6 py-3 text-left text-xs font-large text-gray-500 uppercase tracking-wider">Constructeur</th>
                            <th className="px-6 py-3 text-left text-xs font-large text-gray-500 uppercase tracking-wider">Transmission</th>
                            <th className="px-6 py-3 text-left text-xs font-large text-gray-500 uppercase tracking-wider">Motopropulseur</th>
                            <th className="px-6 py-3 text-left text-xs font-large text-gray-500 uppercase tracking-wider">Carburant</th>
                            <th className="px-6 py-3 text-left text-xs font-large text-gray-500 uppercase tracking-wider">Corp</th>
                            <th className="px-6 py-3 text-left text-xs font-large text-gray-500 uppercase tracking-wider">Action</th>
                        </tr>
                    </thead>
                    <tbody className="bg-[#21283B] divide-y divide-gray-200">
                        {voitures.map(voiture => (
                            <tr key={voiture.id}>
                                <td className="px-6 py-4 whitespace-nowrap text-white">{voiture.date}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-white">{voiture.description[language]}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-white">{voiture.prix}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-white">{voiture.modele.type}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-white">{getConstructeurType(voiture.modele_id)}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-white">{voiture.transmission.type[language]}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-white">{voiture.motopropulseur.type[language]}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-white">{voiture.carburant.type[language]}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-white">{voiture.corp.type[language]}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <Link to={`/voiture-update/${voiture.id}`} className="gap-x-[1rem] bg-[#F96C25] hover:bg-[#868E9B] text-white font-bold py-2 px-4 rounded-full">
                                        {t("btnEditer")}
                                    </Link>
                                    <Bouton onClick={() => handleDeleteVoiture(voiture.id)}>
                                        {t("btnDeleter")}
                                    </Bouton>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    );
}

export default VoitureIndex;
