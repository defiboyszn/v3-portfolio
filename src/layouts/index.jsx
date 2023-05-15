import {
    RouterProvider,
} from "react-router-dom";
import { router } from "../router"
import { motion, useScroll, useSpring } from "framer-motion"
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Loader } from '../components/Loading';
import { useState } from "react";
import { useEffect } from "react";

function ScrollTop() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        // damping: 30,
        // restDelta: 0.001,
        // velocity: 5
    })
    return (
        <motion.div className="progress-bar" style={{ scaleX, zIndex: 999, }} />
    )
}

export const Layout = () => {
    const [wait, setWait] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setWait(false);
        }, 6000)
    }, [])
    return (
        <>
            {false ? <Loader /> : <motion.div initial={{ x: -1000, transitionProperty: "all", transitionTimingFunction: "ease", transitionDuration: 3000 }} animate={{ x: 0 }}>
                <Navbar />
                <RouterProvider router={router} />
                {/* <ScrollTop /> */}
                <Footer />
            </motion.div>}
        </>
    )
}