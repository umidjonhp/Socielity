import { Button } from '../Button/Button'

export const Input = () => {
    return (
        <div className="rounded-2xl bg-white-3 w-[770px] py-[15px] pl-[34px] pr-[19px] flex items-center gap-1">
            <input type="text" placeholder="Enter your email address" className="w-[73%] h-[45px] bg-white-3 text-color3-default" />
            <Button>Subscribe Now</Button>
        </div>
    )
}
