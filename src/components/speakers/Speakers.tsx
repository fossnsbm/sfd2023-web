import Container from '@/components/Container'
import React from 'react'
import SpeakerCard from './SpeakerCard';
import { speakerDetails } from '@/data/speakerDetails';

type Props = {}

function Speakers() {
  return (
    <Container>
      <div className="overflow-hidden">
        <h1 className="text-white lg:text-[64px] md:text-[48px] text-[35px] font-medium text-center">
          FOSS
          <span className="text-gray lg:ml-6 md:ml-4 ml-3 ">
            Enthusiastic{" "}
            <span className="block lg:-mt-7 md:-mt-5 -mt-3">Speakers.</span>
          </span>
        </h1>
        <p className="text-white mt-[40px] text-center text-[20px] lg:w-[65%] md:w-[75%] w-[90%] mx-auto">
          Passionate speakers unite to ignite the FOSS spirit with eager minds
          and open-source hearts.
        </p>
        <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-8 md:mt-[76px] mt-[36px]">
          {speakerDetails.map((speaker, id) => (
            <SpeakerCard key={`speaker-${id}`} {...speaker} id={id + 1} />
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Speakers
