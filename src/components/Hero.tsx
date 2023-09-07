"use client"

import Container from "@/components/Container";
import Image from 'next/image'

const HeroSection = () => {

    return (
        <>
            <Container>
                <div className="relative">
                    <Image
                        src="/images/hero-logo.webp"
                        alt="Picture of the author"
                        width={1172}
                        height={605}
                        className="w-full h-auto"
                    />
                    <div className="absolute lg:px-28 lg:flex justify-between md:bottom-5 lg:bottom-16 w-full bg-opacity-75 text-white p-4 text-center">
                        <p className="font-mono text-xl uppercase">September 18, 2023</p>
                        <p className="font-mono text-xl uppercase">9.00 AM - 1.00 PM</p>
                        <p className="font-mono text-xl uppercase">C2 - 002, NSBM GREEN UNIVERSITY</p>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default HeroSection;


