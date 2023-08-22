import { useState } from "react";
import "./Navbar.css";
import moon from "/src/Assets/Icons/moon-icon.png";
import sun from "/src/Assets/Icons/Sun-icon.png";

const Navbar = () => {

    // export  const ThemeContext = createContext(null);


    const [darkMode, setDarkMode] = useState("darkView");



    const changeView = () => {

        // SetToggleView((curr) => (curr === "darkView" ? "lightView" : "darkView"));
        if (darkMode === "darkView") {
            setDarkMode("light");
        }



    }



    return (
        <nav className="Nav-holder" >
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
                        <button onClick={changeView} ><img className="moon-icon" src={moon} />

                            <img className="sun-icon" src={sun} />

                        </button>
                    </div>

                </div>





            </div>

        </nav>
    );
};

export default Navbar;