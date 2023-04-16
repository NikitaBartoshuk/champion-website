import * as React from 'react';
import './loginform.css'
import {useEffect, useState} from "react";
import {CSSTransition} from "react-transition-group";
import {useDispatch, useSelector} from "react-redux";
import {registerUser} from "../../../stores/actions/userAction";



const LoginFrom = () => {

    const [showForm, setShowForm] = useState(false)

    const handleFormSubmit = (event: any) => {
        event.preventDefault();
    }

    const dispatch = useDispatch()

    const user = useSelector(state => state)

    const RegUser = (email: string, password: string) => {
        dispatch(registerUser(email, password))
        console.log(user)
    }

    return (
        <div className='register'>
            <h3>REGISTER FOR PERSONAL TRAININGS</h3>
            <div className='form-container'>
                <form action="" className='form' onSubmit={handleFormSubmit}>
                    <input type="tel" placeholder='Email'/>
                    <input className='phone-input' type="text" placeholder='Password'/>
                    <button className='submit-btn'>SUBMIT</button>
                    <button className='submit-btn' onClick={() => setShowForm(!showForm)}>No account?</button>
                        <CSSTransition in={showForm} classNames='alert' timeout={300} unmountOnExit>
                            <div className={'register-form'}>
                                <div className='register-form-column'>
                                    <p>Sign In</p>
                                    <span>Register and use personal trainings</span>
                                    <form onSubmit={handleFormSubmit}>
                                        <button className='exit-form-btn' onClick={() => setShowForm(!showForm)}>EXIT</button>
                                        <input type="email" placeholder='Email'/>
                                        <input type="password" placeholder='Password'/>
                                        <input type="password" placeholder='Confirm password'/>
                                        <button className='register-btn' onClick={() => RegUser('lalala', 'loh')}>Sign In</button>
                                    </form>
                                </div>
                            </div>
                        </CSSTransition>
                </form>
            </div>
        </div>
    );
}

export default LoginFrom;