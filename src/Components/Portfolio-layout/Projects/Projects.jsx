import "./projects.css";
import { AiFillGithub } from 'react-icons/ai';
import { projectData } from "../DataPage/DataPage";
import { projectData2 } from "../DataPage/DataPage";
import { GiLaptop } from 'react-icons/gi';
import { TbSitemap } from "react-icons/tb";


const Projects = () => {
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

              const { id, image } = project;
              return (
                <div key={id} className="work-image">
                  <img className="work-img" src={image} alt="" />


                  <div className="project-link">

                    <p>
                      TipMate is a user-friendly and intuitive mobile application designed to simplify
                      the process of calculating tips and splitting bills. Whether you're
                      dining out with friends, enjoying a night out,
                      or simply grabbing a coffee to-go, TipMate ensures you can quickly
                      and accurately determine the appropriate tip amount.

                    </p>

                    <button className="work-btn2"> GitHub <AiFillGithub /></button>
                    <button className="work-btn2">Visit-Site <TbSitemap /></button>


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

    </div >
  );
};

export default Projects;
