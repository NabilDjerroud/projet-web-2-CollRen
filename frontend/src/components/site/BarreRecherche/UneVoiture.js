import { Link } from "react-router-dom";

function UneVoiture(props) {
    console.log(props.voiture.carburant);
    let t = props.t
    let voiture = props.voiture;
    let language = props.language;

    return (

        <tr key={props?.id}>

            <td className="px-2 py-2 whitespace-nowrap text-white">{voiture.carburant?.type[language]}</td>
            <td className="px-2 py-2 whitespace-nowrap text-white">{voiture.corp?.type[language]}</td>
            <td className="px-2 py-2 whitespace-nowrap text-white">{voiture.modele?.type[language]}</td>
            <td className="px-2 py-2 whitespace-nowrap text-white">{voiture.motopropulseur?.type[language]}</td>
            <td className="px-2 py-2 whitespace-nowrap text-white">{voiture.transmission?.type[language]}</td>
            <td className="px-2 py-2 whitespace-nowrap">
                <Link to={`/voitures/${voiture.id}`} className="gap-x-[1rem] bg-[#F96C25] hover:bg-[#868E9B] text-white font-bold py-2 px-4 rounded-full">
                    {t("btnChoisir")}
                </Link>

            </td>
        </tr>

    )

}

export default UneVoiture