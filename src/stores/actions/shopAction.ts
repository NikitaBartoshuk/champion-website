import axios from "axios";


export const getShops = (): any => (dispatch: any) => {
    axios
        .get("http://localhost:5000/api/shop")
        .then(res => {
            dispatch({
                type: "GET_SHOPS",
                payload: res.data.rows
            });
        })
        .catch(err => {
            dispatch({
                type: "ERROR",
                payload: true
            })
        });
};