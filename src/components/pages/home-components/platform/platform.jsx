import { Slider } from "./slider/Slider";

export const Platform = () => {
  return (
    <>
      <div className="my-[120px]">
        <h2 className="text-[26px] text-color3-1 font-bold text-center">Award Winning Engagement Platform</h2>
        <p className="text-base text-color3-default text-center pt-5 pb-[46px]">the private on-line marketplace where you are able to exchange goods and services, cash-free, in one place, 24/7, with a <br /> select group of individuals, organizations, and businesses that you know and trust.</p>
        <div className="px-2">
          <Slider />
        </div>

      </div>
    </>
  )
};
