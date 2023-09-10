
import Img from "/src/Assets/Images/Rectangle.png";
import img2 from "/src/Assets/Images/shade.png";
import star from "/src/Assets/Icons/Star.png";
import "./About.css"

const About = () => {

    return (
        <div id="About" className="About-page-holder">

            <div className="container">

                <div className="btn-layer">
                    <button className="about-btn"> About me</button>

                </div>

                <div className="About-page-text">

                    <div className="About-image-tab">
                        <div className="image-tab">
                            <img src={Img} alt="" />
                        </div>
                        <div className="shade">
                            <img className="shade-img" src={img2} alt="" />
                        </div>

                    </div>
                    <div className="About-text-tab">
                        <p>
                            My journey into the world of web development began with an insatiable curiosity for technology and a desire to create things that impact people's lives positively.
                            {/* Front-end development proved to be the perfect fusion of creativity and technicality, allowing me to build bridges */}
                            {/* between design and functionality.  */}

                            I'm fascinated by the ever-evolving landscape of web technologies,
                            and I embrace the challenge of staying up-to-date with the latest trends and best practices.
                        </p>
                        <h2 className="about-me"> What Sets Me Apart:</h2>
                        <div className="text-sets">
                            <img className="star" src={star} alt="" />
                            <p><span>User-Centric Approach:</span><br /> I believe in putting the user at the center of every project.
                                Understanding their needs and behaviors is key to crafting intuitive and delightful user experiences.</p>
                        </div>

                        <div className="text-sets">

                            <img className="star" src={star} alt="" />
                            <p>
                                <span className="">Responsive Design:</span><br />In today's mobile-driven world, responsive design is not just a feature but a necessity.
                                I take great care in ensuring that my creations look and function flawlessly across all devices and screen sizes.

                            </p>
                        </div>
                        <div className="text-sets">
                            <img className="star" src={star} alt="" />
                            <p><span>Code Craftsmanship:</span><br />I take pride in writing well-structured, scalable, and maintainable code.
                                Clean code is not just aesthetically pleasing;
                                it contributes to better collaboration and faster development cycles.</p>
                        </div>
                    </div>
                </div>


            </div>


        </div >











    )


}

export default About;