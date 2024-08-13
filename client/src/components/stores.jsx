/* eslint-disable no-unused-vars */
import React from 'react';
import Asus from '../assets/images/stores/asus-a315.jpg'
import Dell from '../assets/images/stores/dell-xps13.jpg'
import Spectre from '../assets/images/stores/HP-Spectre-x360-14.jpg'
import Lenovo from '../assets/images/stores/Lenovo-ThinkPad-X1-Carbon.jpg'
import Microsoft from '../assets/images/stores/Microsoft-Surface-Laptop-5.jpg'
import Rog from '../assets/images/stores/Asus-ROG-Zephyrus-G14.jpg'
import Razor from '../assets/images/stores/Razer-Blade-15-Advanced.jpg'
import Predator from '../assets/images/stores/Acer-Predator-Triton-500-SE.jpg'
import Latitude from '../assets/images/stores/Dell-Latitude-9430.jpg'
import Envy from '../assets/images/stores/HP-Envy-15.jpg'
import Yoga from '../assets/images/stores/Lenovo-Yoga-9i.jpg'
import SurfacePro from '../assets/images/stores/Microsoft-Surface-Pro-11.jpg'
import Rating from './rating';

const stores = () => {
    return (
        <div>
            <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-4 gap-4 my-4 mx-3">
                <div className="grid gap-4">
                    <div>
                        <div className="w-full mx-auto max-w-sm rounded-lg">
                            <a href="#">
                                <img className="lg:p-8 md:p-5 p-8 rounded-[50px]" src={Asus} alt="product image" />
                            </a>
                            <div className="px-5 pb-5">
                                <a href="#">
                                    <h5 className="text-xl font-[300] tracking-tight text-gray-900 dark:text-black">
                                       Intel Core i3/i5/i7 or AMD Ryzen 3/5/7, 16GB RAM 1TB SSD 15.6-inch Full HD (1920 x 1080) Intel UHD Graphics
                                    </h5>
                                </a>
                                <div className="flex items-center mt-2.5 mb-5">
                                    {/* rating component */}
                                    <Rating/>
                                </div>
                                <div className="flex items-center cost justify-between">
                                    <span className="text-xl text-gray-900 dark:text-black">$599</span>
                                    <a href="#" className="text-white flex gap-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add     <span className="lg:block hidden">
                                        to cart
                                    </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="w-full mx-auto max-w-sm rounded-lg">
                            <a href="#">
                                <img className="lg:p-8 md:p-5 p-8 rounded-[50px]" src={Dell} alt="product image" />
                            </a>
                            <div className="px-5 pb-5">
                                <a href="#">
                                    <h5 className="text-xl font-[300] tracking-tight text-gray-900 dark:text-black">11th Gen Intel Core i7, 16GB RAM, 1TB SSD  13.3 4K UHD Display</h5>
                                </a>
                                <div className="flex items-center mt-2.5 mb-5">
                                    {/* rating component */}
                                    <Rating/>
                                </div>
                                <div className="flex items-center cost justify-between">
                                    <span className="text-xl text-gray-900 dark:text-black">$199</span>
                                    <a href="#" className="text-white flex gap-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add <span className="lg:block hidden">to cart</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="w-full mx-auto max-w-sm rounded-lg">
                            <a href="#">
                                <img className="lg:p-8 md:p-5  p-8 rounded-[50px]" src={Spectre} alt="product image" />
                            </a>
                            <div className="px-5 pb-5">
                                <a href="#">
                                    <h5 className="text-xl font-[300] tracking-tight text-gray-900 dark:text-black">13th Gen Intel Core i7, 16GB RAM 512GB SSD 13.5 3K2K OLED (3000 x 2000) Intel Iris Xe</h5>
                                </a>
                                <div className="flex items-center mt-2.5 mb-5">
                                    {/* rating component */}
                                    <Rating/>
                                </div>
                                <div className="flex items-center  cost justify-between">
                                    <span className="text-xl text-gray-900 dark:text-black">$599</span>
                                    <a href="#" className="text-white flex gap-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add <span className="lg:block hidden">to cart</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <div className="w-full mx-auto max-w-sm rounded-lg">
                            <a href="#">
                                <img className="lg:p-8 md:p-5 p-8 rounded-[50px]" src={Lenovo} alt="product image" />
                            </a>
                            <div className="px-5 pb-5">
                                <a href="#">
                                    <h5 className="text-xl font-[300] tracking-tight text-gray-900 dark:text-black">13th Gen Intel Core i7, 16GB RAM 1TB SSD 14 2.8K (2880 x 1800)  Intel Iris Xe</h5>
                                </a>
                                <div className="flex items-center mt-2.5 mb-5">
                                    {/* rating component */}
                                    <Rating/>
                                </div>
                                <div className="flex items-center  cost justify-between">
                                    <span className="text-xl text-gray-900 dark:text-black">$599</span>
                                    <a href="#" className="text-white flex gap-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add <span className="lg:block hidden">to cart</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="w-full mx-auto max-w-sm rounded-lg">
                            <a href="#">
                                <img className="lg:p-8 md:p-5 p-8  rounded-[50px]" src={Microsoft} alt="product image" />
                            </a>
                            <div className="px-5 pb-5">
                                <a href="#">
                                    <h5 className="text-xl font-[300] tracking-tight text-gray-900 dark:text-black">13th Gen Intel Core i7, 16GB RAM  512GB SSD 13.5 PixelSense (2256 x 1504) Intel Iris Xe</h5>
                                </a>
                                <div className="flex items-center mt-2.5 mb-5">
                                    {/* rating component */}
                                   <Rating/>
                                </div>
                                <div className="flex items-center cost justify-between">
                                    <span className="text-xl text-gray-900 dark:text-black">$599</span>
                                    <a href="#" className="text-white flex gap-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add <span className="lg:block hidden">to cart</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="w-full mx-auto max-w-sm rounded-lg">
                            <a href="#">
                                <img className="lg:p-8 md:p-5 p-8 rounded-[50px]" src={Rog} alt="product image" />
                            </a>
                            <div className="px-5 pb-5">
                                <a href="#">
                                    <h5 className="text-xl font-[300] tracking-tight text-gray-900 dark:text-black">AMD Ryzen 9 7945HS  32GB RAM, 1TB SSD 14 QHD+ (2560 x 1600) NVIDIA GeForce RTX 4070</h5>
                                </a>
                                <div className="flex items-center mt-2.5 mb-5">
                                    {/* rating component */}
                                    <Rating/>
                                </div>
                                <div className="flex items-center cost justify-between">
                                    <span className="text-xl text-gray-900 dark:text-black">$599</span>
                                    <a href="#" className="text-white flex gap-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add <span className="lg:block hidden">to cart</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <div className="w-full mx-auto max-w-sm rounded-lg">
                            <a href="#">
                                <img className="lg:p-8 md:p-5 p-8 rounded-[50px]" src={Razor} alt="product image" />
                            </a>
                            <div className="px-5 pb-5">
                                <a href="#">
                                    <h5 className="text-xl font-[300] tracking-tight text-gray-900 dark:text-black">13th Gen Intel Core i9 32GB RAM, 1TB SSD 15.6 QHD (2560 x 1440) 240Hz NVIDIA GeForce RTX 4080</h5>
                                </a>
                                <div className="flex items-center mt-2.5 mb-5">
                                    {/* rating component */}
                                    <Rating/>
                                </div>
                                <div className="flex items-center cost justify-between">
                                    <span className="text-xl  text-gray-900 dark:text-black">$599</span>
                                    <a href="#" className="text-white flex gap-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add <span className="lg:block hidden">to cart</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="w-full mx-auto max-w-sm rounded-lg">
                            <a href="#">
                                <img className="lg:p-8 md:p-5 p-8 rounded-[50px]" src={Predator} alt="product image" />
                            </a>
                            <div className="px-5 pb-5">
                                <a href="#">
                                    <h5 className="text-xl font-[300] tracking-tight text-gray-900 dark:text-black"> 13th Gen Intel Core i7, 32GB RAM 1TB SSD 16 WQXGA (2560 x 1600) 240Hz NVIDIA GeForce RTX 4070</h5>
                                </a>
                                <div className="flex items-center mt-2.5 mb-5">
                                    {/* rating component */}
                                    <Rating/>
                                </div>
                                <div className="flex items-center cost justify-between">
                                    <span className="text-xl text-gray-900 dark:text-black">$599</span>
                                    <a href="#" className="text-white flex gap-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add <span className="lg:block hidden">to cart</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="w-full mx-auto max-w-sm rounded-lg">
                            <a href="#">
                                <img className="lg:p-8 md:p-5 p-8 rounded-[50px]" src={Latitude} alt="product image" />
                            </a>
                            <div className="px-5 pb-5">
                                <a href="#">
                                    <h5 className="text-xl font-[300] tracking-tight text-gray-900 dark:text-black">13th Gen Intel Core i7, 16GB RAM 1TB SSD 14 4K UHD OLED (3840 x 2160) Intel Iris Xe</h5>
                                </a>
                                <div className="flex items-center mt-2.5 mb-5">
                                    {/* rating component */}
                                    <Rating/>
                                </div>
                                <div className="flex items-center cost justify-between">
                                    <span className="text-xl text-gray-900 dark:text-black">$599</span>
                                    <a href="#" className="text-white flex gap-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add <span className="lg:block hidden">to cart</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                       <div className="w-full mx-auto max-w-sm rounded-lg">
                            <a href="#">
                                <img className="lg:p-8 md:p-5 p-8 rounded-[50px]" src={Envy} alt="product image" />
                            </a>
                            <div className="px-5 pb-5">
                                <a href="#">
                                    <h5 className="text-xl font-[300] tracking-tight text-gray-900 dark:text-black">13th Gen Intel Core i7, 16GB RAM 1TB SSD 15.6 4K UHD OLED (3840 x 2160) NVIDIA GeForce RTX 3060</h5>
                                </a>
                                <div className="flex items-center mt-2.5 mb-5">
                                    {/* rating component */}
                                    <Rating/>
                                </div>
                                <div className="flex items-center cost justify-between">
                                    <span className="text-xl  text-gray-900 dark:text-black">$599</span>
                                    <a href="#" className="text-white flex gap-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add <span className="lg:block hidden">to cart</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="w-full mx-auto max-w-sm rounded-lg">
                            <a href="#">
                                <img className="lg:p-8 md:p-5 p-8 rounded-[50px]" src={Yoga} alt="product image" />
                            </a>
                            <div className="px-5 pb-5">
                                <a href="#">
                                    <h5 className="text-xl font-[300] tracking-tight text-gray-900 dark:text-black"> 13th Gen Intel Core i7, 16GB RAM 512GB SSD 14 4K UHD (3840 x 2400) Touchscreen Intel Iris Xe</h5>
                                </a>
                                <div className="flex items-center mt-2.5 mb-5">
                                    {/* rating component */}
                                    <Rating/>
                                </div>
                                <div className="flex items-center cost justify-between">
                                    <span className="text-xl  text-gray-900 dark:text-black">$599</span>
                                    <a href="#" className="text-white flex gap-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add <span className="lg:block hidden">to cart</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="w-full mx-auto max-w-sm rounded-lg">
                            <a href="#">
                                <img className="lg:p-8 md:p-5 p-8 rounded-[50px]" src={SurfacePro} alt="product image" />
                            </a>
                            <div className="px-5 pb-5">
                                <a href="#">
                                    <h5 className="text-xl font-[300] tracking-tight text-gray-900 dark:text-black">16GB RAM, 256GB SSD, 13-inch OLED display</h5>
                                </a>
                                <div className="flex items-center mt-2.5 mb-5">
                                    {/* rating component */}
                                    <Rating/>
                                </div>
                                <div className="flex items-center cost justify-between">
                                    <span className="text-xl  text-gray-900 dark:text-black">$999</span>
                                    <a href="#" className="text-white flex gap-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add <span className="lg:block hidden">to cart</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default stores;