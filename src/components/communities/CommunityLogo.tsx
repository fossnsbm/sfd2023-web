import React from 'react'
import Image from 'next/image'

type Props = {
  id: number,
  imgUrl: string,
  height: string,
  width: string,
}

function CommunityLogo({ imgUrl, height, width }: Props) {
  const parsedHeight = parseFloat(height);
  const parsedWidth = parseFloat(width);

  return (
    <div>
      <Image
        src={imgUrl}
        alt="Community Logo"
        height={parsedHeight}
        width={parsedWidth}
        className='grayscale hover:grayscale-0 transition-all duration-500 ease-in-out'
      />
    </div>
  );
}

export default CommunityLogo
