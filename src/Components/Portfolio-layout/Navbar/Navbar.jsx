import { useState } from "react";
import "./Navbar.css";
import moon from "/src/Assets/Icons/moon-icon.png";
import sun from "/src/Assets/Icons/Sun-icon.png";

const Navbar = () => {





    const [isDarkMood, SetDarkMood] = useState(false);


    const ToogleMood = () => {
        console.log("hello");
        SetDarkMood(!isDarkMood);

    }



    return (


        <nav className={`Navbar ${isDarkMood ? "darkView" : "lightView "}`}>
            <div className="container">
                <div className="Icon-name">
                    <h2 className="Nav-header">GrittyBee</h2>
                </div>

                <div className="nav-details">
                    <div>
                        <ul>
                            <li><a href="/">About</a></li>
                            <li><a href="/about">Project</a></li>
                            <li><a href="/contact">Testimonial</a></li>
                            <li><a href="/contact">Contact</a></li>


                        </ul>
                    </div>
                    <div>
                        <button onClick={ToogleMood} className={isDarkMood ? "darkView" : "lightView"}><img className="moon-icon" src={moon} />
                        </button>
                        <button><img className="sun-icon" src={sun} />     </button>

                    </div>



                </div>






            </div>

        </nav>
    );
};

export default Navbar;