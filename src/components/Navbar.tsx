'use client'

import React, { use } from 'react'
import Container from './Container'
import Button from './Button'
import { TbChevronRight } from 'react-icons/tb'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

function Navbar() {
    const router = useRouter()
    const goToHome = () => {
        router.push('/what-is-sfd')
    }

    const goToRegister = () => {
        router.push('/register')
    }
    return (

        <Container>
            <div className='fixed top-0 z-50 backdrop-blur-lg py-4 mb-4 md:py-14 w-[100%]'>
                <div className='flex flex-row justify-between max-w-[1240px]
'>
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
                        <Link href="/what-is-sfd" className='hidden lg:block text-white pl-[50px] w-full'>
                            What is SFD?
                        </Link>
                    </div>
                    <div className='hidden lg:block'>
                        <Button
                            onClick={goToRegister}
                            label='Register now'
                            icon={TbChevronRight}
                        />
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Navbar