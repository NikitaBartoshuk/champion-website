import * as React from 'react';
import './registerform.css'

function RegisterForm() {
    return (
        <div className='register'>
            <h3>REGISTER FOR PERSONAL TRAININGS</h3>
            <div className='form-container'>
                <form action="" className='form'>
                    <input type="tel" placeholder='Email'/>
                    <input className='phone-input' type="text" placeholder='Password'/>
                    <button className='submit-btn'>SUBMIT</button>
                </form>
            </div>
        </div>
    );
}

export default RegisterForm;