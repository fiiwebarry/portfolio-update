import "./MobileNavbar.css"
import { GiBee } from 'react-icons/gi';
import { AiFillCloseCircle } from "react-icons/ai"

const MobileNavbar = ({ SetIsOpen }) => {

    return (

        <aside >
            <div className="react-icon-tab">
                <h1 className="icon-tabbs"><GiBee /></h1>
                <button onClick={() => SetIsOpen(false)} className="icons-tabbs2"><AiFillCloseCircle /></button>
            </div>

            <ul className="list-tab">
                <li><a href="#About">About</a></li>
                <li><a href="#project">Project</a></li>
                <li><a href="#testimonial">Testimonial</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>



        </aside>

    )
}
export default MobileNavbar