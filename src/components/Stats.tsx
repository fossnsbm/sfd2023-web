import React from 'react'
import Container from './Container'
import { stats } from '@/data/stats'
import Link from 'next/link'
import { TbChevronRight } from 'react-icons/tb'
import SfdBanner from './SfdBanner'
import AnimatedNumbers from './AnimtedNumbers'

const Stats = () => {
    return (
        <div className='mb-10'>
            <Container>
                <p className='text-2xl md:text-5xl md:leading-[3.75rem] font-medium text-center md:text-left text-white'>Unlock the world of <span className='text-gray'>limitless code </span>and creativity at <span className='text-gray'> Software Freedom Day 2023</span> on September 18th. Celebrate<span className='text-gray'> open source,</span> connect with innovators, and write your digital story.</p>

                <ul className='grid grid-cols-2 sm:grid-cols-4 gap-4 my-5 md:my-12'>
                    {stats.map((stat, index) => (
                        <li key={index} className='flex flex-col items-center'>
                            <div className='flex flex-col items-center sm:items-start'>
                                <div className='flex'>
                                    <AnimatedNumbers value={stat.value} /><p className='sm:text-6xl text-5xl font-medium text-white font-mono'>+</p>
                                </div>
                                <p className='sm:text-xl text-sm text-gray'>{stat.name}</p>
                            </div>
                        </li>
                    ))}
                </ul>

                <SfdBanner />

                <div className='flex justify-center gap-6 sm:mt-8 mt-6'>
                    <p className='sm:text-sm text-xs text-gray font-medium'>What is SFD?</p>
                    <Link className='sm:text-sm text-xs text-white flex items-center' href="/events/sfd-2023/what-is-sfd">Explore more <TbChevronRight /></Link>
                </div>
            </Container>
        </div>
    )
}

export default Stats