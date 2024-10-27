import Reaction from '../assets/images/icon-reaction.svg'
import Memory from '../assets/images/icon-memory.svg'
import Verbal from '../assets/images/icon-verbal.svg'
import Visual from '../assets/images/icon-visual.svg'
function Datos() {
  

    return (
      <>
        <div className="datos">
        <ul>
          <li className="datos-cuadro_rojo"><p><img src={Reaction} alt="reaction" />Reaction</p><span>80 <span className="datos-cuadro_rojo-p"> / 100</span></span></li>
          <li className="datos-cuadro_amarillo"> <p><img src={Memory} alt="reaction" />Memory</p><span>92 <span className="datos-cuadro_amarillo-p"> / 100</span></span></li>
          <li className="datos-cuadro_verde"> <p><img src={Verbal} alt="reaction" />Verbal</p><span>61 <span className="datos-cuadro_verde-p"> / 100</span></span></li>
          <li className="datos-cuadro_azul"><p><img src={Visual} alt="reaction" />Visual</p><span>72 <span className="datos-cuadro_azul-p"> / 100</span></span></li>
        </ul>
        </div>

      </>
    )
  }
  
  export default Datos