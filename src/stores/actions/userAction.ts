import axios from "axios";


export const registerUser = (email: string, password: string): any => (dispatch: any) => {
    axios
        .post("http://localhost:5000/api/user/registration", {
            email: email,
            password: password
        })
        .then(res => {
            dispatch({
                type: "REG_USER",
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