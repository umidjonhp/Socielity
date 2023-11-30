import React from 'react'

export const Card = ({ img, title, info }) => {
    return (
        <div className="bg-white-default rounded-lg pt-[31px] pb-[20px]pl-[11px] pr-[23px] flex flex-col items-center">
            <span className="h-[60px] ">
                <img src={img} className="w-[100%] h-[100%]" />
            </span>
            <h3 className="text-color3-1 text-xl font-bold leading-7 py-3">{title}</h3>
            <p className="text-color3-default text-base leading-6 text-center">{info}</p>
        </div>
    )
}
