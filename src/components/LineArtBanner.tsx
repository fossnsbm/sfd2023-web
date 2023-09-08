import React from 'react'
import Image from "next/image"

type Props = {}

const LineArtBanner = (props: Props) => {
    return (
        <div style={{ position: "relative" }} className='h-40 md:h-52 lg:h-64'>
            <Image
                src='/images/line-art.webp'
                fill
                style={{ objectFit: "cover" }}
                alt='Register SFD' />
        </div>
    )
}

export default LineArtBanner