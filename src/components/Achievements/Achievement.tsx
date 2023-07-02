// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
// import { EffectCoverflow, Pagination } from "swiper";

import img1 from '../../assets/gallery/1.jpg'
import img2 from '../../assets/gallery/2.jpeg'
import img3 from '../../assets/gallery/3.jpeg'
import img4 from '../../assets/gallery/4.jpeg'
import img5 from '../../assets/gallery/5.jpeg'
import img6 from '../../assets/gallery/6.jpeg'
import img7 from '../../assets/gallery/7.jpeg'
import img8 from '../../assets/gallery/8.jpeg'
import img9 from '../../assets/gallery/9.jpeg'
import img10 from '../../assets/gallery/10.jpeg'
import './Achievement.css'

const Achievement = () => {
  return (
    <>
      <header data-aos="slide-up" id="achievements" className="header" >
        <h2>Achievements</h2>
      </header>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        loop={true}
        pagination={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img7} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img8} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img9} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img10} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Achievement