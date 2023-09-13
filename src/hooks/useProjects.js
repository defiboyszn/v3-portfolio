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
            description: "CNS - Decentralized Identity (DID) Built on Polygon and Zetachain",
            link: "https://trycns.heistobi.xyz/"
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
        {
            img: "",
            title: "Zendmart",
            description: "Zendmart is a decentralized online marketplace",
            link: "https://www.zendmart.xyz/"
        },
        {
            img: "",
            title: "Lest Protocol",
            description: "Lestprotocol web 3 ecosystem",
            link: "https://www.lestprotocol.xyz/"
        },
        {
            img: "",
            title: "Sendtokens",
            description: "Sendtokens web 3 ecosystem",
            link: "https://www.sendtokens.xyz/"
        },
    ])
    return projects
}
