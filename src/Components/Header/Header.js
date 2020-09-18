import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../Logo.png';
import './Header.css';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const refreshPage = ()=>{
        window.location.reload(false);
    }
    return (
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <Link to="/home" className="navbar-brand"><img className="logo-img" src={logo} alt=""/></Link> 
                        <form className="form-inline my-2 my-lg-0">
                        <input className="search-field mr-sm-2" type="search" placeholder="Search your destination..." aria-label="Search"></input>
                                            </form>
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                        <Link to="/" className="nav-link">News</Link>  
                        </li>
                        <li className="nav-item">
                        <Link to="/" className="nav-link">Destination</Link> 
                        </li>
                        <li className="nav-item">
                        <Link to="/" className="nav-link">Blog</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/" className="nav-link">Contact</Link>
                        </li>
                        <li className="nav-item login-btn">
                        <Link to="/login" onClick={refreshPage} className="nav-link">{loggedInUser.displayName ? `${loggedInUser.displayName} (sign out)` : 'Login'}</Link>
                        </li>
                        </ul>
                    </div>
            </nav>
    );
};

export default Header;