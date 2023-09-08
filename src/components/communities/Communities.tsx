import React from 'react'
import Container from '../Container'
import SfdBanner from '../SfdBanner'
import CommunityLogo from './CommunityLogo';
import { communityLogos } from '@/data/communityLogos'

type Props = {}

function Communities({}: Props) {
  return (
    <Container>
      <div className="mt-28 mb-40">
        <SfdBanner />
        <h1 className="text-white lg:text-[58px] md:text-[48px] text-[30px] font-medium text-center lg:mt-28 mt-16">
          Special thanks to our
          <span className=" block lg:-mt-1 mt-1">communities.</span>
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-16 lg:gap-24 md:mt-[76px] mt-[36px]">
          {communityLogos.map((logo, id) => (
            <CommunityLogo key={`logo-${id}`} {...logo} id={id + 1} />
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Communities
