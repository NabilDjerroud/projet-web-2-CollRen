import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MenuDashboardAdmin from '../../dashboards/MenuDashboardAdmin/MenuDashboardAdmin';
import Bouton from '../../partialsFormulaire/Bouton/Bouton';

function CarburantIndex({ t, changeLanguage }) {
    const [carburants, setCarburants] = useState([]);
    const [language, setLanguage] = useState(localStorage.getItem('langueChoisie'));

    useEffect(() => {
        // Fonction pour récupérer les carburants en fonction de la langue
        const fetchCarburants = async () => {
            try {
                const response = await fetch(`${t("fetch")}carburants`);
                if (!response.ok) {
                    throw new Error(`Erreur HTTP! statut: ${response.status}`);
                }
                const data = await response.json();

                // Convertir le champ type de JSON string en objet JavaScript
                const updatedData = data.map(item => ({
                    ...item,
                    type: JSON.parse(item.type)
                }));
                setCarburants(updatedData);
            } catch (error) {
                console.error('Erreur lors de la récupération des carburants:', error);
            }
        };

        // Récupérer les carburants en fonction de la langue actuelle
        fetchCarburants();
    }, [language]);

    useEffect(() => {
        const storedLanguage = localStorage.getItem('langueChoisie') || '';
        setLanguage(storedLanguage);
    }, [changeLanguage]);

    const handleDeleteCarburant = async (id) => {
        try {
            const response = await fetch(`${t("fetch")}carburants/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error(`Erreur HTTP! statut: ${response.status}`);
            }

            const updatedCarburants = carburants.filter(carburant => carburant.id !== id);
            setCarburants(updatedCarburants);

            alert('Carburant supprimé avec succès!');
        } catch (error) {
            console.error('Erreur lors de la suppression du carburant:', error);
            alert('Erreur lors de la suppression du carburant. Veuillez réessayer.');
        }
    };

    return (
        <div className="flex">
            <div>
                <MenuDashboardAdmin t={t} />
            </div>

            <div className="w-[30%] mx-[4rem] mt-24">
                <h1>{t("carburantIndex_titre")}</h1>
                <Link to={"/carburant-create"}><p className='my-[1rem]'>+ {t("carburantIndex_create")}</p></Link>

                <table className="w-[60%] divide-y divide-gray-200 bg-[#21283B] my-[2rem] rounded-lg">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-large text-gray-500 uppercase tracking-wider">Type</th>
                            <th className="px-6 py-3 text-left text-xs font-large text-gray-500 uppercase tracking-wider">Action</th>
                        </tr>
                    </thead>
                    <tbody className="w-[60%] divide-y divide-gray-200 bg-[#21283B] my-[2rem] rounded-lg">
                        {carburants.map(carburant => (
                            <tr key={carburant.id}>
                                <td className="px-6 py-4 whitespace-nowrap text-white">{carburant.type[language]}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <Link to={`/carburant-update/${carburant.id}`}
                                        className="bg-[#F96C25] hover:bg-[#868E9B] text-white font-bold py-2 px-4 rounded-full mx-[1rem]">
                                        {t("btnEditer")}
                                    </Link>
                                    <Bouton
                                        onClick={() => handleDeleteCarburant(carburant.id)}
                                        className="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out"
                                    >
                                        {t("btnDeleter")}
                                    </Bouton>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default CarburantIndex;
