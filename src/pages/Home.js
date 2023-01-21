import {Link} from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import './Home.css';
import "swiper/css";
import "swiper/css/pagination";

export default function  Home () {
    return(
        <>
        <div className="cont-home">
            
            <div class="cont-hover">
                <h2>Welcome to</h2>
                <h1>JAPAN</h1>
            </div>

            <p>Nosotros TOUR JAPON somos una agencia de viajes especializada en viajeros latinos quienes desean visitar Japόn. Nuestra agencia fue establecida en 1992 y llevamos más de 20 años de rendimiento y experiencia trabajando con agencias de viajes de Latinoamerica.</p>
            
            <div className='boton-home'>
              <button className='btn' onClick={()=> alert ('Welcome to TJapan. Service inaccessible momentarily.')}>
              Explore
              </button>
              <Link className='btn' to="/Login">Login</Link>
            </div>

            <Swiper
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                  <div className='slide1'>
                    <img className='img-slide' src={require('./images/toma6.jpg')} alt="HAKONE"/>
                  </div>
              </SwiperSlide>
              <SwiperSlide>
                  <div className='slide2'>
                    <img className='img-slide' src={require('./images/toma3.jpg')} alt="TAKAYAMA"/>
                  </div>
              </SwiperSlide>
              <SwiperSlide>
                  <div className='slide3'>
                    <img className='img-slide' src={require('./images/toma8.jpg')} alt="SHIRAKAWAGO-KYOTO"/>
                  </div>
              </SwiperSlide>
              <SwiperSlide>
                  <div className='slide4'>
                    <img className='img-slide' src={require('./images/toma9.jpg')} alt="KYOTO"/>
                  </div>
              </SwiperSlide>
              <SwiperSlide>
                  <div className='slide5'>
                    <img className='img-slide' src={require('./images/toma10.jpg')} alt="NARA-KYOTO"/>
                  </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='slide6'>
                    <img className='img-slide' src={require('./images/toma2.jpg')} alt="OSAKA"/>
                  </div>
              </SwiperSlide>
              <SwiperSlide>
                  <div className='slide7'>
                    <img className='img-slide' src={require('./images/toma1.jpg')} alt="ARASHIMASHA"/>
                  </div>
              </SwiperSlide>
            </Swiper>
            
                       
        </div>
        
       </>
    )
}