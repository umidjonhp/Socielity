import { Button } from "../../../common/Button/Button";
import youtube from "../../../../../public/mock-imges/icons/youTube.svg"
import union from "../../../../../public/mock-imges/icons/Union.svg"

export const Hero = () => {
  return (
    <>
      <div className="mt-28 pb-32 px-[198px] flex flex-col justify-center items-center relative">
        <h1 className="text-[56px] text-center text-color3-1 font-bold tracking-[1.12px] leading-[78px]">Your Private Online Marketplace Where <span className="text-blue-default">Socielities</span> That Comprise Your Personal <span className="text-blue-default">World</span></h1>
        <p className="py-[38px] text-base text-color3-default text-center">Your private online marketplace where you can trade goods and services with family, friends, neighbors, classmates, <br /> co-workers, and members of the many other communities that comprise your personal world.</p>
        <Button>Explore More</Button>
        <div className="flex items-center gap-3 mt-5">
          <img src={youtube} alt="youtube" />
          <span className="text-sm text-color3-default border-b-[1px] border-color3-2 pb-[3px]">Let's have a look</span>
        </div>
        <img src={union} className="absolute -z-10 top-0" />
      </div>
    </>
  )
};
