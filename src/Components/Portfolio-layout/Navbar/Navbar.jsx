import { useContext, useState } from "react";
import "./Navbar.css";
import moon from "/src/Assets/Icons/moon-icon.png";
import sun from "/src/Assets/Icons/Sun-icon.png";
import { GiBee } from 'react-icons/gi';
import { GiHamburgerMenu } from "react-icons/gi";
import { ThemeContext } from "../ThemeContext";
import MobileNavbar from "../MobileNavbar/MobileNavbar"

const Navbar = () => {

    const { toggleTheme } = useContext(ThemeContext);
    const { isDarkMode } = useContext(ThemeContext);

    const [isOpen, SetIsOpen] = useState(false);


    const ToggleHamburger = () => {

        SetIsOpen(!isOpen);

    }
    return (

        <section className="relative-tab">
            <nav className={isDarkMode ? " darkView" : "lightView "}>
                <div className="container">
                    <div className="Icon-name">
                        <div> <h1 className="Nav-header">FIIWE <GiBee /></h1></div>

                        <div className="nav-details">
                            <div className="drop-down">
                                <ul className="nav-tab">
                                    <li><a href="#About">About</a></li>
                                    <li><a href="#project">Project</a></li>
                                    <li><a href="#testimonial">Testimonial</a></li>
                                    <li><a href="#contact">Contact</a></li>
                                </ul>

                            </div>
                            <div className="menu-tab">
                                <button className="burger" onClick={ToggleHamburger}><GiHamburgerMenu /></button>

                            </div>

                            <div className="box-tab">
                                <button onClick={toggleTheme} ><img className="moon-icon" src={moon} />
                                </button>
                                <button onClick={toggleTheme} ><img className="sun-icon" src={sun} /></button>

                            </div>



                        </div>
                    </div>








                </div>

            </nav>
            {isOpen && (
                <div className="absolute-tab">
                    <MobileNavbar SetIsOpen={SetIsOpen} />
                </div>
            )}


        </section>


    );
};

export default Navbar;