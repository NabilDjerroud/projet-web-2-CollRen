import React, { useEffect, useState } from 'react';
import Tuile from '../Tuile/Tuile';

function Catalogue({ t }) {
    const [voitures, setVoitures] = useState([]);
    const [language, setLanguage] = useState(localStorage.getItem('langueChoisie'));

    useEffect(() => {
        const fetchVoitures = async () => {
            try {
                const response = await fetch(`${t("fetch")}voitures`);
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

                // Fetch images for each voiture
                await fetchImagesForVoitures(updatedData);
            } catch (error) {
                console.error('Error fetching voitures:', error);
            }
        };

        const fetchImagesForVoitures = async (voitures) => {
            try {
                const fetchImagePromises = voitures.map(async (voiture) => {
                    const response = await fetch(`${t("fetch")}images?voiture_id=${voiture.id}`);
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    const images = await response.json();
                    const principaleImage = images.find(image => image.est_principale) || images[0];
                    return { ...voiture, principaleImage };
                });

                const voituresWithImages = await Promise.all(fetchImagePromises);
                setVoitures(voituresWithImages);
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };

        fetchVoitures();
    }, [language]);

    return (
        <div className="flex flex-wrap gap-4">
            {voitures.map(voiture => (
                <Tuile key={voiture.id} voiture={voiture} language={language} />
            ))}
        </div>
    );
}

export default Catalogue;
