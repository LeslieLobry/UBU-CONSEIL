import "./presentation.css"
import seb from "../../assets/seb.png"
// import baniere from "../../assets/baniere.png"

function Presentation (){
    return(
        <div className="presentation">
            <h1 className="presentation-title">UBU CONSEILS</h1>
        <div className="presentation-contenant">
            <div className="presentation-photo">
                <img src={seb} alt="sébastien lobry, herlies" />
            </div>
            <div className="presentation-texte">
                <p className="1">Après 28 ans passés en tant que salariés dans un bureau de contrôle, il était temps pour nous de créer notre propre entreprise.
Notre volonté, soutenue par une solide expérience professionnelle, est d’être à l’écoute de nos clients partenaires et de les accompagner dans la recherche de solutions adaptées et optimisées.</p>
<p className="2">Nous vous proposons une gamme de services destinés à la maîtrise d’ouvrage, incluant l’évaluation des risques professionnels liés aux bâtiments et l’accompagnement concernant vos obligations réglementaires.
Nous offrons également une assistance technique pour la gestion du risque amiante et des équipements de travail tels que les EPI et les appareils de levage.</p>
<p className="3">Nous pouvons vous aider à améliorer la qualité de l’air intérieur en réalisant une auto-évaluation de votre établissement.
Enfin, nous sommes en mesure de réaliser votre document unique d’évaluation des risques.
Basés en banlieue lilloise, nous intervenons dans l’ensemble des Hauts-de-France ainsi que sur le plan national.</p>
            </div>
            </div>
            </div>
    )
}
export default Presentation