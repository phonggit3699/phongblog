import React from 'react';
import './css/about.css';
import { animateScroll as scroll, scroller  } from 'react-scroll';

const About = () => {
    const scrollToAboutMe = () => {
        scroller.scrollTo('about-me', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
        })
    }

    const scrollToMySkill = () => {
        scroller.scrollTo('about-my-skill', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
        })
    }
    return (
        <div className="about">
            <div className='about-banner'>
                <div className='about-banner-text'>
                    <h2>Hi, Welcome to Curriculum Vitae of me </h2>
                    <h3>I'm <span>Pham Van Phong</span></h3>
                </div>
                <button className='btn-start' onClick={scrollToAboutMe} type='button'>Get Started</button>
            </div>
            <div className='about-me'>
                hi
                <button className='btn-scrollDown' onClick={scrollToMySkill} type='button'>&#10515;</button>
            </div>

            <div className='about-my-skill'>
                hi
                <button className='btn-scrollDown' onClick={scrollToAboutMe} type='button'>&#10515;</button>
            </div>
            
        </div>

    )
}

export default About;