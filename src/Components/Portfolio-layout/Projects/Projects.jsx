import "./projects.css";

import { projectData } from "../DataPage/DataPage";
import { projectData2 } from "../DataPage/DataPage";

// import Githubicon from "/src/Assets/Icons/github-icon.jpg";

const Projects = () => {
  return (
    <div className="project">
      <div className=" container">
        <div className="work-button">
          <button className="work-btn">Projects</button>
        </div>

        <p className="work-p">Some of the noteworthy project i have built</p>


        <div className="work-container">
          <div className="flex">
            {projectData.map((project) => {

              const { id, image } = project;
              return (
                <div key={id} className="work-image">
                  <img className="work-img" src={image} alt="" />


                  <div className="project-link">
                    <button className="work-btn2"> GitHub</button>
                    <button className="work-btn2">Visit-Site</button>
                    {/* <button className="work-btn2">TIPS CALCULATOR APP</button> */}

                  </div>
                </div>
              )


            })}
          </div>

          <div className="flex pager">
            {projectData2.map((project) => {

              const { id, image } = project;
              return (
                <div key={id} className="work-image">
                  <img className="work-img" src={image} alt="" />


                  <div className="project-link">
                    <button className="work-btn2"> GitHub</button>
                    <button className="work-btn2">Visit-Site</button>
                    {/* <button className="work-btn2">TIPS CALCULATOR APP</button> */}

                  </div>
                </div>
              )


            })}
          </div>


        </div>


      </div>

    </div>
  );
};

export default Projects;
