// Import img
import people from "../../../../../public/mock-imges/testimonial.png"
import testamonial from "../../../../../public/mock-imges/testimonial2.png"
import testamonial2 from "../../../../../public/mock-imges/icons/testimonial.svg"
import testamonial3 from "../../../../../public/mock-imges/icons/testimonial2.svg"
import testamonial4 from "../../../../../public/mock-imges/icons/testimonial3.svg"
import left from "../../../../../public/mock-imges/icons/left.svg"
import right from "../../../../../public/mock-imges/icons/right.svg"
export const Testimonial = () => {
  return (
    <>
      <div className="flex gap-[110px] items-center my-[120px]">
        <div className="w-[45%] flex items-center justify-center relative">
          <img src={people} className="z-10" />
          <img src={testamonial} className="absolute -left-14 top-[35%]" />
          <img src={testamonial2} className="absolute z-20 right-[13%] top-[11%]" />
          <img src={testamonial3} className="absolute z-20 left-[20%] top-[63%]" />
          <img src={testamonial4} className="absolute z-20 left-[25%] top-[80%]" />
        </div>
        <div className="w-[50%]">
          <h4 className="text-color3-1 text-base font-bold leading-6">Skylar George</h4>
          <span className="text-color3-1 text-sm leading-6 mt-1">Managing Director, Lovgency Company</span>
          <p className="text-color3-1 text-xl font-bold leading-7 mt-[19px] mb-[34px] pr-[110px]">“You'll want to use a format that's viewable for your potential leads and aligns closely with their values. To give you an idea of how testimonials can be portrayed, below are the different testimonial types that you can use to show off your customers' stories”</p>
          <div className="flex gap-[30px] items-center">
            <div className="py-[13px] px-[27px] rounded bg-white-3 cursor-pointer">
              <img src={right} alt="left" />
            </div>
            <div className="py-[13px] px-[27px] rounded bg-blue-default cursor-pointer">
              <img src={left} alt="" />
            </div>
          </div>
        </div>

      </div>
    </>
  )
};
