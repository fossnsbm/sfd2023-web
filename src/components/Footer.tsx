"use client";

import Container from "@/components/Container";
import Image from "next/image";
import {
    BsGithub,
    BsLinkedin,
    BsInstagram,
    BsFacebook,
    BsTwitter,
    BsYoutube,
} from "react-icons/bs";


type Props = {}

const styles = {
    monoFonts: "text-center text-sm md:text-2xl",
    bottomFooter: "text-center text-sx md:text-sm"
}

const Footer = (props: Props) => {
    return (
        <div className="text-white">
            <Container>
                <div>
                    <div className="md:flex justify-between items-center">
                        <div>
                            <div className="md:text-left text-center">Organized by</div>
                            <div className="text-xs md:text-xl font-medium text-center">
                                FOSS Community of NSBM
                            </div>
                        </div>
                        <div className="flex ms-12 sm:ms-60 mt-5 md:mt-0">
                            <span className="px-3">
                                <a href="https://github.com/fossnsbm" target="_blank">
                                    <BsGithub />
                                </a>
                            </span>
                            <span className="px-3">
                                <a
                                    href="https://www.linkedin.com/company/fossnsbm/"
                                    target="_blank"
                                >
                                    <BsLinkedin />
                                </a>
                            </span>
                            <span className="px-3">
                                <a href="https://www.instagram.com/fossnsbm/" target="_blank">
                                    <BsInstagram />
                                </a>
                            </span>
                            <span className="px-3">
                                <a href="https://www.facebook.com/foss.nsbm" target="_blank">
                                    <BsFacebook />
                                </a>
                            </span>
                            <span className="px-3">
                                <a href="" target="_blank">
                                    <BsTwitter />
                                </a>
                            </span>
                            <span className="px-3">
                                <a href="" target="_blank">
                                    <BsYoutube />
                                </a>
                            </span>
                        </div>
                    </div>
                    <Image
                        width={1172}
                        height={100}
                        src="/images/hero-logo.webp"
                        alt="Hero Logo"
                    />

                    <div className="flex flex-col gap-2 md:flex md:flex-row justify-between relative items-center mb-5 md:mb-10  font-mono">
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

                    <hr />

                    <div className="flex flex-col gap-2 md:flex md:flex-row justify-between items-center mt-5 md:mt-10 text-sm font-mono">
                        <div>
                            <div className={styles.bottomFooter}>©2023 FOSS COMMUNITY OF NSBM</div>
                        </div>
                        <div>
                            <div className={styles.bottomFooter}>
                                {"</>"} WITH ❤ BY THE FOSS COMMUNITY OF NSBM{" "}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Footer