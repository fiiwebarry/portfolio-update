import { data } from "../DataPage/DataPage";
import "./testimonial.css";


const testimonial = () => {
  return (
    <div className="testimonials">
      <div className="container">

        <div className="testimonials-button" >
          <button className="testimonials-btn">Testimonials</button>
        </ div>

        <div className="testimonials-text">
          <p className="testimonials-p">Nice things people have said about me:</p>
        </div>
        <div className="testimonial-tab">

          {data.map((info) => {

            const { id, image, text, name, Role } = info;
            return (
              <>


                <div className="testimony" key={id}>
                  <div className="testimony-box">
                    <img className="testimony-img" src={image} alt="" />
                    <p className="testimony-text">
                      {text}
                    </p>
                    <span className="testimony-span">{name}</span><br />
                    <span className="testimony-span">{Role}</span>
                  </div>
                </div>

              </>



            )

          })}

        </div>


        {/* <div className="testimony-box">
            <img className="testimony-img" src={Person} alt="" />
            <p className="testimony-text">
              Lorem ipsum dolor sit amet consectetur. Viverra donec accumsan velit
              nulla sed sed pellentesque feugiat commodo.
            </p>
            <span className="testimony-span">John Doe</span><br />
            <span className="testimony-span">Freelance</span>
          </div>
          <div className="testimony-box">
            <img className="testimony-img" src={Person} alt="" />
            <p className="testimony-text">
              Lorem ipsum dolor sit amet consectetur. Viverra donec accumsan velit
              nulla sed sed pellentesque feugiat commodo.
            </p>
            <span className="testimony-span">John Doe</span><br />
            <span className="testimony-span">Freelance</span>
          </div></div> */}

      </div>
    </div >
  );
};

export default testimonial;
