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
    }
   
    return (
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
            
        </main>
    );
}

export default Login;
