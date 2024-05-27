import "./nav.css"
import { useState } from "react"
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom"

function Nav (){
    const [showLinks, setShowLinks] = useState(false)

    const handleShowLinks = ()=>{
        setShowLinks(!showLinks)
    }
    return(
        <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
            <Link to="/" className="navbar__logo"><img src={logo} alt="laulie web"></img></Link>
        <ul className="navbar__links">
            <li className="nav__items1">
            <Link to="/" className="navbar__link"onClick={handleShowLinks}>Accueil</Link>
            </li>
            <li className="nav__items2">
            <Link to="/Portfolio" className="navbar__link"onClick={handleShowLinks}>Partenaire</Link>
            </li>
            <Link to="/" className="navbar__logo2"><img src={logo} alt="laulie web"></img></Link>
            <li className="nav__items3">
            <Link to="/Services" className="navbar__link"onClick={handleShowLinks}>Services</Link>
            </li>
            <li className="nav__items4">
            <Link to="/Contact" className="navbar__link"onClick={handleShowLinks}>Contact</Link>
            </li>
        </ul>
        <button className="navbar__burger"onClick={handleShowLinks}>
            <span className="burger-bar"></span>
        </button>
    </nav>
    )
}
export default Nav