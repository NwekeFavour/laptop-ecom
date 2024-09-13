/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function Register() {
    const [toRegister, setToLogin] = useState(true);
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

   const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== repeatPassword) {
        setError("Passwords do not match");
        return;
    }

    try {
        const response = await fetch('https://laptop-ecom-979v.vercel.app//register', {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                username,
                email,
                password
            })
        });

        const responseText = await response.text();

        // Debugging: log the response text
        console.log("Response Text:", responseText);

        // Check if the response is not empty before parsing to JSON
        if (responseText) {
            const data = JSON.parse(responseText);
            
            if (!response.ok) {
                throw new Error(data.message || 'An error occurred');
            }
            setSuccessMessage(data.message)

            console.log(data, "UserRegistered");
        } else {
            throw new Error("Empty response from the server");
        }

    } catch (error) {
        console.error('Error:', error);
        setError(error.message || 'An error occurred while registering');
    }
};


    return (
        <div>
            <section className="bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
                    <div className="flex flex-col justify-center">
                        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none  md:text-5xl lg:text-6xl text-white">Welcome to Laptop Haven</h1>
                        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl ">Discover Your Perfect Laptop High-Performance, Sleek Designs, Unbeatable Prices Shop Now</p>
                        <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">Read more about our services
                            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                    <div className='w-full lg:max-w-xl p-6 space-y-8 sm:p-8 rounded-lg shadow-xl bg-gray-800'>
                        <div>
                            <h2 className="text-2xl font-bold text-white">
                            Register
                            </h2>
                        </div>
                        <form onSubmit={handleRegister} className="max-w-md mx-auto">
                            <div>
                                <label className="block mb-2 text-sm font-medium text-white">Your email</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
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
                            <div className="mb-5">
                                <label className="block mb-2 text-sm font-medium text-white">
                                    Your password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="mb-5">
                                <label className="block mb-2 text-sm font-medium text-white">
                                    Confirm password
                                </label>
                                <input
                                    type="password"
                                    id="repeat-password"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    required
                                    value={repeatPassword}
                                    onChange={(e) => setRepeatPassword(e.target.value)}
                                />
                            </div>
                            <div className="flex items-start mb-5">
                                <div className="flex items-center h-5">
                                    <input
                                        id="terms"
                                        type="checkbox"
                                        value=""
                                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                                        required
                                    />
                                </div>
                                <label className="ms-2 text-sm font-medium text-gray-300">
                                    I agree with the{' '}
                                    <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">
                                    terms and conditions
                                    </a>
                                </label>
                            </div>
                            {error && <p className="text-red-500">{error}</p>}
                            {successMessage && <p className="text-green-500">{successMessage}</p>}
                            <button
                                type="submit"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Register new account
                            </button>
                            <div className="text-sm font-medium text-white">
                                Already registered? <Link to={'/login'} className="text-blue-600 hover:underline dark:text-blue-500 cursor-pointer">Login to your account</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Register;
