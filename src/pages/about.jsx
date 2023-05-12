import MyNFT from "../assets/tobi_eth.png"

export const About = () => {
    return (
        <>
            <div className="mt-36 md:mt-32 lg:mt-8 flex flex-col justify-center items-center font-clash-display h-full md:h-screen">
                <h1 className="text-5xl font-Recoleta-black">About Me</h1>
                <div className="mx-10 justify-between flex md:flex-row flex-col items-center">
                    <div className="flex flex-col space-y-4 justify-center items-center">
                        <span className="text-lg text-center font-thin leading-8 opacity-[.8]">
                            I started my coding journey in 2019, when I was 13years Old. I'm a self taught Developer
                            <br />
                            Over the years I&#39;ve successfully developed softwares and open sources projects to help myself and other developers.

                            <br />
                            Coding and Tech is super fun and I love building open source projects.
                        </span>
                        <div className="cv">
                            <a href="https://linkedin.com/in/tobithealpha" rel="noreferrer" target="_blank">
                                <button>View CV</button>
                            </a>
                        </div>
                    </div>
                    <div className="about-img">
                        <div className="img-container">
                            <img className="object-contain w-52 h-52" src={MyNFT} decoding="async" loading="lazy" placeholder="blur" alt="tobi" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="services">
                <div className="services-heading font-Recoleta-black">
                    <span className="color">My</span> Services
                </div>
                <div className="services-content-wrapper">
                    <div className="service">
                        <div className="service-img">
                            <div className="img-container pb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[80px] h-[80px]">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>

                            </div>
                        </div>
                        <div className="service-description">
                            <h2>Website Development</h2>
                            <p>
                                I Developed Websites and Webapps that can be used in different aspects.<br />
                                I create e-commerce websites, sass products and any other products that can be developed.
                            </p>
                        </div>
                    </div>
                    <div className="service">
                        <div className="service-img">
                            <div className="img-container">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[80px] h-[80px]">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                </svg>
                            </div>
                        </div>
                        <div className="service-description">
                            <h2>Mobile App Development</h2>
                            <p>Developing of Mobile Applications with React Native. Apps Like Social Media, Dapps, Fintech Application</p>
                        </div>
                    </div>
                    <div className="service">
                        <div className="service-img">
                            <div className="img-container">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[80px] h-[80px]">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                </svg>
                            </div>
                        </div>
                        <div className="service-description">
                            <h2>Community Management</h2>
                            <p>Developing of Mobile Applications with React Native. Apps Like Social Media, Dapps, Fintech Application</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}