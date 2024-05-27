import logo from "../../assets/logo.png"
import "./footer.css"

function Footer (){
    return(
        <div className="footer-component">
            <div className="footer-logo">
                <img src={logo} alt="consultant nord"></img>
            </div>
        </div>
    )
}
export default Footer