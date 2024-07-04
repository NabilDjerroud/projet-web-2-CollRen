import React, { useContext } from 'react';
import { AppContext } from '../../App/App';
import { Link, useNavigate } from 'react-router-dom';

function Nav({ t }) {
    const { user, logout } = useContext(AppContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/'); 
    };

    return (
        <nav className="text-white bg-bleuFonce flex justify-evenly font-titre ">
            <Link to="/" className="py-2 px-6 flex text-lg">
                {t("navItem.home")}
            </Link>
            <a href="/voitures" className="py-2 px-6 flex color-red text-lg">
                {t("navItem.catalogue")}
            </a>
            <Link to="/apropos" className="py-2 px-6 flex text-lg">
                {t("navItem.apropos")}
            </Link>
            <a href="/contact" className="py-2 px-6 flex text-lg">
                Contact
            </a>
            {
                !user.isLogged ?
                    ( <Link to="/usercreate" className="py-2 px-6 flex text-lg">
                            {t("navItem.signup")}
                        </Link>) : ("")
                }


            {
                user.isLogged ? (
                    <>
                        {user.usager.privilege_id === 1 || user.usager.privilege_id === 2 ? (
                            <Link to="/admin" className="py-2 px-6 flex text-lg">
                                Admin
                            </Link>
                        ) : user.usager.privilege_id === 3 ? (
                            <Link to="/client" className="py-2 px-6 flex text-lg">
                                Client
                            </Link>
                        ) : null}
                        <button onClick={handleLogout} className="py-2 px-6 flex text-lg">
                            Logout
                        </button>
                    </>
                ) : (
                    <Link to="/login" className="py-2 px-6 flex text-lg">
                        Login
                    </Link>
                )
            }

        </nav>
    );
}

export default Nav;
