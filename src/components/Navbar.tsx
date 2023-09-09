'use client'

import React, { use } from 'react'
import Container from './Container'
import Button from './Button'
import { TbChevronRight } from 'react-icons/tb'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { easeInOut, motion } from 'framer-motion'

function Navbar() {
    const router = useRouter()
    const goToHome = () => {
        router.push('/')
    }

    const goToRegister = () => {
        router.push('/register')
    }
    return (
        <div className='w-full h-20 fixed top-0 bg-black/40 backdrop-blur-md z-50 py-3'>
            <div className='flex felx-row justify-between max-w-[1400px] mx-auto xl:px-20 md:px-10 sm:px-2 px-6'>
                <motion.div
                    initial={{x: -150, opacity: 0, scale: 0.9}}
                    animate={{x: 0, opacity: 1, scale: 1}}
                    transition={{duration: 1, ease: 'easeOut', type: 'spring'}}>                 
                    <div className='flex flex-row items-center'>
                        <div className='w-32 md:w-full'>
                            <Image
                                src='/images/sfd-logo.png'
                                alt='sfd-logo'
                                width={160}
                                height={36}
                                onClick={goToHome}
                                className='cursor-pointer'
                            />
                        </div>
                        <Link href="/what-is-sfd" className='hidden lg:inline-flex text-white pl-[50px] w-full'>
                            What is SFD?
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    initial={{x: 150, opacity: 0, scale: 0.9}}
                    animate={{x: 0, opacity: 1, scale: 1}}
                    transition={{duration: 1, ease: 'easeInOut', type: 'spring'}}> 
                    <div className='hidden lg:block'>
                        <Button
                            onClick={goToRegister}
                            label='Register now'
                            icon={TbChevronRight}
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Navbar