import prestation from "../../Data/prestation.json"
import {Link} from "react-router-dom"
import "./galerie.css"
function Galerie ()
{
    return(
        <div className="galerie">
            {prestation.map((product)=>{
               return(
                <Link to={`/Categorie/${product.id}`}>
               <div key={product.id} className="galerie-contenant">
                <div className="galerie-title">
                    <h2>{product.titre}</h2>
                </div>
                <div className="galerie-img">
                    <img src={product.image} alt="sécurité incendie Haut-De-France"></img>
                </div>
            </div>
            </Link>
            )
            })}
        </div>
    )
}
export default Galerie