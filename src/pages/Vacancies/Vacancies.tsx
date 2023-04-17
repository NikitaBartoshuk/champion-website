import React, {useEffect} from 'react';
import NavBar from "../../common/NavBar/NavBar";
import {useDispatch, useSelector} from "react-redux";
import {getVacancies} from "../../stores/actions/vacanciesAction";
import get = Reflect.get;

function Vacancies() {

    const dispatch = useDispatch()

    const vacancies = useSelector((state: any) => state.vacancies.vacancies)

    useEffect(() => {
        dispatch(getVacancies())
    }, [])

    console.log(vacancies)

    return (
        <NavBar />
    );
}

export default Vacancies;