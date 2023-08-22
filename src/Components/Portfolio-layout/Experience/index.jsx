import './index.css'
import icon from "/src/Assets/Icons/weDance.png";
import icon2 from "/src/Assets/Icons/ihealth.png";
import icon3 from "/src/Assets/Icons/kodecamp.jpg";
import icon4 from "/src/Assets/Icons/resume-icon.png";

const Experience = () => {

    return (
        <div className="experience-layout">

            <div className="experience-btn-tab">
                <button className='exp-btn'> <a href="/src/Assets/Brands/Fiiwe Barisanem's Resume.pdf"><img src={icon4} alt="" /> DOWNLOAD CV </a></button>

            </div>


            <div className="container">
                <div className="experience-text-tab">
                    <div className='tab-header'>
                        <img className='ihealth-icon' src={icon2} alt="" />
                        <h2 className="text-head"> PRINCIPAL FRONT-END ENGINEER </h2>

                    </div>
                    <div className='text-lead-tab'>
                        <h2>Framework: React.Js  </h2>
                        <h3>Key Qualification & Responsibilities</h3>
                        <ul>
                            <li>Developed and maintained responsive websites using HTML, CSS, and JavaScript.</li>
                            <li>Collaborated with designers and back-end developers to implement website features and functionality</li>
                            <li>Conducting thorough testing and debugging to ensure cross-browser compatibility and optimal performance. </li>
                            <li>Optimized website performance through efficient coding practices and optimization techniques.</li>
                            <li>Worked closely with clients to understand their requirements and provide technical guidance.</li>
                            <li>Implemented SEO best practices to improve website visibility and search engine</li>



                        </ul>
                    </div>
                    <div>

                    </div>

                </div>
            </div>

            {/* <div className="container">
                <div className="experience-text-tab">
                    <div className="tab-header">
                        <div className="flex-icon">
                            <img className='kodecamp-icon' src={icon3} alt="" />
                            <h3 className='text-lead'>KODECAMP</h3>
                        </div>
                        <h2 className="text-head">FRONT-END DEVELOPER  </h2>
                    </div>

                    <div className="text-lead-tab">

                        <h3>Framework: React.J</h3>
                        <h3>Key Responsibilities</h3>
                        <ul>
                            <li>Designed and developed user interfaces for web applications using HTML,CSS and JavaScript (React.js) </li>
                            <li>Created reusable front-end components and libraries to enhance development efficiency</li>
                            <li>Collaborated with cross-functional teams to gather requirements and deliver high-quality solutions</li>
                            <li>Assisted in the design process by providing technical insights and feasibility analysis</li>
                            <li>Conducted code reviews and provided constructive feedback to team members</li>
                            <li>Stayed updated with the lasted front-end technologies and trend</li>
                        </ul>
                    </div>
                    <div>
                        MARCH 2022- Till date

                    </div>

                </div>
            </div> */}







        </div >
    )

}
export default Experience;