import Form from "../../components/Form/form"
import logo from "../../assets/logo.png"
import "./contact.css"

function Contact (){
    return(
        <div className="contact-contenant">
            <div className="contact-logo-coordonnee">
                <div className="contact-logo"><img src={logo} alt="ubu conseils, herlies" /></div>
            <div className="contact-coordonnee">
                <h2>Sébastien Lobry</h2>
                <p>06.03.18.19.27</p>
                <p>sebastien.lobry@ubuconseils.fr</p>
             </div> 
            </div>
            <Form/> 
        </div>
      
    )
}
export default Contact