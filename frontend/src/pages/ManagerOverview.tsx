import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import '../wallet-button.css'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { WalletContextState } from "@solana/wallet-adapter-react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import check from '../assets/checked-blue.svg';

export default function Home({ connection, wallet }: { connection: any; wallet:WalletContextState }) {
    const navigate = useNavigate()
    
    // Check if user is logged in:
    useEffect(() => {
        if(!wallet.connected) {
            navigate('/manager')
        }
    }, [wallet.connected])
    
    {var revenue = 1000;
     var btms = 50;
     var elevator = 7;
     var sauna = 100;
     var apt = 105
     var status = true;
     var nmt = 120;
    }
    
    return (
        <>
            <div className="p-12 items-left flex justify-left flex-row gap-8">
                <div className="table border-separate border-spacing-y-2 w-[50vw] text-white">
                    <div className="table-header-group ">
                        <div className="table-row bg-[#6D9EEB] ">
                            <div className="table-cell text-left ">CURRENT MONTH FINANTIALS</div>
                            <div className="table-cell text-left ">Notes:</div>
                            <div className="table-cell text-left "></div>
                        </div>
                    </div>
                    <div className="table-row-group">
                        <div className="table-row">
                            <div className="table-cell text-left ">{revenue}</div>
                            <div className="table-cell text-center "></div>
                            <div className="table-cell text-right ">1.000</div>
                        </div>
                        <div className="table-row bg-[#153D64]">
                            <div className="table-cell text-left ">Current month bills, taxes, maintenance & services</div>
                            <div className="table-cell text-center ">1</div>
                            <div className="table-cell text-right ">({btms})</div>
                        </div>
                        <div className="table-row">
                            <div className="table-cell text-left">Non-Recurring Maintenance & Events</div>
                            <div className="table-cell text-center "></div>
                            <div className="table-cell text-right "></div>
                        </div>
                        <div className="table-row bg-[#153D64]">
                            <div className="table-cell text-left ">Elevator display replacement</div>
                            <div className="table-cell text-center ">2</div>
                            <div className="table-cell text-right ">({elevator})</div>
                        </div>
                        <div className="table-row bg-[#153D64]">
                            <div className="table-cell text-left ">Sauna area</div>
                            <div className="table-cell text-center ">3</div>
                            <div className="table-cell text-right ">({sauna})</div>
                        </div>
                        <div className="table-row bg-[#6D9EEB]">
                            <div className="table-cell text-left ">Net Revenue</div>
                            <div className="table-cell text-center "></div>
                            <div className="table-cell text-right ">{revenue - btms - elevator - sauna}</div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-left text-white px-8">
                    <h1 className="flex text-xl text-left">For detailed information on this statment please check</h1>
                    <a className="text-[#5D5DEB] text-xl text-left mb-5" href="/reports">Reports</a>
                    <div className="flex flex-col w-[30vw] gap-y-1">
                        <div className="flex flex-row gap-x-24 ">
                            <h1 className="text-xl"># Apartment:</h1>
                            <h1 className="text-[#6D9EEB] text-xl">{apt}</h1>
                        </div>
                        <div className="flex flex-row gap-x-36">
                            <h1 className="text-xl">Status:</h1>
                            <h1 className="text-xl">{status ? "Active" : "Inactive"}</h1>
                        </div>
                        <div className="flex flex-row gap-x-10">
                            <h1 className="text-xl">Next Month Taxes:</h1>
                            <h1 className="text-xl">${nmt}</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row items-baseline">
                <h1 className="text-3xl text-white">Comunication</h1>
                <div className="flex items-end flex-grow w-[50vw] h-px bg-[#6D9EEB]"></div>
                <button className="flex items-center p-2 text-white text-xl bg-gray-600">New Entry</button>
            </div>
            <div className="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4">
                {/* Carousel for desktop and large size devices */}
                <CarouselProvider className="lg:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={5} visibleSlides={3} step={1} infinite={false}>
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                    <Slide index={0}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/fDngH9G/carosel-1.png" alt="black chair and white table" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 1</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={1}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/DWrGxX6/carosel-2.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={2}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/tCfVky2/carosel-3.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={3}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/rFsGfr5/carosel-4.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={4}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/fDngH9G/carosel-1.png" alt="black chair and white table" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>
            </div>
        </>
    )
}