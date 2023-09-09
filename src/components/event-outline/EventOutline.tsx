"use client";

import Container from "@/components/Container";
import Heading from "@/components/event-outline/Heading";
import EventCard from "@/components/event-outline/EventCard";
import { eventDetails } from "@/data/EventDetails";
import EventRegister from "./EventRegister";
import { motion } from "framer-motion";

const EventOutline = () => {
  return (
    <Container>
      <Heading />
      <div className="mt-10">
        {eventDetails.map((event) => (
          <motion.div 
            key={event.id} 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: parseFloat(event.id) * 0.2, ease: "easeOut" }}
            >
              <EventCard
              eventName={event.name}
              eventTime={event.time}
              eventDescription={event.Description}
            />
          </motion.div>
        ))}
      </div>
      <EventRegister />
    </Container>
  );
};

export default EventOutline;
