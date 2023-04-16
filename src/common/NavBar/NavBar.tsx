import React from 'react';
import './navbar.css'
import {imgPaths, shopPath} from "../../constants/path";
import useScrollPosition from "../../hooks/useScrollPosition";
import { Link, useLocation } from 'react-router-dom'
import {PATH} from '../../constants/path'
import {useDispatch} from "react-redux";

const NavBar = () => {

    const scrollPosition = useScrollPosition()

    const currentLocation = useLocation()

    const dispatch = useDispatch()

    return (
        <div className={scrollPosition > 0 ? 'navbar-scrolled' : 'navbar'}>
            <img className='main-logo' src={imgPaths.navbarLogo} alt="gym logo"/>
            <div className='navbar-main-menu-container'>
                <ul className={scrollPosition > 0 || currentLocation.pathname !== '/' ? 'navbar-main-menu-row-scrolled' : 'navbar-main-menu-row'}>
                    {PATH.map((item) => (
                        <li key={item.link}>
                            <Link to={item.link}>{item.text}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='navbar-btns-container'>
                <button className='shop-btn'><Link to={shopPath.link}>{shopPath.text}</Link></button>
                <button className='findagym-btn'>Find A Gym</button>
            </div>
        </div>
    );
}

export default NavBar;