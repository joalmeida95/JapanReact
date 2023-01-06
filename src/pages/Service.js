import './Service.css';

export default function Service () {
    return (
        <div className='service_cont'>
            <div className="cabecera_service">
                <h1>Un servicio de exelencia</h1>
                <h2>Somos un equipo profesionalizado en la cultura Latinoamerica y ofrecemos paquetes turísticos hacia Japόn.</h2>
            </div>   
            
            
            <div className='data_service'>
                <div className='data_contenido'>
                    <img src={require('./images/map_japan.jpg')} alt="mapa_japan" className='mapa-img'/>
                    <h1>¿Por qué nosotros?</h1>
                    <h2>1. Amplio conocimiento</h2>
                    <p>Staff latinos / japoneses con vasta experiencia en la área del turismo en los paises Latinos Americanos y Japόn quienes han viajado todos los destinos que ofrecemos brindando los mejores servicios.
                    Con nosotros su viaje a Japόn estará en buenas manos.</p>
                    
                    <h2>2. Contacto en español 24horas</h2>
                    <p>Lamentablemente en Japόn, todavia no hay muchos lugares p ύblicos donde pueda comunicarse en su idioma nativo.
                    Si tiene algύn problema o pregunta durante su estadia en Japόn, estará respaldado las 24 horas con atenciόn en español.</p>
                    
                    <h2>3. Oficina en Tokyo y Osaka</h2>
                    <p>Contamos con 2 oficinas en las mayores ciudades de Japόn. Oficina principal en Tokyo y sucursal en Osaka por lo cual permite a nuestros clientes sentirse seguros en los destinos más famosos de Japόn; Tokyo, Hakone, Kyoto, Hiroshima etc.</p>
                </div>
            </div>
        </div>
        
    )
}