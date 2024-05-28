import "./presentation.css"
import Lobryseb from "../../assets/Lobryseb.jpg"

function Presentation (){
    return(
        <div className="presentation-contenant">
            <div className="presentation-photo">
                <img src={Lobryseb} alt="sébastien lobry, herlies" />
            </div>
            <div className="presentation-texte">
                <p>Après 28 ans passés en tant que salariés dans un bureau de contrôle, il était temps pour nous de créer notre propre entreprise.

Notre volonté, soutenue par une solide expérience professionnelle, est d’être à l’écoute de nos clients partenaires et de les accompagner dans la recherche de solutions adaptées et optimisées.

Nous vous proposons une gamme de services destinés à la maîtrise d’ouvrage, incluant l’évaluation des risques professionnels liés aux bâtiments et l’accompagnement concernant vos obligations réglementaires.

Nous offrons également une assistance technique pour la gestion du risque amiante et des équipements de travail tels que les EPI et les appareils de levage.

Nous pouvons vous aider à améliorer la qualité de l’air intérieur en réalisant une auto-évaluation de votre établissement.

Enfin, nous sommes en mesure de réaliser votre document unique d’évaluation des risques.

Basés en banlieue lilloise, nous intervenons dans l’ensemble des Hauts-de-France ainsi que sur le plan national.</p>
            </div>
        </div>
    )
}
export default Presentation