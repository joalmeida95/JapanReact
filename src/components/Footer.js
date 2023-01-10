import './Footer.css';
import BotonClima from './Boton-c';

export default function Footer () {
    return(
        <div className="footer">
            <div className='btn-clima'>
                <BotonClima />  
            </div> 
            <p>TJapan © 2023

Todos los derechos reservados</p>
        </div>
    )
}