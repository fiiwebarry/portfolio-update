import { contactData } from "../DataPage/DataPage";
import icon from "/src/Assets/Icons/Arrow 1 (1).png";
import "./Contact.css";

const Contact = () => {

    return (<>
        <div className="container">  <button>Get in touch</button>
            <p>Contact me</p>


            <div>
                <div>
                    <p>Talk to me</p>

                </div>

                <div className="contact-tab">
                    {contactData.map((contact) => {

                        const { id, image, title, detail } = contact;

                        return (
                            <>
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

                                </div></>

                        )

                    })}

                    <div>

                        <label htmlFor=""> hhhhhhhhhhhhhhhh</label>
                        <input type="text" />

                        <label htmlFor=""> hhhhhhhhhhhhhhhh</label>
                        <input type="text" />
                    </div>
                </div>




            </div></div>


    </>
    )

}

export default Contact;