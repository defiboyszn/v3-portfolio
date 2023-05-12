import { motion } from "framer-motion"
import { useState } from "react"

export const Interview = () => {
    const [communities] = useState([
        {
            name: "Tech Teens: Here are 4 Nigerian Teen Software Developers Doing Amazing Things in Tech",
            // link: "https://youtu.be/akDbmEEds5Q",
            embed: "https://www.youtube.com/embed/akDbmEEds5Q",
        },
        {
            name: "Young People Doing Big Things - Interview with Emeka Uche",
            embed: "https://www.youtube.com/embed/EJ5qcVCHhgU" ,
        },
    ])
    return (
        <>
            <motion.div className="mt-32 md:mt-24 mb-10 flex flex-col items-center font-circular-std-book h-full md:h-screen">
                <motion.h1 initial={{ y: -1000, transitionProperty: "all", transitionTimingFunction: "ease", transitionDelay: "initial" }} animate={{ y: 0, transitionProperty: "all", transitionTimingFunction: "ease" }} className="text-5xl mb-10 font-Recoleta-black">Interviews</motion.h1>
                <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-11">
                    {communities.map((community, i) => (
                        <motion.div className="w-[560px] rounded overflow-hidden shadow-lg">
                            <motion.div className="px-6 py-4 flex flex-col gap-y-4">
                                <motion.iframe className="w-[360px] md:w-[560px] h-[315px]" src={community.embed} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></motion.iframe>
                                <motion.div className="font-normal font-Recoleta-Regular w-[360px] md:w-fit text-xl mb-2">{community.name}</motion.div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </>
    )
}