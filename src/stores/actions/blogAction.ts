import axios from "axios";


export const getBlogs = (): any => (dispatch: any) => {
    axios
        .get("http://localhost:5000/api/blog")
        .then(res => {
            dispatch({
                type: "GET_BLOGS",
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