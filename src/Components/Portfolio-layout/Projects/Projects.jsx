import "./projects.css";
import { AiFillGithub } from 'react-icons/ai';
import { projectData } from "../DataPage/DataPage";
import { projectData2 } from "../DataPage/DataPage";
import { GiLaptop } from 'react-icons/gi';
import { TbSitemap } from "react-icons/tb";


const Projects = () => {

  const clickHandler = () => {

    window.location.href = "https://github.com/fiiwebarry/TIP-CALCULATOR";
  }

  const splitterClick = () => {
    window.location.href = "https://fiiwebarry.github.io/TIP-CALCULATOR/";
  }
  return (
    <div className="project">
      <div className=" container">
        <div className="work-button">
          <button className="work-btn">Projects <GiLaptop /></button>
        </div>

        <p className="work-p">Some of the noteworthy project i have built</p>


        <div className="work-container">
          <div className="flex">
            {projectData.map((project) => {

              const { id, image, content } = project;
              return (
                <div key={id} className="work-image">
                  <img className="work-img" src={image} alt="" />


                  <div className="project-link">

                    <p className="projectile">
                      {content}

                    </p>

                    <button onClick={clickHandler} className="work-btn2"> GitHub <AiFillGithub /></button>
                    <button onClick={splitterClick} className="work-btn2">Visit-Site <TbSitemap /></button>


                  </div>
                </div>
              )


            })}
          </div>

          <div className="flex pager">
            {projectData2.map((project) => {

              const { id, image, content } = project;
              return (
                <div key={id} className="work-image">
                  <img className="work-img" src={image} alt="" />


                  <div className="project-link">

                    <p className="projectile">
                      {content}
                    </p>
                    <button className="work-btn2"> GitHub</button>
                    <button className="work-btn2">Visit-Site</button>


                  </div>
                </div>
              )


            })}
          </div>


        </div>


      </div>

    </div >
  );
};

export default Projects;
