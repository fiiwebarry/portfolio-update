import { contactData } from "../DataPage/DataPage";
import icon from "/src/Assets/Icons/Arrow 1 (1).png";
import "./Contact.css";

const Contact = () => {

    return (
        <section className="contact-Me">
            <div className="contact-tab-tab">
                <div className="container">
                    <button className="contact-btn">Get in touch</button>
                    <div className="contact-text"><p>Contact me</p>

                    </div>



                    <div className="flex-tab">

                        <div className="contact-tab">
                            <p>Talk to me</p>
                            {contactData.map((contact) => {

                                const { id, image, title, detail } = contact;

                                return (

                                    <div className="contactMe-tab" key={id}>
                                        <div>
                                            <img src={image} />
                                            <p>{title}</p>
                                        </div>
                                        <p>{detail}</p>

                                        <div>
                                            <p>Write Me</p>
                                            <img src={icon} />
                                        </div>

                                    </div>




                                )

                            })}

                        </div>




                        <form htmlFor="">
                            <p>Write me a Mail</p>
                            <label htmlFor="" >  Name</label><br />
                            <input type="text" className="" placeholder="insert your Name" /><br />

                            <label htmlFor="">Mail</label><br />
                            <input type="text" placeholder="insert your Mail" /><br />

                            <label htmlFor="">Message</label><br />
                            <textarea placeholder="insert your Mail" ></textarea><br />
                            <button></button>
                        </form>





                    </div>
                </div ></div>

        </section>
    )
}

export default Contact;