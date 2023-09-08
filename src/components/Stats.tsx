import React from 'react'
import Container from './Container'
import { stats } from '@/data/stats'
import Image from 'next/image'
import Link from 'next/link'
import {TbChevronRight} from 'react-icons/tb'

const Stats = () => {
  return (
    <Container>
        <div className='mx-auto flex flex-col gap-10 sm:gap-16 max-w-[996px]'>

            <p className='text-base sm:text-2xl font-medium text-white'>Lorem ipsum dolor sit <span className='text-gray'>amet consectetur adipiscing </span>elit Ut et massa mi. <span className='text-gray'> Aliquam in hendrerit urna</span>. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas<span className='text-gray'> vitae mattis tellus</span>.</p>

            <ul className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
                {stats.map((stat, index) => (
                    <li key={index} className='flex flex-col items-center'>
                        <div className='flex flex-col items-center sm:items-start'>
                            <h3 className='sm:text-6xl text-5xl font-medium text-white font-mono'>{stat.value}</h3>
                            <p className='sm:text-xl text-sm text-gray'>{stat.name}</p>
                        </div>
                    </li>
                ))}
            </ul>

            <Image
                src='/images/sfd-3d.webp'
                width={996}
                height={312}
                alt='sfd banner'
            />

        </div>

        <div className='flex justify-center gap-6 sm:mt-8 mt-6'>
            <p className='sm:text-sm text-xs text-gray font-medium'>What is SFD?</p>
            <Link className='sm:text-sm text-xs text-white flex items-center' href="/what-is-sfd">Explore more <TbChevronRight/></Link>
        </div>

        
    </Container>
  )
}

export default Stats