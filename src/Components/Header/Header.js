import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import logo from '../../Logo.png';
import './Header.css';

const Header = () => {
    const search = <FontAwesomeIcon icon={ faSearch } />
    return (
        <div className="container">
            <nav class="navbar navbar-expand-lg navbar-dark bg-transparent">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <a class="navbar-brand" href="#"><img className="logo-img" src={logo} alt=""/></a>
                        <form class="form-inline my-2 my-lg-0">
                        <input class="search-field mr-sm-2 fontAwesome" type="search" placeholder="&#xF002; Search your destination..." aria-label="Search"></input>
                                            </form>
                        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" href="#">News</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Destination</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contact</a>
                        </li>
                        <li class="nav-item login-btn">
                            <a class="nav-link " href="#">Login</a>
                        </li>
                        </ul>
                      
                    </div>
            </nav>
        </div>
    );
};

export default Header;