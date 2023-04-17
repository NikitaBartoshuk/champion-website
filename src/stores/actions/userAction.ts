import axios, {AxiosResponse} from "axios";


export const registerUser = (email: string, password: string): any => (dispatch: any) => {
    axios
        .post("http://localhost:5000/api/user/registration", {
            email: email,
            password: password
        })
        .then(res => {
            document.cookie = `token=${res.data.token}`;
            dispatch({
                type: "REG_USER",
                payload: res.data.token
            });
        })
        .catch(err => {
            dispatch({
                type: "ERROR",
                payload: true
            })
        });
};

export const loginUser = (email: string, password: string) => (dispatch: any) => {
    axios
        .post('http://localhost:5000/api/user/login', {
            email: email,
            password: password
        })
        .then(res => {
            document.cookie = `token=${res.data.token}`;
            dispatch({
                type: "LOGIN_USER",
                payload: res.data.token
            })
        })
        .catch(err => {
            dispatch({
                type: "ERROR",
                payload: true
            })
        })
}