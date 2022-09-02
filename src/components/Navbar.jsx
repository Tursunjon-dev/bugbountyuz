import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../images/nav-logo.svg'
import About from '../pages/About';
import Team from '../pages/Team';
import Rules from '../pages/Rules';
const Navbar = () => {
    return (
        <>
            {/* <!-- Header --> */}
            <header>
                <div class="container header-group">
                    <div class="header-logo">
                        <img src={Logo} alt="" />
                    </div>

                    <nav class="header-menu">
                        <ul class="nav-list">
                            <li class="nav-li">
                                    <a href="#" class="nav-link">Nega biz?</a>
                            </li>
                            <li class="nav-li">
                                <NavLink to="/">
                                    <a href={About} class="nav-link active">Loyiha haqida</a>
                                </NavLink>
                            </li>
                            <li class="nav-li">
                                <NavLink to="/team">
                                    <a href={Team} class="nav-link">Jamoa</a>
                                </NavLink>
                            </li>
                            <li class="nav-li">
                                <NavLink to="/rules">
                                    <a href={Rules} class="nav-link">Qoidalar</a>
                                </NavLink>
                            </li>
                            <li class="nav-li">
                                <a href="#" class="nav-link">UZ</a>
                            </li>
                        </ul>
                    </nav>

                    <div class="header-btn">
                        <button class="btn-light">
                            SIGN UP
                        </button>
                    </div>

                </div>
            </header>
            {/* <!-- End Header --> */}
        </>
    );
};


export default Navbar;