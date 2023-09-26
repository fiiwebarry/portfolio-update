import { useState } from "react";
import "./Navbar.css";
import moon from "/src/Assets/Icons/moon-icon.png";
import sun from "/src/Assets/Icons/Sun-icon.png";
import { GiBee } from 'react-icons/gi';

const Navbar = () => {





    const [isDarkMood, SetDarkMood] = useState(false);


    const ToogleMood = () => {

        SetDarkMood(!isDarkMood);

    }



    return (


        <nav className={`Navbar ${isDarkMood ? " darkView" : "lightView "}`}>
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

                        <div className="box-tab">
                            <button onClick={ToogleMood} className={isDarkMood ? "darkView" : "lightView"}><img className="moon-icon" src={moon} />
                            </button>
                            <button onClick={ToogleMood} className={isDarkMood ? "lightView" : "darkView"}><img className="sun-icon" src={sun} /></button>

                        </div>



                    </div>
                </div>








            </div>

        </nav>
    );
};

export default Navbar;