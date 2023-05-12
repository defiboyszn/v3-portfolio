import { motion } from "framer-motion"
import { useState } from "react"

export const Community = () => {
    const [communities] = useState([
        {
            name: "Genztechies",
            link: "https://genztechies.com",
            role: "Ambassador",
        },
        {
            name: "Codespace",
            link: "https://codespaceng.com",
            role: "Community Manager",
        },
    ])
    return (
        <>
            <motion.div className="mt-32 md:mt-24 mb-10 flex flex-col items-center font-circular-std-book h-full md:h-screen">
                <motion.h1 initial={{ y: -1000, transitionProperty: "all", transitionTimingFunction: "ease", transitionDelay: "initial" }} animate={{ y: 0, transitionProperty: "all", transitionTimingFunction: "ease" }} className="text-5xl mb-10 font-Recoleta-black">Community</motion.h1>
                <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-11">
                    {communities.map((community, i) => (
                        <motion.div className="max-w-sm rounded overflow-hidden shadow-lg">
                            <motion.div className="px-6 py-4">
                                <motion.div className="font-normal font-Recoleta-black text-xl mb-2">{community.name}</motion.div>
                                <motion.div className="font-normal font-clash-display text-lg mb-2">Role: {community.role}</motion.div>
                                <motion.a href={community.link} target="_blank" whileHover={{ scale: 1.1 }} className="font-circular-std-book text-base">
                                    {community.link}
                                </motion.a>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </>
    )
}