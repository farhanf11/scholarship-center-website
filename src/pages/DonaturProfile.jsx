import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'

function DonaturProfile(){
    const [click, setClick] = useState(false);
    return(
        <>
            <Navbar/>
            
            <section class="container mx-auto flex-col px-6 py-4 mt-5 bg-white shadow">
                <p class="text-xl font-bold text-gray-800">Donatur Profile</p>
            </section>

            <div className="flex justify-center">
                <div className='border-b border-gray-600'>
                    <img src="./images/user.png" className='md:w-40 md:h-40 w-24 h-24 md:mt-10 mt-4 md:ml-8 ml-16' alt="" />
                    <p className='font-semibold text-2xl'>NAMA DONATUR</p>
                </div>
            </div>
            <Link to='/formdonatur' className='pl-10'>
                <button class="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">Upload Beasiswa</button>
            </Link>

            <div class="container mx-auto flex-col my-5">                
                <div class="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
                    <p class="text-xl font-bold text-gray-800 mb-2">Daftar Mahasiswa</p>
                    <table class="min-w-full">
                        <thead>
                            <tr>
                                <th class="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">ID</th>
                                <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Fullname</th>
                                <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Email</th>
                                <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Phone</th>
                                <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Status</th>
                                <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Created At</th>
                                <th class="px-6 py-3 border-b-2 border-gray-300"></th>
                            </tr>
                        </thead>
                        <tbody class="bg-white">
                            <tr>
                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                    <div class="flex items-center">
                                        <div>
                                            <div class="text-sm leading-5 text-gray-800">#1</div>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                    <div class="text-sm leading-5 text-blue-900">Damilare Anjorin</div>
                                </td>
                                <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">damilareanjorin1@gmail.com</td>
                                <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">+2348106420637</td>
                                <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                                    <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                    <span aria-hidden class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                    <span class="relative text-xs">diterima</span>
                                </span>
                                </td>
                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">September 12</td>
                                <td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                                    <button class="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">Check Mahasiswa</button>
                                </td>
                          </tr>
                          <tr>
                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                    <div class="flex items-center">
                                        <div>
                                            <div class="text-sm leading-5 text-gray-800">#2</div>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                    <div class="text-sm leading-5 text-blue-900">Damilare Anjorin</div>
                                </td>
                                <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">damilareanjorin1@gmail.com</td>
                                <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">+2348106420637</td>
                                <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                                    <span class="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
                                    <span aria-hidden class="absolute inset-0 bg-orange-200 opacity-50 rounded-full"></span>
                                    <span class="relative text-xs">ditolak</span>
                                </span>
                                </td>
                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">September 12</td>
                                <td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                                    <Link to='/listpendaftar'>
                                        <button class="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">Check Mahasiswa</button>
                                    </Link>
                                </td>
                          </tr>
                        </tbody>
                    </table>
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

            <Footer/>
            
        </>
    )
}

export default DonaturProfile;