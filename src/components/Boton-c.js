import { useState } from "react";
import Clima from "./Clima";
import './Boton-c.css';

export default function BotonClima () {

    const [mostrar, setMostrar] = useState(false);

    return (
        <>
            <button onClick={() =>setMostrar(!mostrar)}>
            Clima en Tokio, Japón
            </button>
            {mostrar &&
            <Clima />
            }
        </>
    )
}