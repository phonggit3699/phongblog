import './css/footer.css';

import fb from './images/fb.png';
import ins from './images/ins.png';
import bird from './images/bird.png';
import heart from './images/heart.png';
import ytb from './images/ytb.png';

const Footer = () => {


    return (
        <div className="footer">
            <div className="container about">
                <div className="Box">
                    <h5>Hello</h5>
                    <ul>
                        <li>hello</li>
                        <li>hello</li>
                        <li>hello</li>
                        <li>hello</li>
                        <li>hello</li>

                    </ul>
                </div>
                <div className="Box">
                    <h5>Hello</h5>
                    <ul>
                        <li>hello</li>
                        <li>hello</li>
                        <li>hello</li>
                        <li>hello</li>
                        <li>hello</li>

                    </ul>
                </div>
                <div className="Box">
                    <h5>Hello</h5>
                    <ul>
                        <li>hello</li>
                        <li>hello</li>
                        <li>hello</li>
                        <li>hello</li>
                        <li>hello</li>

                    </ul>
                </div>
                <div className="Box">
                    <h5>Hello</h5>
                    <ul>
                        <li>hello</li>
                        <li>hello</li>
                        <li>hello</li>
                        <li>hello</li>
                        <li>hello</li>

                    </ul>
                </div>

            </div>
            <div className="share">
                <div className="image">
                    <a href="https://www.facebook.com/phamphong.03061999/" target="_blank" rel="noreferrer"><img src={fb} alt="Photos" /></a>
                    <a href="https://www.youtube.com/channel/UCCVGk8rAAmqTySbW-PFpfyQ?view_as=subscriber" target="_blank" rel="noreferrer"><img src={ytb} alt="Photos" /></a>
                    <a href="https://www.instagram.com/pham_phong_pham/" target="_blank" rel="noreferrer"><img src={ins} alt="Photos" /></a>
                    <a href="https://twitter.com/?lang=vi" target="_blank" rel="noreferrer"><img src={bird} alt="Photos" /></a>
                    <a href="https://www.youtube.com/watch?v=jK2aIUmmdP4" target="_blank" rel="noreferrer"><img src={heart} alt="Photos" /></a>
                </div>

            </div>

        </div>



    )
}

export default Footer;