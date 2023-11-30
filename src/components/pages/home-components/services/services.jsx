import card1Img from "../../../../../public/mock-imges/services.png"
import card2Img from "../../../../../public/mock-imges/services2.png"
import card3Img from "../../../../../public/mock-imges/services3.png"
import { Servic } from "./sevic/Servic";


export const Services = () => {
  return (
    <>
      <div className="mt-[114px] flex flex-col gap-[120px] mb-[120px] px-[70px]">
        <Servic img={card1Img} status={true} />
        <Servic img={card2Img} status={false} />
        <Servic img={card3Img} status={true} />
      </div>
    </>
  )
};
