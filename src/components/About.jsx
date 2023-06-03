import genz from "../assets/genz.png"
import keza from "../assets/keza.png"
import vefi from "../assets/vefi.jpg"
import codespace from "../assets/codespace.jpeg"
import eddify from "../assets/eddify.jpeg"
import smartklas from "../assets/smartklas.jpeg"
import artreus from "../assets/artreus.jpeg"
import swyype from "../assets/swyype.svg"
import frixx from "../assets/frixx.svg"
import zendmart from "../assets/zendmart.jpg"
import gdg from "../assets/gdg.png"
import smartdeployer from "../assets/smartdeployer.svg"
import cns from "../assets/cns-logo.png"
import bg from "../assets/bg1.svg"
// import { Banner } from './Banner';

export const About = () => {

    return (
        <>
            <div className='flex flex-col bg-cover bg-no-repeat justify-center items-center overflow-hidden' style={{
                backgroundImage: `url(${bg})`
            }} id="about">
                <div className="relative overflow-hidden flex flex-col justify-center gap-12 md:gap-20 items-center font-clash-display md:h-screen pb-10 bg-[#111111] !text-white">
                    <div className="flex flex-col items-center justify-center md:flex-row md:justify-start md:items-start">
                        <div className="flex flex-col md:flex-row md:justify-between justify-center items-center md:items-center gap-1 mt-24 md:px-12">
                            {/* <h1 className="text-4xl md:text-6xl font-Recoleta-black font-normal !text-transparent text-outline">About Me</h1> */}
                            <img src="/images/tobi-logo.png" alt="logo" className="object-contain" style={{
                            height: "500px",
                            width: "500px",
                            color: "transparent"
                        }} />
                            <span className="mt-10 text-xl md:text-2xl text-[#ffffffff] md:w-1/2 px-5">
                                I am a software developer based in Nigeria. I am a software developer with 4 years of experience building cool products/projects.
                                I'm a web3 developer also and a part-time technical writer and community manager
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative overflow-hidden flex flex-col justify-center gap-12 md:gap-20 items-center font-clash-display h-screen w-screen bg-black !text-white">
                <div className="flex flex-col items-center justify-center">
                    <div className="flex flex-col gap-10">

                        <h1 className="text-3xl md:text-[80px] font-Tanker uppercase font-bold">Brands i/i've worked for</h1>
                        <div className="grid grid-cols-4 gap-4 md:grid-cols-8 place-items-center">
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
                            <img src={zendmart} alt="zendmart" className="object-contain w-[50px] grayscale hover:grayscale-0 h-[50px]" />
                        </div>
                    </div>

                    {/* <div className="w-full text-center relative flex flex-col mt-20">
                        <h1 className="text-3xl md:text-[100px] font-clash-display uppercase font-black">What i do!</h1>
                        <div className="w-full bottom-0">
                            <Banner />
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}