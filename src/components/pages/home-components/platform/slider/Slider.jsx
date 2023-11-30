// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/pagination';

// Import img
import cardImg1 from "../../../../../../public/mock-imges/gold.png"
import cardImg2 from "../../../../../../public/mock-imges/crowd.png"
import cardImg3 from "../../../../../../public/mock-imges/market.png"
import cardImg4 from "../../../../../../public/mock-imges/marketComm.png"
import cardImg5 from "../../../../../../public/mock-imges/rewardGateway.png"
import cardImg6 from "../../../../../../public/mock-imges/gold.png"
import cardImg7 from "../../../../../../public/mock-imges/apps126.png"
export const Slider = () => {
    return (
        <div>
            <Swiper
                spaceBetween={14}
                slidesPerView={7}
                modules={[Pagination]}

                pagination={{ clickable: true }}

            >
                <SwiperSlide>
                    <div className="shadow-lg  h-[239px] rounded-2xl pt-[13px] px-1 pb-[20px] flex flex-col items-center mb-[45px] cursor-pointer">
                        <img src={cardImg1} className="h-[107px]" />
                        <h3 className="text-blue-default text-[20px] font-bold leading-7 py-[9px]">Award 2021 </h3>
                        <p className="text-color3-default text-sm leading-[14px] text-center">Winning Engagement Platform that you know and trust</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="shadow-lg   w-[170px] h-[239px] rounded-2xl pt-[13px] px-1 pb-[20px] flex flex-col items-center cursor-pointer">
                        <img src={cardImg2} className="mt-[17px] mb-[15px]" />
                        <h3 className="text-blue-default text-[20px] font-bold leading-7 py-[9px]">Award 2021 </h3>
                        <p className="text-color3-default text-sm leading-[14px] text-center">Winning Engagement Platform that you know and trust</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="shadow-lg   w-[170px] h-[239px] rounded-2xl pt-[13px] px-1 pb-[20px] flex flex-col items-center cursor-pointer">
                        <img src={cardImg3} className="h-[107px]" />
                        <h3 className="text-blue-default text-[20px] font-bold leading-7 py-[9px]">Award 2012 </h3>
                        <p className="text-color3-default text-sm leading-[14px] text-center">Winning Engagement Platform that you know and trust</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="shadow-lg   w-[170px] h-[239px] rounded-2xl pt-[13px] px-1 pb-[20px] flex flex-col items-center cursor-pointer">
                        <img src={cardImg4} className="h-[107px]" />
                        <h3 className="text-blue-default text-[20px] font-bold leading-7 py-[9px]">Award 2013 </h3>
                        <p className="text-color3-default text-sm leading-[14px] text-center">Winning Engagement Platform that you know and trust</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="shadow-lg  w-[170px] h-[239px] rounded-2xl pt-[13px] px-1 pb-[20px] flex flex-col items-center cursor-pointer">
                        <img src={cardImg5} className="h-[107px]" />
                        <h3 className="text-blue-default text-[20px] font-bold leading-7 py-[9px]">Award 2014 </h3>
                        <p className="text-color3-default text-sm leading-[14px] text-center">Winning Engagement Platform that you know and trust</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="shadow-lg   w-[170px] h-[239px] rounded-2xl pt-[13px] px-1 pb-[20px] flex flex-col items-center cursor-pointer">
                        <img src={cardImg6} className="h-[107px]" />
                        <h3 className="text-blue-default text-[20px] font-bold leading-7 py-[9px]">Award 2020 </h3>
                        <p className="text-color3-default text-sm leading-[14px] text-center">Winning Engagement Platform that you know and trust</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="shadow-lg   w-[170px] h-[239px] rounded-2xl pt-[13px] px-1 pb-[20px] flex flex-col items-center cursor-pointer">
                        <img src={cardImg7} className="h-[107px]" />
                        <h3 className="text-blue-default text-[20px] font-bold leading-7 py-[9px]">Award 2015 </h3>
                        <p className="text-color3-default text-sm leading-[14px] text-center">Winning Engagement Platform that you know and trust</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="shadow-lg  h-[239px] rounded-2xl pt-[13px] px-1 pb-[20px] flex flex-col items-center mb-[45px] cursor-pointer">
                        <img src={cardImg1} className="h-[107px]" />
                        <h3 className="text-blue-default text-[20px] font-bold leading-7 py-[9px]">Award 2021 </h3>
                        <p className="text-color3-default text-sm leading-[14px] text-center">Winning Engagement Platform that you know and trust</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="shadow-lg   w-[170px] h-[239px] rounded-2xl pt-[13px] px-1 pb-[20px] flex flex-col items-center cursor-pointer">
                        <img src={cardImg3} className="h-[107px]" />
                        <h3 className="text-blue-default text-[20px] font-bold leading-7 py-[9px]">Award 2021 </h3>
                        <p className="text-color3-default text-sm leading-[14px] text-center">Winning Engagement Platform that you know and trust</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
