import React from 'react';
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { animated } from '@react-spring/web'
import bg1 from "../../assets/bg1.svg"
import { Link } from 'react-scroll';
import { management } from '../../utils/emails';



export const Hero = () => {

    return (
        <>
            <div className='flex flex-col bg-cover bg-no-repeat justify-center items-center overflow-hidden' style={{
                backgroundImage: `url(${bg1})`
            }} id="hero">
                <div className={`h-screen w-full flex flex-col justify-center space-y-56 items-center`}>
                    <div className="px-9 md:px-20 gap-20 md:gap-0 flex flex-col md:flex-row justify-center items-center">
                        <div className="flex flex-col justify-center items-center">
                            <animated.h1 className='font-clash-display font-[900] text-center text-[60px] leading-[63px] md:text-[140px] md:leading-[130px] transition-all ease-[ease]'>Web3 <br /> Software developer</animated.h1>

                            <a href={`mailto:${management}`} className="py-2 px-5 !mt-10 hover:bg-neon hover:border-neon hover:backdrop-blur-lg hover:text-white duration-100 border-neon border-2 text-neon rounded-lg">Reach out to me!</a>
                        </div>
                        <Link
                            activeClass="active"
                            duration={500}
                            href="about"
                            offset={-100}
                            smooth={true}
                            spy={true}
                            to="about"
                        >
                            <div className="relative flex flex-col items-center justify-center">
                                <svg className="absolute animate-spin-slow duration-75" xmlns="http://www.w3.org/2000/svg" width="190" height="190" viewBox="0 0 190 190" fill="none">
                                    <circle cx="95" cy="95" r="94.25" stroke="black" stroke-width="2.5" stroke-dasharray="15 18" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="119" height="110" viewBox="0 0 119 126" fill="none">
                                    <path d="M60 4L60 116" stroke="black" stroke-width="3" stroke-linecap="round" />
                                    <path d="M4 72L60 120.5L115 72" stroke="black" stroke-width="3" stroke-linecap="round" />
                                </svg>
                            </div>
                        </Link>
                    </div>
                </div>
            </div >
        </>
    )
}