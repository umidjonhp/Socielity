import React from 'react'
import play from "../../../../../../public/mock-imges/icons/play.svg"
import fon from "../../../../../../public/mock-imges/fon.svg"

export const Card = ({img, title1, title2}) => {
  return (
    <div className="w-[570px] h-[350px] rounded-[30px] overflow-hidden">
        <div  className="w-[100%] h-[100%] relative ">
            <img src={img} alt="img" className="w-[100%] h-[100%]"/>
            <img src={fon} alt="play" className=" absolute top-0 -left-[45px] "/>
            <div className="absolute z-10 top-[115px] right-[225px] w-[120px] h-[120px] rounded-[50%] bg-white-3 opacity-80 flex items-center justify-center"></div>
            <img src={play} alt="" className="absolute z-10 top-[148px] right-[255px]" />
            <span className="absolute z-10 left-[28px] bottom-[64px] text-[#fff] text-[26px] leading-9 font-bold">{title1} <br /> {title2}</span>
            <span className="absolute z-10 left-[28px] bottom-[23px] text-[#fff] text-[26px] leading-9 font-bold ">Sociality</span>
        </div>
    </div>
  )
}
