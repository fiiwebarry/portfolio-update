import "./MobileNavbar.css"
import { GiBee } from 'react-icons/gi';

const MobileNavbar = () => {

    return (

        <aside>
            <h1 className=" "><GiBee /></h1>
            <ul className="">
                <li><a href="#About">About</a></li>
                <li><a href="#project">Project</a></li>
                <li><a href="#testimonial">Testimonial</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>



        </aside>

    )
}
export default MobileNavbar