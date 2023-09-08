'use client'

import React, { use } from 'react'
import Container from './Container'
import Button from './Button'
import { TbChevronRight } from 'react-icons/tb'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

function Navbar() {
    const router = useRouter()
    const goToHome = () => {
        router.push('/what-is-sfd')
    }
  return (
    <div className='relative w-full'>
        <Container>
            <div className='fixed top-0 w-full z-50 bg-opacity-75 backdrop-blur-lg'>
                <div className='flex flex-row justify-between py-14'>
                    <div className='flex flex-row text-left items-center'>
                        <div className=''>
                            <Image 
                                src='/images/sfd-logo.png'
                                alt='sfd-logo'
                                width={160}
                                height={36}
                                onClick={goToHome}
                                className='cursor-pointer'
                                />
                            </div>
                            <div className='hidden md:inline-flex'>
                                <a href="/what-is-sfd" className=' text-white content-center pl-[50px]'>
                                    What is SFD?
                                </a>
                            </div>
                    </div>
                    <div className='absolute bottom-0 right-10'> 
                        <Button 
                            onClick={() => console.log('clicked')}
                            label='Register now'
                            icon={TbChevronRight}/>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Navbar