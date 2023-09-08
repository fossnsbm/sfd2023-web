"use client"

import Container from "@/components/Container";
import Image from 'next/image'

const styles = {
    monoFonts: "text-center text-lg md:text-2xl",
    bottomFooter: "text-center text-sx md:text-sm"
}

const Hero = () => {

    return (
        <Container>
            <div className="my-10 text-white">
                <Image
                    width={1172}
                    height={100}
                    src="/images/hero-logo.webp"
                    alt="Hero Logo"
                />

                <div className="-mt-10 md:-mt-20 flex flex-col gap-2 md:flex md:flex-row justify-between relative items-center mb-5 md:mb-10  font-mono">
                    <div>
                        <p className={styles.monoFonts}>SEPTEMBER 18, 2023</p>
                    </div>
                    <div className={styles.monoFonts}>
                        <p>9.00 AM - 1.00 PM</p>
                    </div>
                    <div className={styles.monoFonts}>
                        <p>C2 - 002, NSBM GREEN UNIVERSITY</p>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Hero;


