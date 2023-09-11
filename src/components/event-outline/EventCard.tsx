'use client'

import Image from 'next/image';

interface EventCardProps {
    eventName: string;
    eventTime: string;
    eventDescription: string;
}

const EventCard: React.FC<EventCardProps> = ({ eventName, eventTime, eventDescription }) => {
    return (

        <div className="flex text-white flex-grow">
            <div className="flex-none flex-col">
                <div className="flex-none">
                    <div className="rounded-full flex items-center justify-center">
                        <span>
                            <Image
                                src="/images/event-icon.svg"
                                alt='icon'
                                width={60}
                                height={60}
                            />
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col flex-1 ml-6 mb-20 ">
                <div className="flex flex-col md:flex-row">
                    <div className="md:basis-2/3">
                        <h1 className="text-[2rem] md:text-[2rem] pb-3">{eventName}</h1>
                        <p className="font-mono text-gray">{eventTime}</p>
                    </div>
                    <div className="md:basis-1/3 font-mono text-gray">
                        <p className="text-left md:text-right align-top pt-6 md:pt-0 pb-2">
                            {eventDescription}
                        </p>
                    </div>
                </div>
                <div className="grid content-center shrink-0 mt-20">
                    <div className="border-dotted border border-white/30" />
                </div>
            </div>

        </div>

    )
}

export default EventCard