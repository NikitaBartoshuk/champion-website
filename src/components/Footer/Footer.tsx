import * as React from 'react';
import './footer.css'
import last from '../../assets/last.svg';

function Footer(props: any) {
    return (
        <div className='footer-container'>
            <center><h3>ADDITIONAL INFO</h3></center>
            <hr/>
            <div className='footer-add-container'>
                <div className='footer-opening-hours'>
                    <span>OPENING HOURS</span>
                    <ul className='opening-hours-list'>
                        <li>mo: 08:00–13:00, 17:00–22:00</li>
                        <li>tu:	08:00–13:00, 17:00–22:00</li>
                        <li>we:	08:00–13:00, 17:00–22:00</li>
                        <li>th:	08:00–13:00, 17:00–22:00</li>
                        <li>fr:	08:00–13:00, 17:00–22:00</li>
                        <li>sa:	09:00–18:00</li>
                        <li>su:	11:00–16:00</li>
                    </ul>
                </div>
                <div className='footer-address'>
                    <span>ADDRESS</span>
                    <p>Kobrin, ul.Sportivnaya 50</p>
                </div>
                <div className='footer-contacts'>
                    <span>CONTACTS</span>
                    <ul className='contacts-list'>
                        <li>YT</li>
                        <li>IN</li>
                        <li>TW</li>
                        <li>FB</li>
                    </ul>
                </div>
            </div>
            <hr/>
            <div className='last'>
                <img src={last} alt="ne zagruzulos brat"/>
                <span>2023 GOLD'S GYM</span>
            </div>
        </div>
    );
}

export default Footer as React.FC;