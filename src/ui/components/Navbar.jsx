import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';

export const Navbar = ({username}) => {

    const {onLogout:logout} = useContext( AuthContext )
    const navigate = useNavigate();

    const onLogout = () => {
        logout()
        localStorage.removeItem('user')

        navigate('/login', ()=>{{
            replace: true
        }})
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            <Link className="navbar-brand" to="/marvel">Heroes</Link>
            <div className="navbar-collapse">
                <div className="navbar-nav">
                    <NavLink className="nav-item nav-link" to="/marvel">Marvel</NavLink>
                    <NavLink className="nav-item nav-link" to="/dc">DC</NavLink>
                </div>
            </div>
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <NavLink className="nav-item nav-link" to="/search">Search</NavLink>
                    <NavLink className="nav-item nav-link text-info" to="/login">{ username }</NavLink>
                    <button className='nav-item nav-link btn' onClick={onLogout}>
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}