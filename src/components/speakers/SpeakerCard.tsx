
import React from 'react'
import Image from 'next/image'


type Props = {
  id: number;
  name: string;
  position: string;
  imgUrl: string;
}

function SpeakerCard({ id, name, position, imgUrl }: Props) {
  return (
    <div className="h-[440px] w-[313px] border border-white/30 rounded-xl px-3 py-3 flex flex-col">
      <div className='overflow-hidden rounded-xl'>
        <Image
          src={imgUrl}
          alt="Picture of Speaker"
          width={289}
          height={340}
          className="rounded-xl hover:scale-110 transition-all duration-300 ease-in-out"
        />
      </div>
      <div className="text-white mt-[10px]">
        <h3 className="text-[20px] md:text-[18px] font-light">{name}</h3>
        <p className="text-[14px] md:text-[12px] font-mono text-gray mt-[10px]">
          {position}
        </p>
      </div>
    </div>
  );
}

export default SpeakerCard
