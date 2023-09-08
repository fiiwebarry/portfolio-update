import icon from "/src/Assets/Icons/react.svg";
import icon2 from "/src/Assets/Icons/javascript.svg";
import icon3 from "/src/Assets/Icons/css.png";
// import icon4 from "/src/Assets/Icons/nextdotjs.png";
import icon5 from "/src/Assets/Icons/figma.svg";
import icon6 from "/src/Assets/Icons/tailwindcss.svg";
import icon7 from "/src/Assets/Icons/git.png";
import icon8 from "/src/Assets/Icons/bootstrap.svg";
import icon9 from "/src/Assets/Icons/html5.png";
import icon10 from "/src/Assets/Icons/Next.png";
import "./index.css"
const Batch = () => {

    return (
        <div className="skills-set-tab">

            <div className="skills-btn">
                <button className="btn-tab">My Skill Set</button>
            </div>

            <div className="skills-tab">
                <div className="flex-column">
                    <div>
                        <img src={icon} alt="" />
                    </div>

                    <div className="text-alignment"><h3>React</h3></div>
                </div>
                <div>
                    <div>
                        <img src={icon2} alt="" />
                    </div>
                    <div>
                        <h3>Javascript</h3>
                    </div>

                </div>
                <div className="flex-column">
                    <div>
                        <img src={icon3} alt="" />
                    </div>
                    <div>
                        <h3 className="text-align">CSS</h3>
                    </div>

                </div>
                <div>
                    <img src={icon10} alt="" />
                    <h3 className="text-tab">Next.Js</h3>
                </div>
                <div>
                    <img src={icon5} alt="" />
                    <h3>Figma</h3>
                </div>
                <div>
                    <img src={icon6} alt="" />
                    <h3>Tailwind CSS</h3>
                </div>
                <div className="flex-column">
                    <div>
                        <img src={icon7} alt="" />
                    </div>
                    <div>
                        <h3 className="text-align">Git</h3>
                    </div>

                </div>
                <div>
                    <img src={icon8} alt="" />
                    <h3>Bootstrap</h3>
                </div>
                <div>
                    <img src={icon9} alt="" />
                    <h3 className="text-tab">HTML</h3>
                </div>



            </div>

        </div>


    )
}
export default Batch;