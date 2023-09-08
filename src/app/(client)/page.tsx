import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import Stats from "@/components/Stats";
import EventOutline from "@/components/event-outline/EventOutline";
import Communities from "@/components/communities/Communities";
import Speakers from "@/components/speakers/Speakers";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Intro />
      <Stats />
      <EventOutline />
      <Speakers />
      <Communities />
      <Footer />
    </>
  );
}





