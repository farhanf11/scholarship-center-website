import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'

function DonaturPage() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <Navbar />

            <section class="container mx-auto flex-col px-6 py-4 mt-5 bg-white shadow">
                <p class="text-xl font-bold text-gray-800">Daftar Donatur</p>
            </section>

            <section class="container mx-auto">
                <div className="flex justify-center ">
                    <div>
                        <a href="{donatur}" className="my-5 flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row hover:bg-gray-100">
                            <Link
                                to='/donatur1'
                                className='nav'
                                onClick={closeMobileMenu}
                            >
                                <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg px-5" src="./images/logo.png" alt="" />
                                <div className="flex flex-col justify-between p-4 leading-normal">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">NAMA DONATUR</h5>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat alias nulla omnis provident deleniti impedit numquam. Dolore a, aperiam deleniti nihil alias obcaecati fugit nam molestias modi natus recusandae adipisci!</p>
                                </div>
                            </Link>
                        </a>

                        <a href="{donatur}" className="my-5 flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row hover:bg-gray-100">
                            <Link
                                to='/donatur1'
                                className='nav'
                                onClick={closeMobileMenu}
                            >
                                <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg px-5" src="./images/logo.png" alt="" />
                                <div className="flex flex-col justify-between p-4 leading-normal">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">NAMA DONATUR</h5>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat alias nulla omnis provident deleniti impedit numquam. Dolore a, aperiam deleniti nihil alias obcaecati fugit nam molestias modi natus recusandae adipisci!</p>
                                </div>
                            </Link>
                        </a>

                        <a href="{donatur}" className="my-5 flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row hover:bg-gray-100">
                            <Link
                                to='/donatur1'
                                className='nav'
                                onClick={closeMobileMenu}
                            >
                                <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg px-5" src="./images/logo.png" alt="" />
                                <div className="flex flex-col justify-between p-4 leading-normal">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">NAMA DONATUR</h5>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat alias nulla omnis provident deleniti impedit numquam. Dolore a, aperiam deleniti nihil alias obcaecati fugit nam molestias modi natus recusandae adipisci!</p>
                                </div>
                            </Link>
                        </a>

                        <ol className="flex justify-center space-x-1 text-xs font-medium my-5">
                            <li>
                                <a href="" className="inline-flex items-center justify-center w-8 h-8 border border-gray-100 rounded">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                </a>
                            </li>
                            <li className="block w-8 h-8 leading-8 text-center text-white bg-blue-600 border-blue-600 rounded">
                                <a href="" className="block w-8 h-8 leading-8 text-center border border-gray-100 rounded"> 1 </a>
                            </li>
                            <li>
                                <a href="" className="block w-8 h-8 leading-8 text-center border border-gray-100 rounded"> 2 </a>
                            </li>
                            <li>
                                <a href="" className="block w-8 h-8 leading-8 text-center border border-gray-100 rounded"> 3 </a>
                            </li>
                            <li>
                                <a href="" className="block w-8 h-8 leading-8 text-center border border-gray-100 rounded"> 4 </a>
                            </li>
                            <li>
                                <a href="" className="inline-flex items-center justify-center w-8 h-8 border border-gray-100 rounded">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                    </svg>
                                </a>
                            </li>
                        </ol>
                    </div>

                    
                </div>
            </section>
            <Footer />

        </>
    )
}

export default DonaturPage