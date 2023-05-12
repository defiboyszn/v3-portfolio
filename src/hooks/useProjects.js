import { useState } from "react"
import Frixx from "../assets/frixx.jpg"
import dativejs from "../assets/dativejs.jpg"
import devfest from "../assets/devfest.jpg"
import smartdeployer from "../assets/smartdeployer.jpg"
import swyype from "../assets/swyype-web.jpg"
import cns from "../assets/cns.jpg"
export const useProjects = () => {
    const [projects] = useState([
        {
            img: cns,
            title: "CNS",
            description: "CNS - Decentralized Identity (DID) Built on Polygon",
            link: "https://trycns.vercel.app/"
        },
        {
            img: Frixx,
            title: "Frixx",
            description: "Frixx is a web3 ecosystem that leverages blockchain technology to create innovative solutions for various problems in Africa and beyond.",
            link: "https://frixxapp.com"
        },
        {
            img: dativejs,
            title: "Dativejs",
            description: "Dativejs is a javascript framework for building websites and webapps with ease",
            link: "https://dativejs.js.org"
        },
        {
            img: devfest,
            title: "Devfest Enugu 2022",
            description: "Devfest Enugu 2022 was an event hosted by google developer group. I volunteered to build the landing page for the event last year (2022)",
            link: "https://devfestenugu.vercel.app/"
        },
        {
            img: smartdeployer,
            title: "SmartDeployer",
            description: "SmartDeployer Is A No-Code Platform That Enables Anyone To Create And Manage Tokens On The Core Chain Easily",
            link: "https://smartdeployer.xyz/"
        },
        {
            img: swyype,
            title: "Swyypepay",
            description: "Swyype is a decentralized system created to provide a easy liquidating of crypto asset to fiat through physical and virtual payment card.",
            link: "https://www.swyypepay.com/"
        },
    ])
    return projects
}