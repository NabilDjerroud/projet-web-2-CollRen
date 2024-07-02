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
        <nav className="flex font-sen text-gray-800">
            <Link to="/" className="py-2 px-6 flex text-lg">
                {t("navItem.home")}
            </Link>
            <a href="#" className="py-2 px-6 flex color-red text-lg">
                {t("navItem.catalogue")}
            </a>
            <Link to="/apropos" className="py-2 px-6 flex text-lg">
                {t("navItem.apropos")}
            </Link>
            <a href="#" className="py-2 px-6 flex text-lg">
                Contact
            </a>
            <Link to="/usercreate" className="py-2 px-6 flex text-lg">
                {t("navItem.signup")}
            </Link>
            {
                user.isLogged ?
                <button onClick={handleLogout} className="py-2 px-6 flex text-lg">
                    Logout
                </button>
                :
                <Link to="/login" className="py-2 px-6 flex text-lg">
                    Login
                </Link>
            }
        </nav>
    );
}

export default Nav;
