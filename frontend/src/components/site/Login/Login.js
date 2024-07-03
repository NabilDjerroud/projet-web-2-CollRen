import { NavLink, useNavigate } from 'react-router-dom';

function Login({ t, user, handleLogin, handleLogout }) {
    const navigate = useNavigate();

    async function handleLoginWithRedirect(e) {
        const result = await handleLogin(e);

        if (result.success) {
            const privId = result.privId;
            const userId = result.userId;
        
                if (privId ===3) {
                    navigate(`/client/${userId}`);
                } else {
                     navigate(`/admin`)
                }
        }
    }

    return (
        <main className="container mx-auto p-4 mt-12 bg-white flex flex-col items-center justify-center text-gray-700">
            <div className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-4">
                <h1 className="text-4xl font-semibold">{t("login.titre")}</h1>
            </div>
            
            {user.isLogged ? 
                (<div className='admin-link'>
                    <NavLink to="/admin">Admin</NavLink>
                    <button onClick={handleLogout} className='logout-form'>Déconnexion</button>
                </div>)
                :
                (<form className='login-form' onSubmit={handleLoginWithRedirect}>
                    <input type="text" name="nomUtilisateur" placeholder="Username" />
                    <input type="password" name="mdp" placeholder="Password" />
                    <button>Login</button>
                </form>)
            }
        </main>
    );
}

export default Login;
