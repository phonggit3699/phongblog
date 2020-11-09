import './css/footer.css';
import React from 'react';
import fb from './images/fb.png';
import ins from './images/ins.png';
import ytb from './images/ytb.png';
import github from './images/github.png';
import gmail from './images/gmail.png';

const Footer = () => {


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
                    <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" rel="noreferrer"><img src={gmail} alt="Photos" /></a>
                </div>

            </div>

        </div>



    )
}

export default Footer;