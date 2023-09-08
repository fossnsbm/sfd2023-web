import React from 'react'
import Container from './Container'
import { stats } from '@/data/stats'
import Link from 'next/link'
import { TbChevronRight } from 'react-icons/tb'
import SfdBanner from './SfdBanner'

const Stats = () => {
    return (
        <div className='mb-10'>
            <Container>
                <p className='text-2xl md:text-5xl md:leading-[3.75rem] font-medium text-center md:text-left text-white'>Lorem ipsum dolor sit <span className='text-gray'>amet consectetur adipiscing </span>elit Ut et massa mi. <span className='text-gray'> Aliquam in hendrerit urna</span>. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas<span className='text-gray'> vitae mattis tellus</span>.</p>

                <ul className='grid grid-cols-2 sm:grid-cols-4 gap-4 my-5 md:my-12'>
                    {stats.map((stat, index) => (
                        <li key={index} className='flex flex-col items-center'>
                            <div className='flex flex-col items-center sm:items-start'>
                                <h3 className='sm:text-6xl text-5xl font-medium text-white font-mono'>{stat.value}</h3>
                                <p className='sm:text-xl text-sm text-gray'>{stat.name}</p>
                            </div>
                        </li>
                    ))}
                </ul>

                <SfdBanner />

                <div className='flex justify-center gap-6 sm:mt-8 mt-6'>
                    <p className='sm:text-sm text-xs text-gray font-medium'>What is SFD?</p>
                    <Link className='sm:text-sm text-xs text-white flex items-center' href="/what-is-sfd">Explore more <TbChevronRight /></Link>
                </div>
            </Container>
        </div>
    )
}

export default Stats