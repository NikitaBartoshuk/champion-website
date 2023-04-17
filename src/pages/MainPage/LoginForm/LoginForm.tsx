import * as React from 'react';
import './loginform.css'
import {useState} from "react";
import {CSSTransition} from "react-transition-group";
import {useDispatch, useSelector} from "react-redux";
import {loginUser, registerUser} from "../../../stores/actions/userAction";



const LoginFrom = () => {

    const [showForm, setShowForm] = useState(false)

    const dispatch = useDispatch()


    const handleFormSubmit = (event: any) => {
        event.preventDefault()
        dispatch(registerUser('user125', 'werdsf'))
    }

    const handleFormLoginSubmit = (event: any) => {
        event.preventDefault()
        //@ts-ignore
        dispatch(loginUser('user125', 'werdsf'))
    }


    const user = useSelector(state => state)

    return (
        <div className='register'>
            <h3>REGISTER FOR PERSONAL TRAININGS</h3>
            <div className='form-container'>
                <form action="" className='form' onSubmit={handleFormLoginSubmit}>
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
                                        <button className='register-btn'>Sign In</button>
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