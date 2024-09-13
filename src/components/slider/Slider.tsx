import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/free-mode";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../card/Card";

const ProductSlider = () => {
  return (
    <div className="container py-4 px-4 justify-content-center">
      <Swiper
        freeMode={true}
        grabCursor={true}
        className="mySwiper"
        slidesPerView={5}
        spaceBetween={30}
        breakpoints={{
            100: { 
                slidesPerView: 1,
                spaceBetween: 20,

              },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
        hashNavigation={true}
      >
        <SwiperSlide>
          <Link to='/'> <Card /></Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to='/'> <Card /></Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to='/'> <Card /></Link>
        </SwiperSlide>


        <SwiperSlide>
          <Link to='/'> <Card /></Link>
        </SwiperSlide>


        <SwiperSlide>
          <Link to='/'> <Card /></Link>
        </SwiperSlide>


        <SwiperSlide>
          <Link to='/'> <Card /></Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to='/'> <Card /></Link>
        </SwiperSlide>

        {/* 
            <SwiperSlide>
                <h1>Slider 2</h1>
            </SwiperSlide>

            <SwiperSlide>
                <h1>Slider 3</h1>
            </SwiperSlide>

            <SwiperSlide>
                <h1>Slider 4</h1>
            </SwiperSlide>

            <SwiperSlide>
                <h1>Slider 1</h1>
            </SwiperSlide>

            <SwiperSlide>
                <h1>Slider 2</h1>
            </SwiperSlide>

            <SwiperSlide>
                <h1>Slider 3</h1>
            </SwiperSlide>

            <SwiperSlide>
                <h1>Slider 4</h1>
            </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
