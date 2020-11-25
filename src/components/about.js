import React, { useState, useRef, useMemo } from 'react';
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
import phongBlog from './images/phongBlog.jpg'




const About = () => {
    const [getScrollY, setScrollY] = useState(0);

    useMemo(() => {
        const getScrollYF = () => {
            setScrollY(window.scrollY)
            return window.scrollY;
        }
        window.addEventListener('scroll', getScrollYF, { passive: true });
    }, []);

    const scrollToAboutMe = () => {
        scroller.scrollTo('about-me', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
            spy: true
        })
    }

    const scrollToResume = () => {
        scroller.scrollTo('about-my-resume', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
            spy: true
        })
    }

    const scrollToSkill = () => {
        scroller.scrollTo('about-my-skill', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
            spy: true
        })
    }

    const scrollToProject = () => {
        scroller.scrollTo('about-my-project', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
            spy: true
        })
    }

    const scrollToContact = () => {
        scroller.scrollTo('about-my-contact', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
            spy: true
        })
    }

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
                                    <td>My Name: </td>
                                    <td><span className="fullName">Pham Van Phong</span></td>
                                </tr>
                                <tr key="date">
                                    <td>Date of birth: </td>
                                    <td><span>03/06/1999</span></td>
                                </tr>
                                <tr key="address">
                                    <td>Address: </td>
                                    <td><span>Kim Dinh Kim Thanh Hai Duong</span></td>
                                </tr>
                                <tr key="email">
                                    <td>Email: </td>
                                    <td><span>phamvanphong3699@gmail.com</span></td>
                                </tr>
                                <tr key="phone">
                                    <td>Phone: </td>
                                    <td><span>0327018706</span></td>
                                </tr>
                            </tbody>
                        </table>
                        <button className='btnCV'>Download CV</button>
                        <button className="btn-scrollDown" onClick={scrollToResume} type='button'>Resume</button>
                    </div>
                </div>

            </Element>
            <Element className='about-my-resume'>
                <h3 className={getScrollY >= 950 ? 'animationDropDown' : ''}>Resume</h3>
                <div className={`about-my-resume-step ${getScrollY >= 950 ? 'animationDropDown2' : ''}`}>
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
                    <div className='content html'>
                        <img src={html5} alt="html" />
                        <span>Html</span>
                    </div>
                    <div className='content css'>
                        <img src={css3} alt="css" />
                        <span>Css</span>
                    </div>
                    <div className='content js'>
                        <img src={js} alt="js" />
                        <span>JavaScript</span>
                    </div>
                    <div className='content sass'>
                        <img src={sass} alt="sass" />
                        <span>Sass</span>
                    </div>
                </div>
                <div className={`framework ${getScrollY > 2000 ? 'animationSlidePrev' : ''}`}>
                    <div className='content nodejs'>
                        <img src={nodejs} alt="nodejs" />
                        <span>NodeJs</span>
                    </div>
                    <div className='content react'>
                        <img src={react} alt="react" />
                        <span>React</span>
                    </div>
                    <div className='content expressjs'>
                        <img src={expressjs} alt="expressjs" />
                        <span>ExpressJs</span>
                    </div>
                    <div className='content mongodb'>
                        <img src={mongodb} alt="mongodb" />
                        <span>Mongodb</span>
                    </div>
                </div>
                <button className="btn-scrollDown" onClick={scrollToProject} type='button'>My Project</button>
            </Element>
            <Element className='about-my-project'>
                <h3 className={getScrollY > 2800 ? 'animationFlyInDelay0' : ''}>My <span>Project</span></h3>
                <div className='project-content'>
                    <div className={`content ${getScrollY > 2800 ? 'animationFlyInDelay0' : ''}`}>
                        <img src={phongBlog} alt="phongBlog" />
                        <p className='des'>Trang được tạo </p>
                        <p className='technology'><span>Technologies used: ReactJs</span></p>
                        <div className='linkProject'>
                            <a href="localhost:3000/about">See Live</a>
                            <a className="gitHub" href="localhost:3000/about">Source Code</a>
                        </div>
                    </div>
                    <div className={`content ${getScrollY > 2800 ? 'animationFlyInDelay1' : ''}`}>
                        <img src={phongBlog} alt="phongBlog" />
                        <p className='des'>Trang được tạo </p>
                        <p className='technology'><span>Technologies used: ReactJs</span></p>
                        <div className='linkProject'>
                            <a href="localhost:3000/about">See Live</a>
                            <a className="gitHub" href="localhost:3000/about">Source Code</a>
                        </div>
                    </div>
                    <div className={`content ${getScrollY > 2800 ? 'animationFlyInDelay2' : ''}`}>
                        <img src={phongBlog} alt="phongBlog" />
                        <p className='des'>Trang được tạo </p>
                        <p className='technology'><span>Technologies used: ReactJs</span></p>
                        <div className='linkProject'>
                            <a href="localhost:3000/about">See Live</a>
                            <a className="gitHub" href="localhost:3000/about">Source Code</a>
                        </div>
                    </div>
                </div>
                <div className='project-content'>
                    <div className={`content ${getScrollY > 3000 ? 'animationFlyInDelay0' : ''}`}>
                        <img src={phongBlog} alt="phongBlog" />
                        <p className='des'>Trang được tạo </p>
                        <p className='technology'><span>Technologies used: ReactJs</span></p>
                        <div className='linkProject'>
                            <a href="localhost:3000/about">See Live</a>
                            <a className="gitHub" href="localhost:3000/about">Source Code</a>
                        </div>
                    </div>
                    <div className={`content ${getScrollY > 3000 ? 'animationFlyInDelay1' : ''}`}>
                        <img src={phongBlog} alt="phongBlog" />
                        <p className='des'>Trang được tạo </p>
                        <p className='technology'><span>Technologies used: ReactJs</span></p>
                        <div className='linkProject'>
                            <a href="localhost:3000/about">See Live</a>
                            <a className="gitHub" href="localhost:3000/about">Source Code</a>
                        </div>
                    </div>
                    <div className={`content ${getScrollY > 3000 ? 'animationFlyInDelay2' : ''}`}>
                        <img src={phongBlog} alt="phongBlog" />
                        <p className='des'>Trang được tạo </p>
                        <p className='technology'><span>Technologies used: ReactJs</span></p>
                        <div className='linkProject'>
                            <a href="localhost:3000/about">See Live</a>
                            <a className="gitHub" href="localhost:3000/about">Source Code</a>
                        </div>
                    </div>
                </div>
                <button className="btn-scrollDown" onClick={scrollToContact} type='button'>Contact</button>
            </Element>
            <Element className='about-my-contact'>
                <h3 className={getScrollY > 2800 ? 'animationFlyInDelay0' : ''}><span>Contact</span> me</h3>
            </Element>
        </div>
    )
}

export default About;