import './Gallery.css';

export default function Gallery () {
    return(
        <div className='galeria-paisajes'>
            <div className='paisajes'>
                <h3 className='titulo-h3'>Castillo de Osaka</h3>
                <img src={require('./images/toma1.jpg')} alt="Castillo-Osaka"/>
            </div>
            <div className='paisajes'>
            <h3 className='titulo-h3'>Mercado de Kuromon</h3>
                <img src={require('./images/toma2.jpg')} alt="Mercado-Kuromon"/>
            </div>
            <div className='paisajes'>
            <h3 className='titulo-h3'>Barrio de Doton-bori</h3>
                <img src={require('./images/toma9.jpg')} alt="Barrio-Doton"/>
            </div>
            <div className='paisajes'>
            <h3 className='titulo-h3'>Templo Kiyomizu-dera</h3>               
                <img src={require('./images/toma3.jpg')} alt="Templo-kiyomizu"/>
            </div>
            <div className='paisajes'>
            <h3 className='titulo-h3'>Zona de Arashiyama</h3>
                <img src={require('./images/toma6.jpg')} alt="Arashimaya"/>
            </div>
            <div className='paisajes'>
            <h3 className='titulo-h3'>Templo de Todai-ji</h3>
            <img src={require('./images/toma10.jpg')} alt="Buda"/>
            </div>


            

        </div>
    )

    
}