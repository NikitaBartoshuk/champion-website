import React from 'react';
import './navbar.css'
import logo from '../../assets/footerimage.svg'
import useScrollPosition from "../../hooks/useScrollPosition";
import { Link, useLocation } from 'react-router-dom'

const navObj = [{link: '/', text: 'Home'}, {link: '/personal', text: 'Personal'},
                {link: '/blog', text: 'Blog'}, {link: '/vacancies', text: 'Vacancies'}]

function NavBar() {

    const scrollPosition = useScrollPosition()

    const currentLocation = useLocation()

    return (
        <>
            <div className={scrollPosition > 0 ? 'scrolled' : 'navbar'}>
                <img className='main-logo' src={logo} alt="gym logo"/>
                <div className='navbar-main-menu-container'>
                    <ul className={scrollPosition > 0 || currentLocation.pathname !== '/'? 'navbar-main-menu-row-scrolled' : 'navbar-main-menu-row'}>
                        {navObj.map((item) => (
                            <li key={item.link}>
                                <Link to={item.link}>{item.text}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='navbar-btns-container'>
                    <button className='shop-btn'>Shop</button>
                    <button className='findagym-btn'>Find A Gym</button>
                </div>
            </div>
        </>
    );
}

export default NavBar;