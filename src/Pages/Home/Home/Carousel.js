import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import { Autoplay, Pagination, Navigation } from "swiper";

const Carousel = () => {
    return (
      <div className="mb-16">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              className="w-full h-[300px] md:h-[500px]"
              src="https://t4.ftcdn.net/jpg/03/71/92/67/360_F_371926762_MdmDMtJbXt7DoaDrxFP0dp9Nq1tSFCnR.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-[300px] md:h-[500px]"
              src="https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-[300px] md:h-[500px]"
              src="https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-[300px] md:h-[500px]"
              src="https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-[250px] md:h-[500px]"
              src="https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    );
};

export default Carousel;