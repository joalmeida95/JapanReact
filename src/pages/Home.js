import {Link} from 'react-router-dom';
import './Home.css';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

export default function  Home () {
    return(
        <>
        <div className="cont-home">
            
            <div class="cont-hover">
                <h2>Welcome to</h2>
                <h1>JAPAN</h1>
            </div>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque nisi sit molestias laborum, cumque exercitationem vitae est amet eius ratione aspernatur suscipit repellendus architecto at beatae repellat sunt officiis consequatur?</p>                     
            
            {/* <a href="./Gallery" className="btn">Explore</a> */}
            <Link className='btn' to="/Service">Explore</Link>

            <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='slide1'>
              <img src={require('./images/toma6.jpg')} alt="Arashimaya"/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='slide2'>
              <img src={require('./images/toma7.jpg')} alt="Arashimaya"/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='slide3'>
              <img src={require('./images/toma8.jpg')} alt="Arashimaya"/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='slide4'>
              <img src={require('./images/toma9.jpg')} alt="Arashimaya"/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='slide5'>
              <img src={require('./images/toma10.jpg')} alt="Arashimaya"/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='slide6'>
              <img src={require('./images/toma2.jpg')} alt="Arashimaya"/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='slide7'>
              <img src={require('./images/toma1.jpg')} alt="Arashimaya"/>
            </div>
            </SwiperSlide>
        {/* <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
            
                       
        </div>
        
       </>
    )
}