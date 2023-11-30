// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/pagination';

// Import img
import pwcImg from "../../../../../public/mock-imges/PWC.png"
import targetImg from "../../../../../public/mock-imges/target.png"
import zoomImg from "../../../../../public/mock-imges/zoom.png"
import dropboxImg from "../../../../../public/mock-imges/dropbox.png"
import paypalImg from "../../../../../public/mock-imges/paypal.png"

export const Trusted = () => {
  return (
    <>
      <div className="">
        <h2 className="text-[26px] text-color3-1 font-bold text-center">Trusted By</h2>
        <p className="text-base text-color3-default text-center pt-5 pb-[46px]">The private on-line marketplace where you are able to exchange goods and services, cash-free, in one place, 24/7, with a <br /> select group of individuals, organizations, and businesses that you know and trust.</p>
        <div>
          <Swiper
            spaceBetween={50}
            slidesPerView={5}
            modules={[Pagination]}

            pagination={{ clickable: true }}

          >
            <SwiperSlide><img src={pwcImg} className="mb-7" /></SwiperSlide>
            <SwiperSlide><img src={targetImg} /></SwiperSlide>
            <SwiperSlide><img src={zoomImg} /></SwiperSlide>
            <SwiperSlide><img src={dropboxImg} /></SwiperSlide>
            <SwiperSlide><img src={paypalImg} /></SwiperSlide>
            <SwiperSlide><img src={pwcImg} /></SwiperSlide>
            <SwiperSlide><img src={targetImg} /></SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  )
};
