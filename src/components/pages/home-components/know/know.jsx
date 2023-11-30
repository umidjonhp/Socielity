import img1 from "../../../../../public/mock-imges/know1.png"
import img2 from "../../../../../public/mock-imges/know2.png"
import { Card } from "./card/Card";
export const Know = () => {
  return (
    <>
      <div className="px-[135px] flex flex-col justify-center">
        <h2 className="text-[26px] text-color3-1 font-bold text-center">They love us! Do you know why?</h2>
        <p className="text-base text-color3-default text-center pt-6 pb-[59px] ">The following videos are currently in production.  In the meantime, please use our Help Center.</p>
        <div className="flex items-center gap-[29px] mb-[120px]">
          <Card img={img1} title1={"What is"} title2={"Sociality?"} />
          <Card img={img2} title1={"Customer"} title2={"Testimonials"} />
        </div>
        <h2 className="text-[26px] text-color3-1 font-bold text-center">Frequently Asked Questions</h2>
        <p className="text-base text-color3-default text-center pt-6 pb-[60px] ">In order to acquire the goods and services that will satisfy the various needs that you have in your life, you have six concentric <br /> circles or realms to explore.  Beginning in the center and radiating outwards, these realms are: </p>
      </div>
    </>
  )
};
