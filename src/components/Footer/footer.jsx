import logo from "../../assets/logo.png"
import link from "../../assets/link.png"
import "./footer.css"
import Callme from "../Callme/callme"
import {Link} from "react-router-dom"

function Footer (){
    return(
        <div className="footer-component">
            <div className="footer-logo">
                <img src={logo} alt="consultant nord"></img>
            </div>
            <div className="footer-elmt">
                 <div className="footer-link">
                <a href="https://www.linkedin.com/in/s%C3%A9bastien-lobry-795517a5/"><img src={link} alt="liens linkedin sebastien Lobry" /></a>
                </div>
                <div className="footer-mentions">Mentions légales</div>
                <button className="footer-contact"><Link to={`/Contact`}>CONTACT</Link></button>
            </div>
            <Callme/>
        </div>
    )
}
export default Footer