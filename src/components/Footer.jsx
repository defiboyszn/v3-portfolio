import { personal } from "../utils/emails"

export const Footer = () => {

    return (
        <>
            <div id="contact" className="relative overflow-hidden flex flex-col gap-10 px-2 md:px-24 font-clash-display h-[fit] bg-black !text-white">
                <div className="flex flex-row justify-between items-center gap-14 md:gap-20 mt-10">
                    <h1 className="text-3xl px-10 md:px-0 md:text-[80px] md:leading-[98.48px] font-clash-display font-semibold md:w-[509px]">Got a Project to work with?</h1>

                    <a href={`mailto:${personal}`} className="relative flex flex-col items-center justify-center">
                        <svg className="absolute animate-spin-slow duration-[25ms]" xmlns="http://www.w3.org/2000/svg" width="190" height="190" viewBox="0 0 190 190" fill="none">
                            <circle cx="95" cy="95" r="94.25" stroke="white" stroke-width="2.5" stroke-dasharray="15 18" />
                        </svg>
                        <h1 className="text-3xl md:text-[25px] leading-[31px] font-clash-display text-center rotate-[-29.5deg] font-semibold md:w-[509px]">Let's Talk</h1>

                    </a>
                </div>




                <div>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-10 mt-10 mb-10">
                        <ul className="flex flex-row justify-between items-center gap-10">
                            <li><a className="font-clash-display font-[400] text-[25px]" href="/">Home</a></li>
                            <li><a className="font-clash-display font-[400] text-[25px]" href="/#about">About</a></li>
                            <li><a className="font-clash-display font-[400] text-[25px]" href="https://blog.heistobi.xyz">Blog</a></li>
                        </ul>


                        <p className="font-clash-display font-[400] text-[25px]">© 2023 Tobi</p>


                        <ul className="flex flex-row justify-between items-center gap-10">
                            <li><a className="font-clash-display font-[400] text-[25px]" href="https://twitter.com/realtobi_eth">Twitter</a></li>
                            <li><a className="font-clash-display font-[400] text-[25px]" href="https://linkedin.com/in/tobithealpha">Linkedin</a></li>
                            <li><a className="font-clash-display font-[400] text-[25px]" href="https://github.com/tobithedev">Github</a></li>
                            {/* <li><a className="font-clash-display font-[400] text-[25px]" href="https://blog.realtobi.xyz">Blog</a></li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}