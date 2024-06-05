import prestation from "../../Data/prestation.json"
import {useParams } from "react-router-dom";
import Erreur from "../Erreur/erreur"
import "./categorie.css"
function Categorie (){
    const { id } = useParams();
const product = prestation.find((item) => item.id === id)
if (product === undefined){
return(< Erreur />)
}
return(
    <div className="categorie-contenant">
            <div className="categorie-titre"><h2>{product.titre}</h2></div>
            <div className="categorie-elmt">
                <div className="categorie-img"><img src={product.image} alt="ubu conseils" /></div>
            <div className="categorie-list">
            <li>{product.details[0]}</li>
            <li>{product.details[1]}</li>
            <li>{product.details[2]}</li>
            <li>{product.details[3]}</li>
            <li>{product.details[4]}</li>
            <li>{product.details[5]}</li>
            <li>{product.details[6]}</li>
            <li>{product.details[7]}</li>
            <li>{product.details[8]}</li>
            <li>{product.details[9]}</li>
            <li>{product.details[10]}</li>            
            </div>
            </div>
            
        </div>
)
}

export default Categorie