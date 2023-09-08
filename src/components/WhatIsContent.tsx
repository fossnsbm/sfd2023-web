import Image from 'next/image'
import Container from '@/components/Container'
import LineArtBanner from './LineArtBanner'

type Props = {}

const WhatIsContent = (props: Props) => {
    return (
        <>
            <LineArtBanner />
            <Container>
                <div className='text-[36px] md:text-[60px] font-medium pt-[30px] pb-[15px] md:pt-[70px] md:pb-[35px]'>
                    <span className='text-gray'>What&apos;s special about </span>
                    <span className='text-white'>Software</span><br />
                    <span className='text-white'>Freedom Day 2023?</span>
                </div>
                <div className='text-gray text-[16px] md:text-[28px] font-light'>
                    Software Freedom Day 2023 promises to be exceptional with a renewed focus on empowering individuals and communities through Free and Open Source Software (FOSS). This year, we aim to showcase the latest advancements in FOSS technology, emphasizing its role in enhancing digital inclusivity. Join us on September 18th for insightful discussions, hands-on workshops, and a vibrant celebration of the software freedom movement, all geared toward a more open and accessible digital future.
                </div>
            </Container>
        </>
    )
}

export default WhatIsContent