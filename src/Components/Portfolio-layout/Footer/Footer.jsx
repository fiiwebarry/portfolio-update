
import "./footer.css"
import twitter from "/src/Assets/Icons/twitterIcon.png";
import github from "/src/Assets/Icons/gittyhub.png";
import linkedin from "/src/Assets/Icons/linkedin-icon.png"
import { GiBee } from 'react-icons/gi';

const Footer = () => {

    return (<section className="footer">
        <div>


            <div className="Icon-footer">
                <div> <h1 className="Nav-headers">Fiiwe Barry<GiBee /></h1></div>

                <div className="nav-deal">
                    <div className="drop-down">
                        <ul className="nav-tab-tab">
                            <li><a href="#About">About</a></li>
                            <li><a href="/about">Project</a></li>
                            <li><a href="/contact">Testimonial</a></li>
                            <li><a href="#contact">Contact</a></li>


                        </ul>
                    </div>


                </div>
            </div>
            <div className="icon-tabss">
                <a href="https://github.com/fiiwebarry"><img className="github" src={github} /> </a>
                <a href=""><img className="twitter-icon" src={twitter} /></a>
                <a href="https://www.linkedin.com/in/barisanem-fiiwe-08659992/"><img className="linkedin-icon" src={linkedin} /></a>

            </div>

        </div>
    </section>)


}
export default Footer;