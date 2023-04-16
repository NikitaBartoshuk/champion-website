import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getBlogs} from "../../stores/actions/blogAction";

const Blog = () => {

    const dispatch = useDispatch()

    const blogs = useSelector((state: any )=> state.blog.blogs)

    useEffect(() => {
        dispatch(getBlogs())
    }, [])

    console.log(blogs)


    return (
        <div>
            
        </div>
    );
};

export default Blog;