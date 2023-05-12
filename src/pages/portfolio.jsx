import { useState } from "react"

import Frixx from "../assets/frixx.jpg"
import hivend from "../assets/hivend.jpg"
import dativejs from "../assets/dativejs.jpg"
import joinmonie from "../assets/join-monie.jpg"
import devfest from "../assets/devfest.jpg"
import calculator from "../assets/calculator.jpg"
import smartdeployer from "../assets/smartdeployer.jpg"

export const Portfolio = () => {
    const [projects] = useState([
        {
            img: Frixx,
            title: "Frixx",
            description: "Frixx is a social network for tech enthusiasts to connect, share ideas, and engage with one another.",
            link: "https://frixxapp.com"
        },
        {
            img: hivend,
            title: "Hivend",
            description: "Hivend is a free decentralized education network for all. I built the waitlist page for the team",
            link: "https://hivend.click"
        },
        {
            img: dativejs,
            title: "Dativejs",
            description: "Dativejs is a javascript framework for building websites and webapps with ease",
            link: "https://dativejs.js.org"
        },
        {
            img: joinmonie,
            title: "Join Monie",
            description: "Join Monie is a crowd funding platform. I helped the team build the landing page for a hackathon last year (2022)",
            link: "https://join-moniee.vercel.app/"
        },
        {
            img: devfest,
            title: "Devfest Enugu 2022",
            description: "Devfest Enugu 2022 was an event hosted by google developer group. I volunteered to build the landing page for the event last year (2022)",
            link: "https://devfestenugu.vercel.app/"
        },
        {
            img: calculator,
            title: "Dativejs Calculator",
            description: "Dativejs Calculator is a calculator built with dativejs.",
            link: "https://dative-calculator.netlify.app/"
        },
        {
            img: smartdeployer,
            title: "SmartDeployer",
            description: "SmartDeployer is a web3 product that helps people create crypto tokens without having to write any line of smart contract code.",
            link: "https://smartdeployer.xyz/"
        },
    ])
    return (
        <div className="mt-28 md:mt-8 font-clash-display h-full">
            <div className="portfolio-header">
                <span className="color"> My </span> Portfolio
                <span className="header-caption">
                    Some of the <span className="color">Projects</span> I&#39;ve done.
                </span>
            </div>
            <div className="portfolio-content">
                {
                    projects.map((project,i) => (
                        <div key={i} className="portfolio">
                            <div className="portfolio-image">
                                <div className="img-container">
                                    <img src={project.img} placeholder="blur" alt={`${project.title} Image`} />
                                </div>
                            </div>
                            <div className="portfolio-text !bg-[#171717]">
                                <h2 className="font-Recoleta-black">{project.title}</h2>
                                <p className="font-clash-display ">{project.description}</p>
                                <div className="button-wrapper !border-white">
                                    <a href={project.link} target="_blank" rel="noreferrer">
                                        <button>
                                            <span className="index">
                                                View Project
                                                <i className="gg-arrow-right" />
                                            </span>
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}