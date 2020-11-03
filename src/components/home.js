import './css/home.css';
import Posts from './post';
import {  animateScroll as scroll } from 'react-scroll';
import React, { useState } from 'react';

const Home = () => {
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
                    <Posts />
                    <Posts />
                    <Posts />
                    <Posts />
                </div>



                <p> ldsa;dksakdsad </p>
                <p> ldsa;dksakdsad </p>
                <p> ldsa;dksakdsad </p>
                <p> ldsa;dksakdsad </p>dsadsa
                <p> ldsa;dksakdsad </p>
                <p> ldsa;dksakdsad </p>
                <p> ldsa;dksakdsad </p><p> ldsa;dksakdsad </p>
                <p> ldsa;dksakdsad </p>

                <p> ldsa;dksakdsad </p>



                <p> ldsa;dksakdsad </p>


                <p> ldsa;dksakdsad </p>
                <p> ldsa;dksakdsad </p>


                <p> ldsa;dksakdsad </p>


                <p> ldsa;dksakdsad </p>
                <p> ldsa;dksakdsad </p>
                <p> ldsa;dksakdsad </p>



                <p> ldsa;dksakdsad </p>


                <p> ldsa;dksakdsad </p>
                <p> ldsa;dksakdsad </p>
                <p> ldsa;dksakdsad </p>

                <p> ldsa;dksakdsad </p>

            </div>
            <button type="button" onClick={scrollToTop} className={`scrollTop  ${stickyScrollTop ? 'stickyScrollTop' : ''}`}>TOP</button>
        </div>

    )
}

export default Home;