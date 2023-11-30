import { Button } from "../../../../common/Button/Button"

export const Servic = ({ img, status }) => {
    return (
        <div className="flex items-center gap-[90px]">
            {status &&
                <span className="w-[50%] flex items-center justify-center">
                    <img src={img} className="" />
                </span>
            }
            <div className="w-[50%]">
                <h2 className="text-[26px] text-color3-1 font-bold leading-[48px]">You want to strengthen more of communities or groups you are associated with.</h2>
                <p className="text-base leading-6 text-color3-default mt-6 mb-[30px]">A simple definition is that leadership is the art of motivating a group of people to act towards achieving a common goal. In a business setting, this can mean directing workers and colleagues with a strategy to meet the company's needs.</p>
                <Button>Explore More</Button>
            </div>
            {!status &&
                <span className="w-[50%] flex items-center justify-center">
                    <img src={img} className="" />
                </span>
            }
        </div>
    )
}
