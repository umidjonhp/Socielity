import { Button } from "../../../common/Button/Button";

export const Navbar = () => {
  return (
    <>
      <div className="px-[136px] py-6  flex items-center justify-between">
        <span className="text-4xl font-bold text-blue-default">Socielity</span>
        <ul className="flex items-center gap-10">
          <li><a href="#" className="text-base font-bold text-color3-default">Socielity</a></li>
          <li><a href="#" className="text-base font-bold text-color3-default">Resources</a></li>
          <li><a href="#" className="text-base font-bold text-color3-default">Platfrom</a></li>
          <li><a href="#" className="text-base font-bold text-color3-default">Support</a></li>
          <li><a href="#" className="text-base font-bold text-color3-default">Login</a></li>
          <Button>Explore More</Button>
        </ul>
      </div>
    </>
  )
};
