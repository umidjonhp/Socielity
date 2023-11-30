import card1Img from "../../../../../public/mock-imges/icons/financial.svg"
import card2Img from "../../../../../public/mock-imges/icons/outsorcing.svg"
import card3Img from "../../../../../public/mock-imges/icons/ikigai.svg"
import card4Img from "../../../../../public/mock-imges/icons/alchemy.svg"
import card5Img from "../../../../../public/mock-imges/icons/social.svg"
import card6Img from "../../../../../public/mock-imges/icons/leaderShip.svg"
import card7Img from "../../../../../public/mock-imges/icons/bridging.svg"
import card8Img from "../../../../../public/mock-imges/icons/planet.svg"
import { Card } from "./card/card"


export const Socielity = () => {
  return (
    <>
      <div className="px-20">
        <h2 className="text-[26px] text-color3-1 font-bold text-center">Why Socielity?</h2>
        <p className="text-base text-color3-default text-center pt-6 pb-[51px]">Welcome to CommuniTrader.com, the private on-line marketplace where you are able to exchange goods <br /> and services, cash-free, in one place, 24/7, with a select group of individuals, organizations, and <br /> businesses that you know and trust.</p>
        <div className="grid grid-cols-4 gap-[30px]">
          <Card img={card1Img} title={"Financial Security"} info={"you want to keep more of your hard-earned cash in your wallet. "} />
          <Card img={card2Img} title={"Outsourcing"} info={"you want to avoid certain chores that you don't enjoy."} />
          <Card img={card3Img} title={"Ikigai"} info={"you want to spend more time doing, what you love, what you are good at, what you can get paid for, what the world needs. "} />
          <Card img={card4Img} title={"Alchemy"} info={"you want to replace things that you don't want with things that you do want."} />
          <Card img={card5Img} title={" Social capital"} info={"you want to develop more beneficial relationships with others."} />
          <Card img={card6Img} title={"Leadership"} info={"you want to strengthen one or more of the communities or groups you are associated with."} />
          <Card img={card7Img} title={"Bridging Divides"} info={"you want people who are different from one another to get along with each other."} />
          <Card img={card8Img} title={"Planet Earth"} info={"you want to reduce your carbon footprint without unduly impacting your lifestyle."} />
        </div>
      </div>
    </>
  )
};
