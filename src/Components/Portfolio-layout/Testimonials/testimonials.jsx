import "./testimonials.css";
import Person from "/src/Assets/Images/PersonCircle.png"

const testimonials = () => {
  return (
    <div className="testimonials">
      <div className="testimonials-button">
        <button className="testimonials-btn">Testimonials</button>
      </div>

      <div className="testimonials-text">
        <p className="testimonials-p">Nice things people have said about me:</p>
      </div>
      <div className="testimony">
        <div className="testimony-box">
          <img className="testimony-img" src={Person} alt="" />
          <p className="testimony-text">
            Lorem ipsum dolor sit amet consectetur. Viverra donec accumsan velit
            nulla sed sed pellentesque feugiat commodo.
          </p>
          <span className="testimony-span">John Doe</span><br/>
          <span className="testimony-span">Freelance</span>
        </div>
        <div className="testimony-box">
          <img className="testimony-img" src={Person} alt="" />
          <p className="testimony-text">
            Lorem ipsum dolor sit amet consectetur. Viverra donec accumsan velit
            nulla sed sed pellentesque feugiat commodo.
          </p>
          <span className="testimony-span">John Doe</span><br/>
          <span className="testimony-span">Freelance</span>
        </div>
        <div className="testimony-box">
          <img className="testimony-img" src={Person} alt="" />
          <p className="testimony-text">
            Lorem ipsum dolor sit amet consectetur. Viverra donec accumsan velit
            nulla sed sed pellentesque feugiat commodo.
          </p>
          <span className="testimony-span">John Doe</span><br/>
          <span className="testimony-span">Freelance</span>
        </div>
      </div>
    </div>
  );
};

export default testimonials;
