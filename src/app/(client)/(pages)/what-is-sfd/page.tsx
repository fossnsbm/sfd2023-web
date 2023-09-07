import React from 'react'
import Image from 'next/image'
import Container from '@/components/Container'

type Props = {}

const WhatIsSFD = (props: Props) => {
  return (
    <>
    <div className='relative h-72'>
      <Image
        src="/images/line-art.webp"
        alt="What is SFD?"
        fill
        style={{objectFit:"cover"}}
        />
    </div>
        <Container>
          <div className='text-[36px] md:text-[60px] font-medium pt-[30px] pb-[15px] md:pt-[70px] md:pb-[35px]'>
            <span className='text-gray'>What&apos;s special about </span>
            <span className='text-white'>Software</span><br/>
            <span className='text-white'>Freedom Day 2023?</span>
          </div>
          <div className='text-gray text-[16px] md:text-[28px] font-light'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus placerat facilisis. 
            Sed eu quam vehicula, imperdiet ipsum eget, tristique risus. Phasellus hendrerit interdum est, 
            porta vestibulum neque feugiat non. Curabitur a commodo ligula. Ut venenatis nibh in enim 
            finibus commodo. Nulla vel consectetur metus, vel ornare nunc. Etiam facilisis rutrum risus. 
            Praesent vel aliquet sapien. Integer accumsan nec eros in maximus. Quisque justo lacus, auctor 
            consectetur nunc eget, condimentum pulvinar eros.
          </div>
        </Container>
    </>
  )
}

export default WhatIsSFD