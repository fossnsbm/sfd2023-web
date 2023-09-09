'use client';

import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import Stats from "@/components/Stats";
import EventOutline from "@/components/event-outline/EventOutline";
import Communities from "@/components/communities/Communities";
import Speakers from "@/components/speakers/Speakers";
import { motion as m} from "framer-motion";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <m.div 
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 1, delay:0.8 ,ease: 'easeOut'}}
      >
        <Intro />
        <Stats />
        <EventOutline />
        <Speakers />
        <Communities />
        <Footer />
      </m.div>
    </>
  );
}





