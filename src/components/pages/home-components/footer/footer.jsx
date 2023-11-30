// Import img
import message from "../../../../../public/mock-imges/icons/message.svg"
import phone from "../../../../../public/mock-imges/icons/phone.svg"
import location from "../../../../../public/mock-imges/icons/location.svg"
import facebook from "../../../../../public/mock-imges/icons/facebook.svg"
import linkedin from "../../../../../public/mock-imges/icons/link.svg"
import twitter from "../../../../../public/mock-imges/icons/twitter.svg"
import pinterest from "../../../../../public/mock-imges/icons/p.svg"
import instagram from "../../../../../public/mock-imges/icons/insta.svg"

export const Footer = () => {
  return (
    <>
      <div className="pt-[28px] pb-[40px] flex gap-[180px]">
        <div className="flex flex-col gap-[31px]">
          <h3 className="text-white-4 text-[26px] font-bold leading-[48px]">Socielity</h3>
          <p className="text-white-4 text-base ">Your private online marketplace where <br /> you can trade goods and services with <br /> family, friends, neighbors, classmates, <br /> co-workers, and members of the many <br /> other Socielities that comprise your <br /> personal world.</p>
        </div>
        <div className="flex pt-4">
          <ul className="flex flex-col gap-2 mr-[170px]">
            <h5 className="text-white-4 text-xl font-bold mb-[33px]">Company</h5>
            <li><a href="#" className="text-white-4 text-sm cursor-pointer">Help Center</a></li>
            <li><a href="#" className="text-white-4 text-sm cursor-pointer">About</a></li>
            <li><a href="#" className="text-white-4 text-sm cursor-pointer">Press</a></li>
            <li><a href="#" className="text-white-4 text-sm cursor-pointer">Blog</a></li>
            <li><a href="#" className="text-white-4 text-sm cursor-pointer">Careers</a></li>
            <li><a href="#" className="text-white-4 text-sm cursor-pointer">FAQs</a></li>
          </ul>
          <ul className="flex flex-col gap-2 mr-[180px]">
            <h5 className="text-white-4 text-xl font-bold mb-[33px]">Sociality</h5>
            <li><a href="#" className="text-white-4 text-sm cursor-pointer">User  Agreement</a></li>
            <li><a href="#" className="text-white-4 text-sm cursor-pointer">Privacy Policy</a></li>
            <li><a href="#" className="text-white-4 text-sm cursor-pointer">Sociality Guidelines</a></li>
            <li><a href="#" className="text-white-4 text-sm cursor-pointer">Cookie Policy</a></li>
            <li><a href="#" className="text-white-4 text-sm cursor-pointer">My Account</a></li>
          </ul>
          <ul className="flex flex-col gap-2">
            <h5 className="text-white-4 text-xl font-bold mb-[33px]">Contact us</h5>
            <li className="flex items-center gap-3">
              <img src={message} alt="message" />
              <a href="#" className="text-white-4 text-sm cursor-pointer">contact@example.com</a>
            </li>
            <li className="flex items-center gap-3">
              <img src={phone} alt="phone" />
              <a href="#" className="text-white-4 text-sm cursor-pointer">+152 534-468-854</a>
            </li>
            <li className="flex items-center gap-3">
              <img src={location} alt="location" />
              <a href="#" className="text-white-4 text-sm cursor-pointer">View on Google map</a>
            </li>
            <li className="flex items-center gap-[18px]">
              <img src={facebook} alt="facebook" />
              <img src={linkedin} alt="linkedin" />
              <img src={twitter} alt="twitter" />
              <img src={pinterest} alt="pinterest" />
              <img src={instagram} alt="instagram" />
            </li>
          </ul>
        </div>
      </div>
    </>
  )
};
