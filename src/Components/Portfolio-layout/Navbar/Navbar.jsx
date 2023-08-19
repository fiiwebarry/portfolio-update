import { useState } from "react";
import "./Navbar.css";
import moon from "/src/Assets/Icons/moon-icon.png";
// import sun from "/src/Assets/Icons/Sun-icon.png"

const Navbar = () => {

    // export  const ThemeContext = createContext(null);


    const [toggleView, SetToggleView] = useState("darkView");

    const changeView = () => {

        SetToggleView((curr) => (curr === "darkView" ? "lightView" : "darkView"));

    }



    return (
        <nav className="" value={{ toggleView, changeView }}>
            <div className="container">

                <h2 className="Nav-header">GrittyBee</h2>

                <ul>
                    <li><a href="/">About</a></li>
                    <li><a href="/about">Project</a></li>
                    <li><a href="/contact">Testimonial</a></li>
                    <li><a href="/contact">Contact</a></li>


                </ul>
                <button onClick={changeView} ><img className="moon-icon" src={moon} />

                    {/* <img className="sun-icon" src={sun} /> */}
                </button>




            </div>

        </nav>
    );
};

export default Navbar;