import React from "react";
import Footer from "../components/Footer/Footer";
import "../App.css";
import Navbar from "../components/Navbar/Navbar";
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
            <Navbar />
            <section className="flex justify-center bg-cyan-800 p-5">
                <div className="md:container md:mx-auto">

                    <div className="flex-initial w-128 p-8 container mx-auto">
                        <h2 className="text-4xl pb-9 pt-6 font-bold text-white">
                            The Best Way to Find Your Scholarship!
                        </h2>

                        <p className="text-xl  justifiy- center pl-4 text-white mr-14">
                            Schoter is free website to help you find your scholarship for yout better future.
                            There is so many scholarship for yout future, but they can't find it.
                            Because of that, we created this website to help yout find your scholarship.
                            And also we will help you to find your scholarship and make your education better.
                            More than 10,000 scholarships are available for you to find.
                            You can change your future from this website.
                            Small changes can make big changes.
                        </p>
                    </div>
                </div>

                {/* FORM LOGIN */}
                    <div className="w-full md:w-1/2 py-6 px-5 md:px-8 bg-white rounded-lg bg-white rounded-lg">
                        <div className="flex justify-center">
                            <img src="../images/logo3.png" className="w-60" />
                        </div>
                        <div className="text-center mb-10">
                            <h1 className="font-bold text-4xl text-gray-900">LOGIN</h1>
                            <p>Login Your Account</p>
                        </div>
                        <div>
                            <div className="flex -mx-3">
                                <div className="w-full mb-5">
                                    <label for="" className="text-xs font-semibold px-1">Email</label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                        <input type="email" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="johnsmith@example.com" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex -mx-3">
                                <div className="w-full mb-5">
                                    <label for="" className="text-xs font-semibold px-1">Password</label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                        <input type="password" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="************" />
                                    </div>
                                </div>
                            </div>
                            <label for="" className="text-xs font-semibold px-1">Role</label>
                            <div className="mb-5 text-center  flex items-center justify-center pl-9 -mx-7">
                                <select className="w-full -ml-10 pl-11 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500 " aria-label="Default select example">
                                    <option selected value="1">Donatur</option>
                                    <option value="2">Mahasiswa</option>
                                </select>
                            </div>
                            <div className="flex gap-1">
                                <p>Belum memiliki akun? klik </p> 
                                <Link to='/register'><p className="text-blue-500 font-medium"> Daftar</p></Link>
                            </div>
                            <div className="flex -mx-3 mt-5">
                                <div className="w-full px-3 mb-5">
                                    <button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">SIGN IN</button>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>

            {/* 3 POPULAR SCHOLARSHIP */}
            <section className="flex justify-center bg-gray-200 p-5">
                <div className="px-4 pb-10 mx-auto sm:max-w-xl md:max-w-full md:px-24 lg:px-8 lg:py-10">
                    <h1 className="text-5xl pb-9 font-bold text-left">
                        Top 3 Popular Scholarships
                    </h1>
                    <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                        <div>
                            <Link
                                to="/"
                                aria-label="Article"
                                className="inline-block text-2xl pb-8 font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                                Whatever, just feed me
                            </Link>
                            <div className="flex h-96 items-center justify-center bg-indigo-50 px-4">
                                <div className="max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl">
                                    <img src="https://i.imgur.com/5dmBrx6.jpg" alt="plant" className="h-auto w-full" />
                                    <div className="p-5">
                                        <p className="text-medium mb-5 text-gray-700">Well, aren't you going up to the lake tonight, you've been planning it for two weeks.</p>
                                        <button className="w-full rounded-md bg-indigo-600  py-2 text-indigo-100 hover:bg-indigo-500 hover:shadow-md duration-75">See More</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <Link
                                to="/"
                                aria-label="Article"
                                className="inline-block text-2xl pb-8 font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                                Whatever, just feed me
                            </Link>
                            <div className="flex h-96 items-center justify-center bg-indigo-50 px-4">
                                <div className="max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl">
                                    <img src="https://i.imgur.com/5dmBrx6.jpg" alt="plant" className="h-auto w-full" />
                                    <div className="p-5">
                                        <p className="text-medium mb-5 text-gray-700">Well, aren't you going up to the lake tonight, you've been planning it for two weeks.</p>
                                        <button className="w-full rounded-md bg-indigo-600  py-2 text-indigo-100 hover:bg-indigo-500 hover:shadow-md duration-75">See More</button>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div>
                            <Link
                                to="/"
                                aria-label="Article"
                                className="inline-block text-2xl pb-8 font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                                Whatever, just feed me
                            </Link>
                            <div className="flex h-96 items-center justify-center bg-indigo-50 px-4">
                                <div className="max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl">
                                    <img src="https://i.imgur.com/5dmBrx6.jpg" alt="plant" className="h-auto w-full" />
                                    <div className="p-5">
                                        <p className="text-medium mb-5 text-gray-700">Well, aren't you going up to the lake tonight, you've been planning it for two weeks.</p>
                                        <button className="w-full rounded-md bg-indigo-600  py-2 text-indigo-100 hover:bg-indigo-500 hover:shadow-md duration-75">See More</button>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
