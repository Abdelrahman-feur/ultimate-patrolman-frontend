"use client";
import React from "react";
// Import Swiper React components
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import Swiper styles
import "swiper/css/bundle";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import styles from "./slider.module.scss";

import Img1 from "./img1";
import Img2 from "./img2";
import Img3 from "./img3";
import Img4 from "./img4";

const Slider = () => {
  return (
    <div className="ml-20 mr-20 mt-14 ">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        className="mb-20 min-h-screen max-w-full  "
        pagination={{ clickable: true }}
        allowSlideNext={true}
        // autoplay={{ delay: 3000 }}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
        <SwiperSlide className=" max-w-full">
          {" "}
          <Img1 />
        </SwiperSlide>
        <SwiperSlide className=" max-w-full ">
          <Img2 />
        </SwiperSlide>
        <SwiperSlide>
          <Img3 />
        </SwiperSlide>
        <SwiperSlide>
          <Img4 />
        </SwiperSlide>
        <span className="  swiper-button-next"></span>
        <span className=" text-white swiper-button-prev"></span>
      </Swiper>
    </div>
  );
};

export default Slider;
