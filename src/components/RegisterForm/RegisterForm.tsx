import * as React from 'react';
import './registerform.css'

function RegisterForm(props: any) {
    return (
        <div className='register'>
            <p>REGISTER FOR PERSONAL TRAININGS</p>
            <div className='form-container'>
                <form action="" className='form'>
                    <input type="tel" placeholder={'ZipCode'}/>
                    <input className={'phone-input'} type="text" placeholder={'Phone'}/>
                    <button className='submit-btn'>SUBMIT</button>
                </form>
            </div>
        </div>
    );
}

export default RegisterForm;