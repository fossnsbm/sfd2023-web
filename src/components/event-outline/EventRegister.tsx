'use client'

import { BsArrowRight } from "react-icons/bs";
import { TbChevronRight } from "react-icons/tb";
import Button from "@/components/Button";
import { useRouter } from 'next/navigation'


const EventRegister = () => {

    const router = useRouter();
    const goToRegister = () => {
        router.push('/register')
    }
    return (

        <div className="flex text-white flex-grow mt-4 mb-6">
            <div className="flex-none flex-col">
                <div className="flex-none">
                    <div className="w-[3.9rem] h-[3.9rem] rounded-full border-2 border-white flex items-center justify-center">
                        <span>
                            <BsArrowRight size={25} />
                        </span>
                    </div>
                    <div className="grow items-center justify-center flex h-ful py-4">
                    </div>
                </div>
            </div>
            <div className="flex flex-col flex-1 ml-6">
                <div className="flex flex-col md:flex-row">
                    <div className="md:basis-2/3">
                        <h1 className="text-[30px] md:text-[2rem] pb-3">Let’s explore more</h1>
                        <p className="font-mono text-gray">Discover SFD 2023, Engage in Tech,{<br />}
                            Secure Your Spot Now!</p>
                    </div>
                    <div className="md:basis-1/3">
                        <p className="text-left md:text-right align-top pt-6 pb-2">
                            <Button label="Register Now" onClick={goToRegister} outline icon={TbChevronRight} />
                        </p>
                    </div>
                </div>

            </div>

        </div>

    )
}

export default EventRegister