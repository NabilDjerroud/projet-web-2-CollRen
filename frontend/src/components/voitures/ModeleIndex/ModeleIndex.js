import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MenuDashboardAdmin from '../../dashboards/MenuDashboardAdmin/MenuDashboardAdmin';
import Bouton from '../../partialsFormulaire/Bouton/Bouton';

function ModeleIndex ({t, changeLanguage}) {
    const [models, setModels] = useState([]);
    const [language, setLanguage] = useState(localStorage.getItem('langueChoisie'));

   
    useEffect(() => {
        // Function to fetch models based on language
        const fetchmodels = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/models');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();

                setModels(data);
            } catch (error) {
                console.error('Error fetching models:', error);
            }
        };

        // Fetch models based on the current language
        fetchmodels();
    }, [language]); // Dependency is now language

    // Function to handle language change
    useEffect(() => {
        const storedLanguage = localStorage.getItem('langueChoisie') || '';
        setLanguage(storedLanguage);
    }, [changeLanguage]);

    // Function to handle model deletion
    const handleDeleteModel = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/api/models/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            // Atualizar o estado dos modelos após a exclusão
            const updatedModels = models.filter(model => model.id !== id);
            setModels(updatedModels);

            // Alerta de sucesso
            alert('Model deleted successfully!');
        } catch (error) {
            console.error('Error deleting model:', error);
            alert('Error deleting model. Please try again.');
        }
    };

    
    return (

        <main className="flex" >
            <div>
                <MenuDashboardAdmin t={t} />
            </div>

            <div className="w-[30%] mx-[4rem] mt-24">
                <h1>{t("modeleIndex_titre")}</h1>
                
                <Link to={"/model-create"}><p className='my-[1rem]'>+  {t("modelIndex_create")}</p></Link>
                
                <table className=" w-[60%] divide-y divide-gray-200 bg-[#21283B] my-[2rem] rounded-lg">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-large text-gray-500 uppercase tracking-wider">Type</th>
                            <th className="px-6 py-3 text-left text-xs font-large text-gray-500 uppercase tracking-wider">Action</th>
                        </tr>
                    </thead>
                    <tbody className="bg-[#21283B] divide-y divide-gray-200">
                        {models.map(model => (
                            <tr key={model.id}>
                                <td className="px-6 py-4 whitespace-nowrap text-white">{model.type}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <Link to={`/model-edit/${model.id}`} className="gap-x-[1rem] bg-[#F96C25] hover:bg-[#868E9B] text-white font-bold py-2 px-4 rounded-full" >
                                        {t("btnEditer")}
                                    </Link>
                                    <Bouton
                                        onClick={() => handleDeleteModel(model.id)}
                                                                          >
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

export default ModeleIndex;