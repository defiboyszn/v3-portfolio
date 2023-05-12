import genz from "../assets/genz.png"
import keza from "../assets/keza.png"
import vefi from "../assets/vefi.jpg"
import codespace from "../assets/codespace.jpeg"
import eddify from "../assets/eddify.jpeg"
import smartklas from "../assets/smartklas.jpeg"
import artreus from "../assets/artreus.jpeg"
import swyype from "../assets/swyype.svg"
import frixx from "../assets/frixx.svg"
import gdg from "../assets/gdg.png"
import smartdeployer from "../assets/smartdeployer.svg"
import cns from "../assets/cns-logo.png"
import { Banner } from './Banner';
import { motion } from "framer-motion"
import { useRef, useEffect } from "react"
import { useObserver } from "../hooks/useObserver"

export const About = () => {

    return (
        <>
            <div id="about" className="relative overflow-hidden flex flex-col justify-center gap-12 md:gap-20 items-center font-clash-display h-full md:h-fit border-b-2  bg-black !text-white">
                <div className="flex flex-col items-center justify-center md:flex-row md:justify-start md:items-start">
                    <div className="flex flex-col gap-1 mt-24">
                        <h1 className="text-3xl md:text-4xl font-clash-display font-normal">About Me</h1>
                        <span className="mt-10 text-xl text-textDark md:w-1/2 px-5 md:px-0">
                            I'm a full-stack & web3 developer building cool products that revolves around many areas in web3. <br />
                            I also do community management and technical writing
                        </span>
                    </div>
                </div>
                <div className="flex flex-col gap-10 ">
                    <h1 className="text-3xl md:text-4xl font-clash-display font-normal">Brands i/i've worked for</h1>
                    <div className="grid grid-cols-4 gap-4 md:grid-cols-5 place-items-center">
                        <img src={vefi} alt="vefi" className="object-contain w-[50px] grayscale hover:grayscale-0 h-[50px]" />
                        <img src={eddify} alt="eddify" className="object-contain w-[50px] grayscale hover:grayscale-0 h-[50px]" />
                        <img src={keza} alt="keza" className="object-contain w-[50px] grayscale hover:grayscale-0 h-[50px]" />
                        <img src={frixx} alt="frixx" className="object-contain w-[50px] grayscale hover:grayscale-0 h-[50px]" />
                        <img src={codespace} alt="codespace" className="object-contain w-[50px] grayscale hover:grayscale-0 h-[50px]" />
                        <img src={smartklas} alt="smartklas" className="object-contain w-[50px] grayscale hover:grayscale-0 h-[50px]" />
                        <img src={genz} alt="genz" className="object-contain w-[50px] grayscale hover:grayscale-0 h-[50px]" />
                        <img src={gdg} alt="gdg" className="object-contain w-[50px] grayscale hover:grayscale-0 h-[50px]" />
                        <img src={smartdeployer} alt="smartdeployer" className="object-contain w-[50px] grayscale hover:grayscale-0 h-[50px]" />
                        <img src={swyype} alt="swyype" className="object-contain w-[50px] grayscale hover:grayscale-0 h-[50px]" />
                        <img src={artreus} alt="artreus" className="object-contain w-[50px] grayscale hover:grayscale-0 h-[50px]" />
                        <img src={cns} alt="cns" className="object-contain w-[50px] grayscale hover:grayscale-0 h-[50px]" />
                    </div>
                </div>

                <div className="w-full text-center relative flex flex-col">
                    <h1 className="text-3xl md:text-4xl font-clash-display font-normal">What i do!</h1>
                    <div className=" w-full bottom-0">
                        <Banner />
                    </div>
                </div>
            </div>
        </>
    )
}