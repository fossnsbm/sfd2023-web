'use client'

import React from 'react'
import Container from '../Container'
import SfdBanner from '../SfdBanner'
import CommunityLogo from './CommunityLogo';
import { communityLogos } from '@/data/communityLogos'
import { motion } from 'framer-motion';

type Props = {}

function Communities({}: Props) {
  return (
    <Container>
      <div className="mt-28 mb-40">
        <SfdBanner />
        <motion.div
          initial={{opacity: 0, y: 50, scale: 0.8}}
          whileInView={{opacity: 1, y: 0, scale: 1}}
          transition={{duration: 0.5}}>
          <h1 className="text-white lg:text-[58px] md:text-[48px] text-[30px] font-medium text-center lg:mt-28 mt-16">
            Special thanks to our
            <span className=" block lg:-mt-1 mt-1">communities.</span>
          </h1>
        </motion.div>
        <div className="flex flex-wrap justify-center items-center gap-16 lg:gap-24 md:mt-[76px] mt-[36px]">
          {communityLogos.map((logo, id) => (
            <motion.div
              key={`logo-${id}`}
              initial={{opacity: 0, y: 150}}
              whileInView={{opacity: 0.9, y: 0}}
              transition={{duration: 0.9, delay: id*0.1}}
            >
                <CommunityLogo key={`logo-${id}`} {...logo} id={id + 1} />
            </motion.div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Communities
