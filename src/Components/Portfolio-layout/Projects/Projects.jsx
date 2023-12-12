
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
    <div id="project" className="project bg-[#F9F9F9]">
      <div className=" container mx-auto w-[85%] lg:pt-[60px]">
        

        <div className=" gap-2 rounded-md w-[190px] h-[70px]  p-2 flex mx-auto justify-center pt-[5px] bg-[#F9FAFB]  border border-[#F9FAFB] shadow-2xl">
                    <button className="lg:text-[25px] font-lobster font-bold mt-4"> Projects </button>
                    <span className="mt-4 "><GiLaptop  className="text-[32px]" /></span>

                </div>

        <p className="flex justify-center mx-auto lg:text-[20px] font-open-sans font-semibold mt-[20px]">Some of the noteworthy projects i have built</p>


        <div className="lg:mt-[40px]">
          <div className="lg:flex lg:flex-row md:flex md:flex-row flex flex-col gap-[50px]">
            {projectData.map((project) => {

              const { id, image, githubUrl, siteUrl, content } = project;
              return (
                <div key={id} className="">
                  <img className="rounded-2xl shadow-lg" src={image} alt="" />


                  <div className="bg-[#ffff]">

                    <p className="p-4 font-garamond lg:text-[18px]">
                      {content}

                    </p>
                     <div className="flex gap-4">
                     <button onClick={() => clickHandler(githubUrl)} className=" flex rounded font-semibold shadow-lg lg:p-4 bg-[#F9FAFB] text-[22px]"> 
                    
                    <p>GitHub </p>
                    <span><AiFillGithub /></span>
                    
                    
                    </button>
                    
                    
                    <button onClick={() => splitterClick(siteUrl)} className="flex rounded-2xl  font-semibold shadow-lg lg:p-4 bg-[#1F2937] text-[#FFF] text-[19px]">
                    <p>Visit-Site </p>
                    <span><TbSitemap /></span>
                    
                    </button>

                     </div>
                  

                  </div>
                </div>
              )


            })}
          </div>

          <div className="lg:flex lg:flex-row md:flex md:flex-row flex flex-col gap-[20px]">
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
