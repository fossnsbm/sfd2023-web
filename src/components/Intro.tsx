'use client';

import React from 'react'
import Button from './Button'
import { TbChevronRight } from 'react-icons/tb'
import Container from './Container'
import Image from 'next/image'
import { useRouter } from 'next/navigation'


function Intro() {
    const router = useRouter();
    const goToRegister = () => {
        router.push('/register')
    }
    return (
        <>
            <Container>
                <div className='flex flex-col'>
                    <div className='flex flex-col md:flex-row justify-between'>
                        <div className='text-gray font-medium text-[20px] text-center lg:text-3xl md:text-left lg:text-left md:pt-[20px]'>
                            Register now and lock in your spot for the unforgettable <br /> Software Freedom Day 2023 celebration.
                        </div>
                        <div className='text-center lg:text-right  pt-[20px]'>
                            <Button
                                onClick={goToRegister}
                                label='Register now'
                                outline
                                icon={TbChevronRight} />
                        </div>
                    </div>
                    <div className='py-[60px]'>
                        <Image
                            src='/images/intro-grid.webp'
                            alt='hero'
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Intro