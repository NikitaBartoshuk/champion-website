import React from 'react';
import Header from "./Header/Header";
import RegisterForm from "./RegisterForm/RegisterForm";
import Footer from "../../common/Footer/Footer";

function MainPage() {
    return (
        <>
            <Header />
            <RegisterForm />
            <Footer />
        </>
    );
}

export default MainPage;