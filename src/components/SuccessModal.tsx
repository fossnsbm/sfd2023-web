"use client"

import React from 'react'
import Button from './Button'
import { useRouter } from 'next/navigation'

type Props = {}

const SuccessModal = (props: Props) => {

    const router = useRouter();

    const handleClick = () => {
        router.push("/events/sfd-2023")
    }

    return (
        <div className='h-screen w-full px-12 py-32 bg-black/80 z-20 fixed top-0 flex justify-center items-center'>
            <div className='bg-black border border-white w-[20rem] md:w-[25rem] h-full rounded-2xl p-6 flex justify-center items-center'>
                <div className=' text-center '>
                    <h2 className='text-xl md:text-2xl text-gray'>Thank You for <span className='text-white text-3xl md:text-4xl'>Registering</span></h2>
                    <h3 className='text-gray mt-5 mb-12'>See you soon!</h3>
                    <Button label='Back to Home' onClick={handleClick} />
                </div>
            </div>
        </div>
    )
}

export default SuccessModal