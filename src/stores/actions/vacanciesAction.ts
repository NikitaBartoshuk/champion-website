import axios from "axios";
import {API} from "../../constants/path";

export const getVacancies = (): any => (dispatch: any) => {
    axios
        .get(`${API.vacancies.getAll}`)
        .then(res => {
            dispatch({
                type: "GET_VACANCIES",
                payload: res.data.rows
            });
        })
        .catch(err => {
            dispatch({
                type: "ERROR_VACANCIES",
                payload: true
            })
        });
};