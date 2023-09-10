import Icon from "/src/Assets/Icons/emoji.png";
import twitter from "/src/Assets/Icons/twitter-icon.png";
import github from "/src/Assets/Icons/gittyhub.png";
import linkedin from "/src/Assets/Icons/linkedin-icon.png"
import Bulletpoint from "/src/Assets/Icons/Bullet.svg";
import icon4 from "/src/Assets/Icons/resume-icon.png";
import Img from "/src/Assets/Images/Hero-Image.png";
import "./Hero.css"
const Hero = () => {

    return (
        <div className="hero-page-holder">
            <div className="container">
                <div className="hero-page">

                    <div>
                        <div className="Header-text-icon">
                            <h2>Hi, I’m Fiiwe Barry</h2>
                            <img className="emoji-icon" src={Icon} />
                        </div>
                        <div className="Header-text">
                            <p>
                                I am a Frontend developer (React & Next js) with a
                                focus on creating and occasionally designing exceptional
                                digital experiences that are fast, accessible, visually
                                appealing and responsive.
                            </p>
                            <button className="Hire-btn">Hire me</button>
                            <button className='Hire-btn2'><a href="/src/Assets/Brands/Fiiwe Barisanem's Resume.pdf"> DOWNLOAD CV </a></button>
                        </div>
                        <div className="Header-text-icon-layer">
                            <img className="bullet-point" src={Bulletpoint} />
                            <p>Available for new projects</p>
                        </div>
                        <div className="icon-tab">
                            <a href="https://github.com/fiiwebarry"><img className="github" src={github} /> </a>
                            <a href=""><img className="twitter-icon" src={twitter} /></a>
                            <a href="https://www.linkedin.com/in/barisanem-fiiwe-08659992/"><img className="linkedin-icon" src={linkedin} /></a>

                        </div>
                    </div>



                    <div className="Hero-image">
                        <img className="hero-img" src={Img} />
                    </div>
                </div>
            </div>

        </div >




    )
}
export default Hero;