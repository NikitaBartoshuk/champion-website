import React from 'react';
import Header from "../Header/Header";
import RegisterForm from "../RegisterForm/RegisterForm";
import Footer from "../Footer/Footer";

function MainPage(props: any) {
    return (
        <div>
            <Header />
            <RegisterForm />
            <Footer />
        </div>
    );
}

export default MainPage;