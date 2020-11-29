import React, { useState, useEffect } from 'react';
import './css/about.css';
import { scroller, Element } from 'react-scroll';
import cat from './images/cat.jpg';
import star from './images/star.png';
import js from './images/js.png';
import html5 from './images/html5.png';
import css3 from './images/css3.png';
import nodejs from './images/nodejs.png';
import react from './images/react.png';
import expressjs from './images/expressjs.png';
import sass from './images/sass.png';
import mongodb from './images/mongodb.png';
import phongBlog from './images/phongBlog.jpg';
import todoList from './images/todoList.jpg';
import postApi from './images/postApi.jpg';




const About = () => {
    const [getScrollY, setScrollY] = useState(0);

    useEffect(() => {
        const getScrollYF = () => {
            setScrollY(window.scrollY)
        }
        window.addEventListener('scroll', getScrollYF);
        document.title = "About | FongBlog"
        return () => {
            window.removeEventListener('scroll', getScrollYF);
        }
    }, []);

    const scrollToAboutMe = () => {
        scroller.scrollTo('about-me', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
            spy: true
        })
    };

    const scrollToResume = () => {
        scroller.scrollTo('about-my-resume', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
            spy: true
        })
    };

    const scrollToSkill = () => {
        scroller.scrollTo('about-my-skill', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
            spy: true
        })
    };

    const scrollToProject = () => {
        scroller.scrollTo('about-my-project', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
            spy: true
        })
    };

    //Array content of project
    const projectContent = [
        {
            id: 1,
            img: phongBlog,
            des: "Trang được tạo ra nhằm mục đích showcase",
            tech: "ReactJs",
            linkLive: "localhost:3000/about",
            linkGitHub: "https://github.com/phonggit3699/phongblog",

        },
        {
            id: 2,
            img: postApi,
            des: "Trang được tạo ra nhằm mục đích showcase",
            tech: "ExpressJs, MongoDB, Heroku",
            linkLive: "https://phongallpostapi.herokuapp.com/api/post",
            linkGitHub: "https://github.com/phonggit3699/postAPI",

        },
        {
            id: 3,
            img: todoList,
            des: "Trang được tạo ra nhằm mục đích showcase",
            tech: "ReactJs",
            linkLive: "https://todo-list-95966.firebaseapp.com/",
            linkGitHub: "https://github.com/phonggit3699/todos-list",

        },
        {
            id: 4,
            img: phongBlog,
            des: "Trang được tạo ra nhằm mục đích showcase",
            tech: "ReactJs, ExpressJs, MongoDB",
            linkLive: "localhost:3000/about",
            linkGitHub: "",

        },
        {
            id: 5,
            img: phongBlog,
            des: "Trang được tạo ra nhằm mục đích showcase",
            tech: "ReactJs, ExpressJs, MongoDB",
            linkLive: "localhost:3000/about",
            linkGitHub: "",

        },
        {
            id: 6,
            img: phongBlog,
            des: "Trang được tạo ra nhằm mục đích showcase",
            tech: "ReactJs, ExpressJs, MongoDB",
            linkLive: "localhost:3000/about",
            linkGitHub: "",

        },
    ];

    //Array content of skill
    const skillContent1 = [
        {
            id: 1,
            img: html5,
            name: "Html",
            css: "html"
        },
        {
            id: 2,
            img: css3,
            name: "Css",
            css: "css"
        },
        {
            id: 3,
            img: js,
            name: "Js",
            css: "js"
        },
        {
            id: 4,
            img: sass,
            name: "Sass",
            css: "sass"

        }

    ];

    const skillContent2 = [
        {
            id: 1,
            img: nodejs,
            name: "NodeJs",
            css: "nodejs"
        },
        {
            id: 2,
            img: react,
            name: "ReactJs",
            css: "react"
        },
        {
            id: 3,
            img: expressjs,
            name: "ExpressJs",
            css: "expressjs"
        },
        {
            id: 4,
            img: mongodb,
            name: "MongoDb",
            css: "mongodb"
        }
    ];


    return (
        <div className="about">
            <Element className='about-banner'>
                <div className='about-banner-text'>
                    <h2>Hello, my name is <br /> <span>Pham Van Phong</span></h2>
                    <h3>And I'm Front-end developer </h3>
                </div>
                <button className='btn-start' onClick={scrollToAboutMe} type='button'>Get Started</button>
            </Element>
            <Element className='about-me'>
                <h3 className={getScrollY > 200 ? 'animationZoomIn' : ''}><span>About</span> me</h3>
                <div className='content'>
                    <div className={`content-info-img ${getScrollY > 300 ? 'animationZoomIn' : ''}`}>
                        <img src={cat} alt="fire" />
                    </div>
                    <div className={`content-info-text ${getScrollY > 300 ? 'animationZoomIn' : ''}`}>
                        <table>
                            <tbody>
                                <tr key="name">
                                    <td><i className="fas fa-wind"></i><span className='info'>My Name: </span> </td>
                                    <td><span className="fullName">Pham Van Phong</span></td>
                                </tr>
                                <tr key="date">
                                    <td><i className="fas fa-birthday-cake"></i><span className='info'> Date of birth: </span></td>
                                    <td><span>03/06/1999</span></td>
                                </tr>
                                <tr key="address">
                                    <td><i className="fas fa-map-marker-alt"></i><span className='info'>Address: </span> </td>
                                    <td><span>Kim Dinh Kim Thanh Hai Duong</span></td>
                                </tr>
                                <tr key="email">
                                    <td><i className="fas fa-envelope"></i><span className='info'>Email: </span></td>
                                    <td><span>phamvanphong3699@gmail.com</span></td>
                                </tr>
                                <tr key="phone">
                                    <td><i className="fas fa-phone"></i><span className='info'>Phone: </span></td>
                                    <td><span>0327018706</span></td>
                                </tr>
                            </tbody>
                        </table>
                        <button className='btnCV'><i className="fas fa-download"></i> Download CV</button>
                        <button className="btn-scrollDown" onClick={scrollToResume} type='button'>Resume</button>
                    </div>
                </div>

            </Element>
            <Element className='about-my-resume'>
                <h3 className={getScrollY > 950 ? 'animationDropDown' : ''}>Resume</h3>
                <div className={`about-my-resume-step ${getScrollY > 950 ? 'animationDropDown2' : ''}`}>
                    <div className='education'>
                        <h4>Education</h4>
                        <div className='education-content'>
                            <img src={star} alt="star" />
                            <div className='education-content-text'>
                                <h6>2017 - 2022</h6>
                                <h4>Information Technology engineer</h4>
                                <h5>HANOI UNIVERSITY OF MINING AND GEOLOGY</h5>
                                <p>The university is constantly expanding its international cooperation in  undergraduate and postgraduate education, scientific research, providing consultancy services, to cooperate with prestigious regional and world-wide universities in offering the educational programs in foreign languages based on advanced curricula and high quality programs. </p>
                            </div>
                        </div>
                    </div>
                    <div className='education'>
                        <h4>Experience</h4>
                        <div className='education-content'>
                            <img src={star} alt="star" />
                            <div className='education-content-text'>
                                <h6>2019 - Present</h6>
                                <h4>Self Learning</h4>
                                <h5>AT HOME</h5>
                                <p>I spend two hour for learning and practicing code every day.</p>
                            </div>
                        </div>
                    </div>
                    <button className="btn-scrollDown" onClick={scrollToSkill} type='button'>My Skill</button>
                </div>
            </Element>
            <Element className='about-my-skill'>
                <div className={`h3Fake ${getScrollY > 2000 ? 'animationSlideH3' : ''}`}>
                    <span className="firstH3">My</span>
                    <span className={`secondH3 ${getScrollY > 2000 ? 'animationSlideH32' : ''}`}>Skill</span>
                </div>
                <div className={`language ${getScrollY > 2000 ? 'animationSlideNext' : ''}`}>
                    {skillContent1.map((item) => (
                        <div key={item.id} className={`content ${item.css}`}>
                            <img src={item.img} alt={item.name} />
                            <span>{item.name}</span>
                        </div>
                    ))}
                </div>
                <div className={`framework ${getScrollY > 2000 ? 'animationSlidePrev' : ''}`}>
                {skillContent2.map((item) => (
                        <div key={item.id} className={`content ${item.css}`}>
                            <img src={item.img} alt={item.name} />
                            <span>{item.name}</span>
                        </div>
                    ))}
                </div>
                <button className="btn-scrollDown" onClick={scrollToProject} type='button'>My Project</button>
            </Element>
            <Element className='about-my-project'>
                <h3 className={getScrollY > 2800 ? 'animationFlyInDelay0' : ''}>My <span>Project</span></h3>
                <div className='project-content'>
                    {projectContent.map((item) => (
                        <div key={item.id} className={`content ${getScrollY > 2800 ? 'animationFlyInDelay0' : ''}`}>
                            <img src={item.img} alt="phongBlog" />
                            <p className='des'>{item.des}</p>
                            <p className='technology'><span>Technologies used: {item.tech}</span></p>
                            <div className='linkProject'>
                                <a target="_blank" rel="noreferrer" href={item.linkLive}>See Live</a>
                                <a className="gitHub" target="_blank" rel="noreferrer" href={item.linkGitHub}>Source Code</a>
                            </div>
                        </div>
                    ))}
                </div>
            </Element>
            <Element className='about-my-contact'>
                <h3 className={getScrollY > 2800 ? 'animationFlyInDelay0' : ''}><span>Contact</span> me</h3>
                <h4>LET’S MAKE SOMETHING TOGETHER!</h4>
                <p><i className="fas fa-envelope"></i> phamvanphong3699@gmail.com</p>
                <p><i className="fas fa-phone"></i> +84327018706</p>
            </Element>
        </div>
    )
}

export default About;