import axios from "axios";
import {API} from "../../constants/path";


export const getBlogs = (): any => (dispatch: any) => {
    axios
        .get(`${API.blog.getAll}`)
        .then(res => {
            dispatch({
                type: "GET_BLOGS",
                payload: res.data.rows
            });
        })
        .catch(err => {
            dispatch({
                type: "ERROR_BLOG",
                payload: true
            })
        });
};