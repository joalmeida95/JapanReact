import { useState } from "react";
import Clima from "./Clima";

export default function BotonClima () {

    const [mostrar, setMostrar] = useState(false);

    return (
        <>
            <button onClick={() =>setMostrar(!mostrar)}>
                Clima
            </button>
            {mostrar &&
            <Clima />
            }
        </>
    )
}