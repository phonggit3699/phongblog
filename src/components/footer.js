import './css/footer.css';
import React, {useState} from 'react'
import fb from './images/fb.png';
import ins from './images/ins.png';
import ytb from './images/ytb.png';
import github from './images/github.png';
import gmail from './images/gmail.png';
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {
    const [stickyScrollTop, setStickyScrollTop] = useState(false);
    let myGmail;
    const copyToClipboard = () => {
        myGmail.select();
        document.execCommand('copy',true, 'phamvanphong3699@gmail.com');
        alert('Gmail copied to clipboard');
    };
 
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
        <div className="footer">
            <div className="container about">
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