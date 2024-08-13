// import React from 'react';
import DiscoverComp from "../components/discover";
import Store from "../components/stores";
import dell from '../assets/images/stores/Dell-XPS-15-2024.jpg'
import Pavilion from '../assets/images/stores/HP-Pavilion-Aero-13.jpg'
import Spectre from '../assets/images/stores/HPSpectrex360.jpg'
import SurefacePro from '../assets/images/stores/Microsoft-Surface-Pro-9.jpg'
import Dell from '../assets/images/stores/Dell-XPS-15-2024.jpg'
const home = () => {
    return (
        <div>
            <div className="text-black">
                <div className="hero-section">
                    <DiscoverComp/>
                </div> 
                <Store />
                <div className="grid mb-8 md:mx-4 mx-auto md:mb-12 md:grid-cols-2 bg-white">
                    <figure className="flex flex-col items-center justify-center p-8 text-center bg-white">
                        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Very easy this was to integrate</h3>
                            <p className="my-4">If you care for your time, I hands down would go with this.</p>
                        </blockquote>
                        <figcaption className="flex items-center justify-center ">
                            <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture"/>
                            <div className="space-y-0.5 font-medium dark:dark:text-gray-500 text-left rtl:text-right ms-3">
                                <div>Bonnie Green</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400 ">Developer at Open AI</div>
                            </div>
                        </figcaption>    
                    </figure>
                    <figure className="flex flex-col items-center justify-center p-8 text-center bg-white ">
                        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Solid foundation for any project</h3>
                            <p className="my-4">Designing with Figma components that can be easily translated to the utility classes of Tailwind CSS is a huge timesaver!</p>
                        </blockquote>
                        <figcaption className="flex items-center justify-center ">
                            <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="profile picture"/>
                            <div className="space-y-0.5 font-medium dark:dark:text-gray-500 text-left rtl:text-right ms-3">
                                <div>Roberta Casas</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">Lead designer at Dropbox</div>
                            </div>
                        </figcaption>    
                    </figure>
                    <figure className="flex flex-col items-center justify-center p-8 text-center bg-white  ">
                        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Mindblowing workflow</h3>
                            <p className="my-4">Aesthetically, the well designed components are beautiful and will undoubtedly level up your next application</p>
                        </blockquote>
                        <figcaption className="flex items-center justify-center ">
                            <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="profile picture"/>
                            <div className="space-y-0.5 font-medium dark:dark:text-gray-500 text-left rtl:text-right ms-3">
                                <div>Jese Leos</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">Software Engineer at Facebook</div>
                            </div>
                        </figcaption>    
                    </figure>
                    <figure className="flex flex-col items-center justify-center p-8 text-center bg-white">
                        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Efficient Collaborating</h3>
                            <p className="my-4">You have many examples that can be used to create a fast prototype for your team</p>
                        </blockquote>
                        <figcaption className="flex items-center justify-center ">
                            <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png" alt="profile picture"/>
                            <div className="space-y-0.5 font-medium dark:text-gray-500 text-left rtl:text-right ms-3">                                    <div>Joseph McFall</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">CTO at Google</div>
                            </div>
                        </figcaption>    
                    </figure>
                </div>
                <div id="custom-controls-gallery" className="relative w-full" data-carousel="slide">
                    {/* <!-- Carousel wrapper --> */}
                    <div className="relative md:m-0 m-4  h-56 overflow-hidden rounded-lg md:h-96">
                        {/* <!-- Item 1 --> */}
                        <div className=" duration-700 ease-in-out" data-carousel-item>
                            <img src={ dell } className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt=""/>
                        </div>
                        {/* <!-- Item 2 --> */}
                        <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
                            <img src={ Pavilion } className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt=""/>
                        </div>
                        {/* <!-- Item 3 --> */}
                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src={ Spectre } className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt=""/>
                        </div>
                        {/* <!-- Item 4 --> */}
                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src={ SurefacePro } className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt=""/>
                        </div>
                        {/* <!-- Item 5 --> */}
                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src={ Dell } className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt=""/>
                        </div>
                    </div>
                    <div className="flex md:justify-center md:pe-0 pe-3 justify-end items-center pt-4">
                        <button type="button" className="flex justify-center items-center me-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev>
                            <span className="text-gray-400 hover:text-gray-900  group-focus:text-gray-900">
                                <svg className="rtl:rotate-180 w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
                                </svg>
                                <span className="sr-only">Previous</span>
                            </span>
                        </button>
                        <button type="button" className="flex justify-center items-center h-full cursor-pointer group focus:outline-none" data-carousel-next>
                            <span className="text-gray-400 hover:text-gray-900  group-focus:text-gray-900 ">
                                <svg className="rtl:rotate-180 w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                                <span className="sr-only">Next</span>
                            </span>
                        </button>
                    </div>
                </div>
                <div className="bg-black rounded-lg  md:flex items-center justify-around p-4 m-3">                    
                    <div>
                        <p className="m-0 text-white md:text-3xl md:leading-9 md:w-[60%] uppercase font-[500]">stay upto date about our latest offers</p>
                    </div>
                    <div className="md:my-0 my-2 md:w-[50%] lg:w-[30%]">
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"></path>
                                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"></path>
                                </svg>
                            </div>
                            <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Email Address" required />
                        </div>
                        <div className="my-2 flex items-center justify-start lg:justify-end">
                            <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-black focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:border-gray-600 ">Subscribe to Newsletter</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default home;                