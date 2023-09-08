import "./work.css";
import Workimage from "/src/Assets/Images/work-image.png";
import Githubicon from "/src/Assets/Icons/github-icon.jpg";

const work = () => {
  return (
    <div className="work">
      <div className="work-button">
        <button className="work-btn">Projects</button>
      </div>

      <div className="work-text">
        <p className="work-p">Some of the noteworthy project i have built</p>
      </div>
      <div className="Work">
        <div className="work-container">
          <div className="work-image">
            <img className="work-img" src={Workimage} alt="" />
          </div>
          <div className="work-skills">
            <div className="work-skill">
              <span className="react-skill">
                <p className="react">React</p>
              </span>

              <span className="js-skill">
                <p className="js">Javascript</p>
              </span>

              <span className="figma-skill">
                <p className="figma">Figma</p>
              </span>

              <span className="html-skill">
                <p className="html">Html</p>
              </span>

              <span className="bs-skill">
                <p className="bs">Bootstrap</p>
              </span>

              <span className="tc-skill">
                <p className="tc">Tailwind Css</p>
              </span>

              <span className="git-skill">
                <p className="git">Git</p>
              </span>

              <span className="css-skill">
                <p className="css">Css</p>
              </span>
            </div>
            <div className="work-btns">
              <div className="github-icon">
                <button className="work-github">Github</button>
                <img className="github-img" src={Githubicon} alt="" />
              </div>
              <div className="visit-site">
                <button className="work-site">Visit Site</button>
              </div>
            </div>
          </div>
        </div>
        <div className="work-container">
          <div className="work-image">
            <img className="work-img" src={Workimage} alt="" />
          </div>
          <div className="work-skills">
            <div className="work-skill">
              <span className="react-skill">
                <p className="react">React</p>
              </span>

              <span className="js-skill">
                <p className="js">Javascript</p>
              </span>

              <span className="figma-skill">
                <p className="figma">Figma</p>
              </span>

              <span className="html-skill">
                <p className="html">Html</p>
              </span>

              <span className="bs-skill">
                <p className="bs">Bootstrap</p>
              </span>

              <span className="tc-skill">
                <p className="tc">Tailwind Css</p>
              </span>

              <span className="git-skill">
                <p className="git">Git</p>
              </span>

              <span className="css-skill">
                <p className="css">Css</p>
              </span>
            </div>
            {/*
            <div className="work-btns">
              <div className="github-icon">
                <button className="work-github">Github</button>
                <img className="github-img" src={Githubicon} alt="" />
              </div>
              <div className="visit-site">
              <button className="work-site">Visit Site</button>
            </div>
            </div>*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default work;
