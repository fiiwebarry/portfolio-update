import "./projects.css";
import { AiFillGithub } from 'react-icons/ai';
import { projectData } from "../DataPage/DataPage";
import { projectData2 } from "../DataPage/DataPage";
import { GiLaptop } from 'react-icons/gi';
import { TbSitemap } from "react-icons/tb";


const Projects = () => {

  const clickHandler = (url) => {

    window.location.href = url;
  }

  const splitterClick = (url) => {
    window.location.href = url;
  }
  return (
    <div id="project" className="project">
      <div className=" container">
        <div className="work-button">
          <button className="work-btn">Projects <GiLaptop /></button>
        </div>

        <p className="work-p">Some of the noteworthy project i have built</p>


        <div className="work-container">
          <div className="flex">
            {projectData.map((project) => {

              const { id, image, githubUrl, siteUrl, content } = project;
              return (
                <div key={id} className="work-image">
                  <img className="work-img" src={image} alt="" />


                  <div className="project-link">

                    <p className="projectile">
                      {content}

                    </p>

                    <button onClick={() => clickHandler(githubUrl)} className="work-btn2"> GitHub <AiFillGithub /></button>
                    <button onClick={() => splitterClick(siteUrl)} className="work-btn2">Visit-Site <TbSitemap /></button>


                  </div>
                </div>
              )


            })}
          </div>

          <div className="flex pager">
            {projectData2.map((project) => {

              const { id, image, githubUrl, siteUrl, content } = project;
              return (
                <div key={id} className="work-image">
                  <img className="work-img" src={image} alt="" />


                  <div className="project-link">

                    <p className="projectile">
                      {content}
                    </p>
                    <button onClick={() => clickHandler(githubUrl)} className="work-btn2"> GitHub <AiFillGithub /></button>
                    <button onClick={() => splitterClick(siteUrl)} className="work-btn2">Visit-Site <TbSitemap /></button>


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
