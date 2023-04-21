import axios from "axios";
import {API} from "../../constants/path";


export const getShops = (): any => (dispatch: any) => {
    axios
        .get(`${API.shop.getAll}`)
        .then(res => {
            dispatch({
                type: "GET_SHOPS",
                payload: res.data.rows
            });
        })
        .catch(err => {
            dispatch({
                type: "ERROR_SHOP",
                payload: true
            })
        });
};