import { useState, useEffect } from "react";
import './Clima.css';

export default function Clima () {    
    const [cargando, setCargando] = useState(true);
    const [clima, setClima] = useState(false);

     const URL = "https://api.openweathermap.org/data/2.5/weather?lat=35.75573601713158&lon=139.18192379135846&appid=9867ce254a539b90cefbbdf8a7c3c100&units=metric&lang=es";
     
                useEffect(() => {
        fetch(URL).then(respuesta => {
            if (respuesta.ok) {
                respuesta.json().then(clima => {
                    console.log(clima);
                    setClima(clima);
                    setCargando(false);
                });
            } else {
                console.error("Oops, algo fallo", respuesta.statusText);
            }
        });
        
    },[]);

    if (cargando){
        return(
            <p>Cargando...</p>
        )
    }

    return(
        
            <div className="clima-cont">
                <h2>{clima.name}</h2>
                 <p>La temperatura en {clima.name} es de {clima.main.temp}°c y hay {clima.weather[0].description}</p>
            </div>
    )
}