import React, {useState, FC} from 'react';
import './header.css'
import biglogo from '../../../assets/hero.png'
import {CSSTransition} from "react-transition-group";
import Button from "../../../common/Button/Button";

const trainingsForStudents = [{price: '22,80 BYN', training : '6 TRAININGS'}, {price: '29,60 BYN', training : '8 TRAININGS'},
    {price: '43,20 BYN', training : '12 TRAININGS'}, {price: '56,00 BYN', training : '16 TRAININGS'}]

const trainingsForUsual = [{price: '27,00 BYN', training : '6 TRAININGS'}, {price: '35,20 BYN', training : '8 TRAININGS'},
    {price: '51,60 BYN', training : '12 TRAININGS'}, {price: '67,20 BYN', training : '16 TRAININGS'}]

interface ITrainings {
    price: string;
    training: string;
}

interface TrainingsProps {
    trainings: ITrainings[]
}

const Trainings: FC<TrainingsProps> = ({trainings}) =>

        <div className='sub-icons-container'>
            { trainings.map((item) => (
                <div className='sub-unit' key={item.price }>
                    <div className='sub-img' />
                    <div className='caption-container'>
                        <p>{item.price}</p>
                        <p>{item.training}</p>
                    </div>
                </div>
            )) }
        </div>




const Header = () => {
    const [showPopup, setShowPopup] = useState(false)

    return (
            <div className='image-container'>
                <div className='inner-text'>
                    <div className='big-logo'>
                        <img src={biglogo} alt="big logo"/>
                        <span>Since 1965, no gym has been responsible for more life-changing <br/> transformations and fitness achievements than Gold’s Gym.</span>
                        <Button title='SUBSCRIPTION' style='red-button' onClick={() => setShowPopup(!showPopup)}/>
                        <CSSTransition in={showPopup} classNames='alert' timeout={300} unmountOnExit>
                            <div className='abonements-popup-container'>
                                <div className='sub-header-btn'>
                                    <button onClick={() => setShowPopup(!showPopup)} name="close-outline">EXIT</button>
                                </div>
                                <div className='row'>
                                    FOR STUDENTS
                                </div>
                                <Trainings trainings={trainingsForStudents} />
                                <div className='row'>
                                    USUAL
                                </div>
                                <Trainings trainings={trainingsForUsual} />
                            </div>
                        </CSSTransition>
                    </div>
                </div>
            </div>
    );
}

export default Header;