import React, {useState} from 'react';
import './header.css'
import biglogo from '../../assets/Serious-Training.png'
import {CSSTransition} from "react-transition-group";


function Header(props: any) {
    const [showPopup, setShowPopup] = useState(false)

    const togglePopup = () => {
        setShowPopup(!showPopup)
    }

    return (
        <div>
            <div className='image-container'>
                <div className='inner-text'>
                    <div className='big-logo'>
                        <img src={biglogo} alt="big logo"/>
                        <div>
                            <span>Since 1965, no gym has been responsible for more life-changing <br/> transformations and fitness achievements than Gold’s Gym.</span>
                        </div>
                        <button className='abon-popup-btn' onClick={togglePopup}>SUBSCRIPTION</button>
                        <CSSTransition in={showPopup} classNames='alert' timeout={300} unmountOnExit>
                            <div className={`abonements-popup-container`}>
                                <div className='sub-header-btn'>
                                    <button onClick={togglePopup} name="close-outline"></button>
                                </div>
                                <div className='students-header row'>
                                    <p>FOR STUDENTS</p>
                                </div>
                                <div className='sub-icons-container'>
                                    <div className='sub-unit'>
                                        <div className='sub-img'></div>
                                        <div className='caption-container'>
                                            <p>64 BUN</p>
                                            <p>16 TRAININGS</p>
                                        </div>
                                    </div>
                                    <div className='sub-unit'>
                                        <div className='sub-img'></div>
                                        <div className='caption-container'>
                                            <p>64 BUN</p>
                                            <p>16 TRAININGS</p>
                                        </div>
                                    </div>
                                    <div className='sub-unit'>
                                        <div className='sub-img'></div>
                                        <div className='caption-container'>
                                            <p>64 BUN</p>
                                            <p>16 TRAININGS</p>
                                        </div>
                                    </div>
                                    <div className='sub-unit'>
                                        <div className='sub-img'></div>
                                        <div className='caption-container'>
                                            <p>64 BUN</p>
                                            <p>16 TRAININGS</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='usual-header row'>
                                    <p>USUAL</p>
                                </div>
                                <div className='sub-icons-container'>
                                    <div className='sub-unit'>
                                        <div className='sub-img'></div>
                                        <div className='caption-container'>
                                            <p>64 BUN</p>
                                            <p>16 TRAININGS</p>
                                        </div>
                                    </div>
                                    <div className='sub-unit'>
                                        <div className='sub-img'></div>
                                        <div className='caption-container'>
                                            <p>64 BUN</p>
                                            <p>16 TRAININGS</p>
                                        </div>
                                    </div>
                                    <div className='sub-unit'>
                                        <div className='sub-img'></div>
                                        <div className='caption-container'>
                                            <p>64 BUN</p>
                                            <p>16 TRAININGS</p>
                                        </div>
                                    </div>
                                    <div className='sub-unit'>
                                        <div className='sub-img'></div>
                                        <div className='caption-container'>
                                            <p>64 BUN</p>
                                            <p>16 TRAININGS</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CSSTransition>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;