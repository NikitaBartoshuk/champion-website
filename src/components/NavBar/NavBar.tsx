import React from 'react';
import './navbar.css'
import logo from '../../assets/last.svg'
import useScrollPosition from "../../hooks/useScrollPosition";
import { Link, useLocation } from 'react-router-dom'

function NavBar(props: any) {

    const scrollPosition = useScrollPosition()

    const currentLocation = useLocation()

    return (
        <div>
            <div className={scrollPosition > 0 ? 'scrolled' : 'navbar'}>
                <div className='navbar-logo-container'>
                    <img className='main-logo' src={logo} alt="gym logo"/>
                </div>
                <div className='navbar-main-menu-container'>
                    <ul className={scrollPosition > 0 || currentLocation.pathname !== '/'? 'navbar-main-menu-row-scrolled' : 'navbar-main-menu-row'}>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/personal'}>Personal</Link></li>
                        <li><Link to={'/blog'}>Blog</Link></li>
                        <li><Link to={'/vacancies'}>Vacancies</Link></li>
                    </ul>
                </div>
                <div className='navbar-btns-container'>
                    <button className='shop-btn'>Shop</button>
                    <button className='findagym-btn'>Find A Gym</button>
                </div>
            </div>
        </div>
    );
}

export default NavBar;