import './css/footer.css';
import React, {useState, useEffect} from 'react'
import fb from './images/fbimg.png';
import ins from './images/insimg.png';
import ytb from './images/ytbimg.png';
import github from './images/githubimg.png';
import gmail from './images/gmailimg.png';
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {
    const [stickyScrollTop, setStickyScrollTop] = useState(false);
    let myGmail;
    const copyToClipboard = () => {
        myGmail.select();
        document.execCommand('copy',true, 'phamvanphong3699@gmail.com');
        alert('Gmail copied to clipboard');
    };
    
    useEffect(() => {
        const stickyScrollTopF = () => {
            if (window.scrollY >= 700) {
                setStickyScrollTop(true);
    
            } else {
                setStickyScrollTop(false)
            }
        }
        window.addEventListener('scroll', stickyScrollTopF);
        return () => {
            window.removeEventListener('scroll', stickyScrollTopF);
        }
    }, [])

    const scrollToTop = () => {
        scroll.scrollToTop({
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
        });
    }
    return (
        <div className="footer">
            <div className="container aboutInfo">
                <h5>Copy right &#169; by Pham Van Phong</h5>
            </div>
            <div className="share">
                <div className="image">
                    <a href="https://www.facebook.com/phamphong.03061999/" target="_blank" rel="noreferrer"><img src={fb} alt="Photos" /></a>
                    <a href="https://www.youtube.com/channel/UCCVGk8rAAmqTySbW-PFpfyQ?view_as=subscriber" target="_blank" rel="noreferrer"><img src={ytb} alt="Photos" /></a>
                    <a href="https://www.instagram.com/pham_phong_pham/" target="_blank" rel="noreferrer"><img src={ins} alt="Photos" /></a>
                    <a href="https://github.com/phonggit3699?tab=repositories" target="_blank" rel="noreferrer"><img src={github} alt="Photos" /></a>
                    <img src={gmail} alt="Photos" title='Click to copy my gmail'  onClick={copyToClipboard}/>
                </div>
                <textarea cols="1" rows="1" defaultValue="phamvanphong3699@gmail.com"  ref={(e) => myGmail = e }></textarea>
            </div>
            <button type="button" onClick={scrollToTop} className={`scrollTop  ${stickyScrollTop ? 'stickyScrollTop' : ''}`}>&#8682;</button>
        </div>
    )
}

export default Footer;