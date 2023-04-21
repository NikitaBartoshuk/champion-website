import React, {useEffect} from 'react';
import './blog.css'
import {useDispatch, useSelector} from "react-redux";
import {createBlog, getBlogs} from "../../stores/actions/blogAction";

const Blog = () => {

    const dispatch = useDispatch()

    const blogs = useSelector((state: any )=> state.blog.blogs)

    useEffect(() => {
        dispatch(getBlogs())
    }, [])

    console.log(blogs)

    const createBlogs = () => {
        dispatch(createBlog('Из функции', 'Новость'))
    }


    return (
        <div>
            <button className='blog-btn' onClick={createBlogs}>Создать новость</button>
        </div>
    );
};

export default Blog;