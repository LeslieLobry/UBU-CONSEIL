import prestation from "../../Data/prestation.json"
import {useParams } from "react-router-dom";
import Erreur from "../Erreur/erreur"
import "./categorie.css"
function Categorie (){
    
    const { id } = useParams();
const product = prestation.find((item) => item.id === id)
const list = product?.details.map((details, list)=>
    {
     return <li key={list}>{details}</li>
        })

if (product === undefined){
return(< Erreur />)

}
return(
    <div className="categorie-contenant">
            <div className="categorie-titre"><h2>{product.titre}</h2></div>
            <div className="categorie-elmt">
                <div className="categorie-img"><img src={product.image} alt="ubu conseils" /></div>
            <div className="categorie-list">
            {list}
            </div>
            </div>
            
        </div>
)
}

export default Categorie