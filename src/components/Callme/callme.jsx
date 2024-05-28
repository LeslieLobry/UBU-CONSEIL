import "../Callme/callme.css"
import { useState } from "react"
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
function Callme (){
    const [open, close] = useState(false)
    const form = useRef();
const sendEmail = (e) => {
e.preventDefault();
    emailjs.sendForm("service_6rnhgf6", "template_toler5l", form.current, "d8GpT9Ww7m77rDg3g").then(
    (result) => {
        console.log(result.text);
        alert("Nous traitons votre demande au plus vite ")
    },
    (error) => {
        console.log(error.text);
        alert("une erreur est survenu")
    }
    );  
    
};
    return(
        <button className="callme-contenant">
            <div className="callme-emoticone"onClick={()=>close(!open)}>
                <span> ☎️</span>
                <div className="title">Me rappeler</div>
            </div>
                {open && <div className="callme-cache">
                <form ref={form} className="form" onSubmit={sendEmail}>
                <input type="text" name="user_tel" className="call-me-input"required />
                <input type="submit" value="Envoyer" className="call-me-envoyer" />
                </form></div>  
                 }
        </button>
    )
}
export default Callme