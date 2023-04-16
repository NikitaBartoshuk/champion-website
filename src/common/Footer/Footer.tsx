import * as React from 'react';
import './footer.css'
import {imgPaths} from "../../constants/path";

const hoursList = [{day: 'mo', time: 'mo: 08:00–13:00, 17:00–22:00'}, {day: 'tu', time: '08:00–13:00, 17:00–22:00'},
    {day: 'we', time: '08:00–13:00, 17:00–22:00'}, {day: 'th', time: '08:00–13:00, 17:00–22:00'},
    {day: 'fr', time: '08:00–13:00, 17:00–22:00'}, {day: 'sa', time: '09:00-18:00'}, {day: 'su', time: '09:00-18:00'}]

const contactsList = ['YT', 'IN', 'TW', 'FB']


const Footer = () => {
    return (
        <div className='footer-container'>
            <h3>ADDITIONAL INFO</h3>
            <div className='footer-add-container'>
                <div className='footer-opening-hours'>
                    <h4>OPENING HOURS</h4>
                    <ul className='footer-opening-hours-list'>
                        { hoursList.map((item, i) => (
                            <li key={i}>{item.day + ' :' + item.time}</li>
                        )) }
                    </ul>
                </div>
                <div className='footer-address'>
                    <h4>ADDRESS</h4>
                    <p>Kobrin, ul.Sportivnaya 50</p>
                </div>
                <div className='footer-contacts'>
                    <h4>CONTACTS</h4>
                    <ul className='footer-contacts-list'>
                        { contactsList.map((item) => (
                                <li key={item}>
                                    {item}
                                </li>
                        )) }
                    </ul>
                </div>
            </div>
            <div className='footer-last'>
                <img src={imgPaths.footerLogo} alt="didn't load"/>
                <span>2023 GOLD'S GYM</span>
            </div>
        </div>
    );
}

export default Footer as React.FC;