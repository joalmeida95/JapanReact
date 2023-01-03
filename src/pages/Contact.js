export default function Contact () {
    return (
        <div className="formulario">
            <h1>Contactenos</h1>
           
            <form>
                <h2>Complete el formulario</h2>
                <p>Cualquier consulta sobre su viaje a Japón no dude en contactarnos.
                Tenemos programas a su medida, itinerarios especiales,
                cualquier atractivo de su interés puede comunicarnos y le responderemos con mucho gusto.</p>

                <h3>Nombre:</h3>
                <input type="text" placeholder="Ingrese nombre" />
                <h3>Apellido:</h3>
                <input type="text" placeholder="Ingrese apellido" />
                <h3>Pais de residencia:</h3>
                <input type="text" placeholder="Pais de residencia" />
                <h3>Correo Electronico:</h3>
                <input type="email" placeholder="Ingrese Email" />
                <h3>Telefono de contacto:</h3>
                <input type="number" placeholder="Ingrese numero" />
                <br/>
                <button>Enviar</button>


                
            </form>
        </div>
    )
}