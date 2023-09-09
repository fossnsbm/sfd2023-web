'use client'

import Container from '@/components/Container'
import React from 'react'
import SpeakerCard from './SpeakerCard';
import { speakerDetails } from '@/data/speakerDetails';
import { motion } from 'framer-motion';

type Props = {}

function Speakers() {
  return (
    <Container>
      <div className="overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-white lg:text-[64px] md:text-[48px] text-[35px] font-medium text-center">
            FOSS
            <span className="text-gray lg:ml-6 md:ml-4 ml-3 ">
              Enthusiastic{" "}
              <span className="block lg:-mt-7 md:-mt-5 -mt-3">Speakers.</span>
            </span>
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-white mt-[40px] text-center text-[20px] lg:w-[65%] md:w-[75%] w-[90%] mx-auto">
            Passionate speakers unite to ignite the FOSS spirit with eager minds
            and open-source hearts.
          </p>
        </motion.div>
        <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-8 md:mt-[76px] mt-[36px]">
            {speakerDetails.map((speaker, id) => (
              <motion.div
                key={`speaker-${id}`}
                initial={{ opacity: 0, y: 150 }}
                whileInView={{ opacity: 0.9, y: 0 }}
                transition={{ duration: 0.45, delay: id * 0.3, ease: "easeOut" }}
              >
                <SpeakerCard {...speaker} id={id + 1} />
              </motion.div>
            ))}
        </div>
      </div>
    </Container>
  );
}

export default Speakers
