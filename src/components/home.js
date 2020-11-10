import './css/home.css';
import Posts from './post';
import { animateScroll as scroll } from 'react-scroll';
import React, { useState, useEffect } from 'react';
import { getPostFromAPI } from '../API';
import 'dotenv';
import { NavLink } from "react-router-dom";
import Spinner from './spinner';

// import { get } from 'react-hook-form';


const Home = () => {
    const [viewSpinner, setViewSpninner] = useState(true);
    const [posts, setPost] = useState([]);


    useEffect(() => {
        (async () => {
            const getPost = await getPostFromAPI()
            setPost(getPost);
            setViewSpninner(false);
        }
        )()
    }, []);

    const [stickyScrollTop, setStickyScrollTop] = useState(false);
    const stickyScrollTopF = () => {
        if (window.scrollY >= 700) {
            setStickyScrollTop(true);

        } else {
            setStickyScrollTop(false)
        }
    }
    window.addEventListener('scroll', stickyScrollTopF);
    const scrollToTop = () => {
        scroll.scrollToTop({
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
        });
    }
    return (
        <div className='home-container'>
            {viewSpinner ? <Spinner /> : ''}
            <div className='banner'>
                <h1>&lt;&#8725; Xin chào các bạn&gt;</h1>
                <h2>&lt;&#8725; Cùng tìm hiểu các thông tin về IT qua blog này nhé&gt;</h2>
                <h3>&lt;&#8725; More...&gt;</h3>
                <p className="arrowDown">&#8595;</p>
            </div>
            <div className="content">
                <h3>Thông tin về công nghệ thông tin</h3>
                <span>Chúc bạn một ngày tuyệt vời ❤🧡💛💚💙💜🤎!</span>
                <div className="items">
                    {posts.map((post) => (
                        <NavLink to={`/page/${post._id}`} key={post._id} className="specificPost"><Posts post={post} /></NavLink>
                    ))}
                </div>

            </div>
            <button type="button" onClick={scrollToTop} className={`scrollTop  ${stickyScrollTop ? 'stickyScrollTop' : ''}`}>&#8682;</button>

        </div>

    )
}

export default Home;