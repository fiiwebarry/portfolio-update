import Icon from "/src/Assets/Icons/emoji.png";
import twitter from "/src/Assets/Icons/Twitter.png";
import github from "/src/Assets/Icons/Github.png";
import linkedin from "/src/Assets/Icons/Linkedin.png";
import Bulletpoint from "/src/Assets/Icons/Bullet.svg";
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
                        </div>
                        <div className="Header-text-icon-layer">
                            <img className="bullet-point" src={Bulletpoint} />
                            <p>Available for new projects</p>
                        </div>
                        <div className="icon-tab">
                            <img className="github-icon" src={github} />
                            <img className="twitter-icon" src={twitter} />
                            <img className="linkedin-icon" src={linkedin} />

                        </div>
                    </div>



                    <div className="Hero-image">
                        <img src={Img} />
                    </div>
                </div>
            </div>

        </div >




    )
}
export default Hero;