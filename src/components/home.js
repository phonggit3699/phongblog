import './css/home.css';
import Posts from './post';
import { animateScroll as scroll } from 'react-scroll';
import React, { useState, useEffect } from 'react';
import 'dotenv';


const Home = () => {
    const [posts, setPost] = useState([ {
        _id: 1,
        title: "What is Lorem Ipsum?",
        des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        img: "https://assets.justinmind.com/wp-content/uploads/2018/11/Lorem-Ipsum-alternatives.png"
    },
    {
        _id: 2,
        title: "Why do we use it?",
        des: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
        img: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
        _id: 3,
        title: "Why do we use it?",
        des: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
        img: "https://images.unsplash.com/photo-1493119508027-2b584f234d6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
        _id: 4,
        title: "Why do we use it?",
        des: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
        img: "https://images.unsplash.com/photo-1583109193439-1ebb113bceac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    }]);


    useEffect(() => {
        fetch("http://localhost:3001/post/postAPI")
            .then(res => res.json())
            .then(
                (postsapi) => {
                    console.log(postsapi);
                    setPost([...postsapi,...posts]);
                },
                (error) => {
                    console.log(error) 
                }
            )
    }, [])


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
                    {posts.map((post) => (
                        <Posts post={post} key={post._id} />
                    ))}
                </div>

            </div>
            <button type="button" onClick={scrollToTop} className={`scrollTop  ${stickyScrollTop ? 'stickyScrollTop' : ''}`}>&#8682;</button>
        </div>

    )
}

export default Home;