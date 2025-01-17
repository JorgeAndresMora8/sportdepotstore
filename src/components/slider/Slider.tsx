import "bootstrap/dist/css/bootstrap.min.css";
import 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js'
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';

interface SliderProps {
  content: any;
  Component: any;
}

const Slider = ({ content, Component }: SliderProps) => {
  return (
    <div className="container py-4 px-4 justify-content-center">
      <Swiper
      
       pagination={{
        dynamicBullets: true,
      }}
      
        freeMode={true}
        grabCursor={true}
        
        modules={[FreeMode, Pagination]}
        className="mySwiper"
        slidesPerView={5}
        loop={true}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        spaceBetween={30}
        
        breakpoints={{
          100: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          465:{ 
            slidesPerView: 2,
            spaceBetween: 20,
          },
          700: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        hashNavigation={true}
      >
        {content.map((value:any, idx:any) => (
          <>
          <SwiperSlide  key={idx} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Component key={idx} {...value}/>
          </SwiperSlide>
          </>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
