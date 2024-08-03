/* eslint-disable no-unused-vars */
import React from 'react';

const discover = () => {
    return (
        <div className='relative  top-[150px] left-[100px] w-[400px]  h-[300px] '>
            <div id="sticky-banner" tabIndex="-1" className=" top-0 start-0 z-50 flex justify-between  border-b border-gray-200 bg-gray-50 dark:bg-white px-3 py-3">
                <div className="discover">
                    <div className="text-[25px] text-gray-500 dark:text-gray-400">
                        <span className='font-bold'>Discover Your Perfect Laptop
                            High-Performance, Sleek Designs, Unbeatable Prices
                            Shop Now
                        </span>
                        <p className='text-[20px] font-normal'>
                            Featured Laptops
                            Explore our top picks for performance, design, and value.
                        </p>
                        <div className='my-2'>
                            <button type="button" className="py-2.5 px-9 me-2 mb-2 text-lg font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-white dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default discover;





