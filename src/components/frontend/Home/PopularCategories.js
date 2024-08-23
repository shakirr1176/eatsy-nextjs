"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../../../app/globals.css"; // Ensure global styles are correctly applied
import { Navigation } from "swiper/modules";

export default function PopularCategories() {
  return (
    <div className="py-20">
      <div className="container text-center">
        <h2 className="text-slate-800 font-36 font-medium mb-3">
          Popular Categories
        </h2>
        <p className="font-20 text-slate-600 font-light mb-7">
          Cum doctus civibus efficiantur in imperdiet deterruisset
        </p>

        <div className="mt-4">
          <Swiper
            navigation
            modules={[Navigation]}
            slidesPerView={"auto"}
            spaceBetween={16}
            className="mySwiper"
          >
            <SwiperSlide className="w-1/3 lg:w-1/5 aspect-[80/100] rounded-md bg-gray-200"></SwiperSlide>
            <SwiperSlide className="w-1/3 lg:w-1/5 aspect-[80/100] rounded-md bg-gray-200"></SwiperSlide>
            <SwiperSlide className="w-1/3 lg:w-1/5 aspect-[80/100] rounded-md bg-gray-200"></SwiperSlide>
            <SwiperSlide className="w-1/3 lg:w-1/5 aspect-[80/100] rounded-md bg-gray-200"></SwiperSlide>
            <SwiperSlide className="w-1/3 lg:w-1/5 aspect-[80/100] rounded-md bg-gray-200"></SwiperSlide>
            <SwiperSlide className="w-1/3 lg:w-1/5 aspect-[80/100] rounded-md bg-gray-200"></SwiperSlide>
            <SwiperSlide className="w-1/3 lg:w-1/5 aspect-[80/100] rounded-md bg-gray-200"></SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
