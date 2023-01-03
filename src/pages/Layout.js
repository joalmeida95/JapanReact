import { Outlet } from "react-router-dom"

import Navegacion from "../components/Navegacion"
import Footer from "../components/Footer"
import './Layout.css';

export default function Layout () {
    return (
        <>
            <div className="contenedor">
                <Navegacion />
                {
                
                }

                <Outlet />
                
            </div>
            <Footer/>

            
        </>
    )
}