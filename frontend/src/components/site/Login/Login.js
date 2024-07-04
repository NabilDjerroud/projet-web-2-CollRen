<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';
import Bouton from '../../partialsFormulaire/Bouton/Bouton';
import ChampText from '../../partialsFormulaire/ChampText/ChampText';
import './Login.css'

function Login({ t, user, handleLogin, handleLogout }) {
    const navigate = useNavigate();

    async function handleLoginWithRedirect(e) {
        const result = await handleLogin(e);

        if (result.success) {
            const privId = result.privId;
            
            if (privId === 3) {
                navigate(`/client`);
            } else {
                navigate(`/admin`);
            }
        }
=======
import Bouton from "../../partialsFormulaire/Bouton/Bouton";
import ChampText from "../../partialsFormulaire/ChampText/ChampText";
import { useState } from "react";
import "./Login.css";

function Login({ t }) {
    const [courriel, setCourriel] = useState("");
    const [mdp, setMdp] = useState("");

    function login(e) {
        e.preventDefault();
        console.log(e);

        // Clear form
        e.target.reset();
>>>>>>> 8a93d64 (Ajuster le footer et l'inserer dans App, ajout du style pour le)
    }
   
    return (
<<<<<<< HEAD
        <main className="container mx-auto p-8 mt-12 flex flex-col items-center justify-center text-gray-700 login-form">
            <div className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-4">
                <h1 className="login-title">{t("login.titre")}</h1>
            </div>
            
            <div className='bg-[#F96C25] w-[40rem] rounded-2xl' >
                <form className='my-4  p-12 rounded-2xl bg-[#21283B]' onSubmit={handleLoginWithRedirect}>
                    <ChampText type="text" name="nomUtilisateur" placeholder={t("login.nomUtilisateur")} />
                    <ChampText type="password" name="mdp" placeholder={t("login.mdp")} />
                    <Bouton>Login</Bouton>
                </form>
            </div>
            
=======
        <main className="main-background">
            <div className="form-container">
                <h1 className="text-4xl font-semibold">{t("login.titre")}</h1>
                <form onSubmit={login} className="form-inner">
                    <div>
                        <ChampText
                            label={t("login.courriel")}
                            type="email"
                            placeholder={t("login.courrielPlaceHolder")}
                            content={courriel}
                            whenChanged={content => setCourriel(content)}
                            required
                        />
                    </div>
                    <div>
                        <ChampText
                            label={t("login.mdp")}
                            type="password"
                            placeholder={t("login.mdpPlaceHolder")}
                            content={mdp}
                            whenChanged={content => setMdp(content)}
                            required
                        />
                    </div>
                    <div className="flex justify-center">
                        <button type="submit" className="orange-button">{t("login.btn")}</button>
                    </div>
                </form>
            </div>
>>>>>>> 8a93d64 (Ajuster le footer et l'inserer dans App, ajout du style pour le)
        </main>
    );
}

export default Login;
