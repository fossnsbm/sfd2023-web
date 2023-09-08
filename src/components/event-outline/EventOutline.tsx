'use-client'

import Container from "@/components/Container"
import Heading from "@/components/event-outline/Heading"
import EventCard from "@/components/event-outline/EventCard"
import { eventDeatails } from "@/data/EventDetails"
import EventRegister from "./EventRegister"

const EventOutline = () => {

    return (
        <Container>
            <Heading />
            <div className="mt-10">

                {eventDeatails.map((event) => (
                    <EventCard
                        key={event.id}
                        eventName={event.name}
                        eventTime={event.time}
                        eventDescription={event.Description}
                    />
                ))}
            </div>
            <EventRegister />

        </Container>
    )
}

export default EventOutline