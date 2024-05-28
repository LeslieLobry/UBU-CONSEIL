import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../Form/form.css"

export const App = () => {
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
return (
    <form ref={form} className="form1" onSubmit={sendEmail}>
    <label className="label">Name</label>
    <input type="text" name="user_name" className="input1"required />
    <label className="label">Email</label>
    <input type="email" name="user_email" className="input1"required />
    <label className="label">Téléphone</label>
    <input type="text" name="user_tel" className="input1"required />
    <label className="label">Adresse</label>
    <input type="text" name="user_tel" className="input1"required />
    <label className="label">Message</label>
    <textarea name="message" required className="input2"/>
    <input type="submit" value="Envoyer" className="input3" />
    </form>
);
};

export default App;