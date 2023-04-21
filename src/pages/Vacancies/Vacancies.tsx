import React, {useEffect} from 'react';
import NavBar from "../../common/NavBar/NavBar";
import {useDispatch, useSelector} from "react-redux";
import {createVacancie, getVacancies} from "../../stores/actions/vacanciesAction";
import './vacancies.css'

function Vacancies() {

    const dispatch = useDispatch()

    const vacancies = useSelector((state: any) => state.vacancies.vacancies)

    useEffect(() => {
        dispatch(getVacancies())
    }, [])

    console.log(vacancies)

    const createVacancies = () => {
        dispatch(createVacancie('Поломойщик', 'Крутой'))
    }

    return (
        <>
            <NavBar />
            <button className='vacancies-btn' onClick={createVacancies}>Создать вакансию</button>
        </>
    );
}

export default Vacancies;