import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import React, { useContext } from 'react';
import { UserContext } from '../../App';
import logo from '../../Logo.png';
import './Header.css';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser);
    return (
        // <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <a className="navbar-brand" href="#"><img className="logo-img" src={logo} alt=""/></a>
                        <form className="form-inline my-2 my-lg-0">
                        <input className="search-field mr-sm-2" type="search" placeholder="Search your destination..." aria-label="Search"></input>
                                            </form>
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#">News</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Destination</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                        <li className="nav-item login-btn">
                            {/* <a className="nav-link " href="#">{loggedInUser.email ? `${loggedInUser.email}` : 'Login'}</a> */}
                        </li>
                        </ul>
                    </div>
            </nav>
        // </div>
    );
};

export default Header;