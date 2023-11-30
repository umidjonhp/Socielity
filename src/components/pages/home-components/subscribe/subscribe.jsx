import { Input } from "../../../common/Input/Input";

export const Subscribe = () => {
  return (
    <>
      <div>
        <h2 className="text-[26px] text-color3-1 font-bold text-center">Subscribe to get the latest news about us</h2>
        <p className="text-base text-color3-default text-center pt-6 pb-[33px]">Socielity offers insured and non-insured individuals access to affordable, convenient, and personalized care <br /> for urgent and ongoing medical conditions.</p>
        <div className="flex justify-center mb-[80px]">
          <Input />
        </div>
      </div>
    </>
  )
};
