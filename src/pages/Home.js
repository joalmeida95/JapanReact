import BotonClima from '../components/Boton-c';
import './Home.css';

export default function  Home () {
    return(
        <>
        <div className="cont-home">
            
            <div class="cont-hover">
                <h2>Welcome to</h2>
                <h1>JAPAN</h1>
            </div>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque nisi sit molestias laborum, cumque exercitationem vitae est amet eius ratione aspernatur suscipit repellendus architecto at beatae repellat sunt officiis consequatur?</p>                     
            
            <a href="." className="btn">Explore</a>
            
                       
        </div>
        <BotonClima />   
       </>
    )
}