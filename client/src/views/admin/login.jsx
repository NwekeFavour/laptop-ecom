/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    // use for aftermath navigation
    // const navigate = useNavigate()
    const sendData = async (e) => {
        e.preventDefault()

        const data = new FormData(e.target)
        const payload =  Object.fromEntries(data)
        console.log(payload)

        // const API_URL = process.env.REACT_APP_API_URL || '';

        try {
            const response = await fetch(`/api/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });
            // Convert the response to JSON
            const data = await response.json();
            
            // Check for non-OK status
            if (!response.ok) {
                throw new Error(data.message || 'Invalid Credentials');
            }

            // Successful login
            // console.log('Login successful:', data);
            localStorage.setItem('token', data.token);
            // Redirect or perform additional actions on success
            // window.location.href = '/dashboard';
            setMessage(data.message)
            // navigate('/')
        } catch (error) {
            console.error('Login error:', error);
            console.error("error occurred while login in to your account")
        }

    };
    return (
        <div>
            <section className="bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
                    <div className="flex flex-col justify-center">
                        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white">Welcome to Laptop Haven</h1>
                        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl ">Discover Your Perfect Laptop
                        High-Performance, Sleek Designs, Unbeatable Prices
                        Shop Now
                        </p>
                        <a href="#" className="text-blue-500 hover:underline font-medium text-lg inline-flex items-center">Read more about our services
                            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                    <div>
                        <div className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8  rounded-lg shadow-xl bg-gray-800">
                            <h2 className="text-2xl font-bold text-white">
                                Sign in to Flowbite
                            </h2>
                            <form onSubmit={sendData} className="mt-8 space-y-6" >
                                <div className="mb-5">
                                    <label className="block mb-2 text-sm font-medium text-white">
                                        Your username
                                    </label>
                                    <input
                                        type="text"
                                        id="username"
                                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                        placeholder="name12@"
                                        required
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-white">Your password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" name="remember" type="checkbox" className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" required />
                                    </div>
                                    <div className="ms-3 text-sm">
                                        <label className="font-medium text-gray-500 dark:text-gray-400">Remember this device</label>
                                    </div>
                                    <a href="#" className="ms-auto text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Lost Password?</a>
                                </div>                                
                                <button type="submit" className="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                                <div className="text-sm font-medium text-white">
                                    Not registered yet? <Link to={'/register'} className="text-blue-600 hover:underline dark:text-blue-500 cursor-pointer">Create account</Link>
                                </div>
                            </form>   
                            <span className={`${message == '' ? 'hidden' : 'block'} bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300`}>
                                { message }
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Login;