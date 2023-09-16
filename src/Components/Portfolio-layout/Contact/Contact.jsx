import { contactData } from "../DataPage/DataPage";
import icon from "/src/Assets/Icons/Arrow 1 (1).png";
import { SiMailchimp } from "react-icons/si";
import "./Contact.css";

const Contact = () => {

    return (
        <section id="contact" className="contact-Me">
            <div className="contact-tab-tab">
                <div className="container">
                    <button className="contact-btn">Get in touch<SiMailchimp /></button>
                    <div className="contact-text"><p>Contact me</p>

                    </div>



                    <div className="flex-tab">

                        <div className="contact-tab">
                            <p className="talk-tab">Talk to me</p>
                            {contactData.map((contact) => {

                                const { id, image, title, detail } = contact;

                                return (

                                    <div className="contactMe-tab" key={id}>
                                        <div>
                                            <img className="flex-tab-tab" src={image} />
                                            <p className="flex-tab-tab title-tab">{title}</p>
                                        </div>
                                        <p className="details-tab">{detail}</p>

                                        <div className="flex">
                                            <p>Write Me</p>
                                            <img src={icon} />
                                        </div>

                                    </div>




                                )

                            })}

                        </div>




                        <form htmlFor="" onSubmit>
                            <p>Write me a Mail</p>
                            <label htmlFor="" >  Name</label><br />
                            <input type="text" className="" placeholder="insert your Name" /><br />

                            <label htmlFor="">Mail</label><br />
                            <input type="text" placeholder="insert your Mail" /><br />

                            <label htmlFor="">Message</label><br />
                            <textarea placeholder="insert your Mail" ></textarea><br />
                            <button className="submit-btn" type="submit">Send Message
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                    <path d="M23.9256 1.10643C23.6665 0.849188 23.3415 0.66835 22.9864 0.583787C22.6312 0.499224 22.2596 0.51421 21.9124 0.627098L1.8764 7.31033C1.50481 7.42807 1.17645 7.6533 0.932785 7.95755C0.689124 8.26181 0.541092 8.63145 0.507387 9.01979C0.473683 9.40812 0.555816 9.79774 0.743415 10.1394C0.931014 10.4811 1.21566 10.7595 1.56141 10.9395L9.87436 15.0481L13.9829 23.3884C14.148 23.7149 14.4007 23.989 14.7127 24.18C15.0247 24.3711 15.3837 24.4716 15.7496 24.4703H15.8865C16.2783 24.4415 16.6524 24.2955 16.9601 24.0512C17.2679 23.807 17.495 23.4759 17.6121 23.1008L24.3912 3.11961C24.5123 2.7744 24.5328 2.40191 24.4503 2.0455C24.3679 1.68909 24.1859 1.36343 23.9256 1.10643ZM2.7255 9.20026L20.2142 3.36613L10.5043 13.076L2.7255 9.20026ZM15.8454 22.3065L11.956 14.5277L21.6659 4.81781L15.8454 22.3065Z" fill="white" />
                                </svg>
                            </button>
                        </form>





                    </div>
                </div ></div>

        </section>
    )
}

export default Contact;