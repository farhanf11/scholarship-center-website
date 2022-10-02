import React, {Component} from 'react';
import BeasiswaCard from '../components/BeasiswaCard/BeasiswaCard';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'

const DetailBeasiswa = (props) => {
    return (
        <>
            <Navbar />
            <section class="container mx-auto flex-col px-6 py-4 mt-5 bg-white shadow">
                <p class="text-xl font-bold text-gray-800">Detail Beasiswa</p>
            </section>

            <section class="container mx-auto flex flex-wrap py-3">
                <article class="flex flex-col shadow my-4">
                    <a href="#" class="mx-auto">
                        <img class="hover:opacity-75" src="http://placeimg.com/200/150/tech"/>
                    </a>
                    <div class="bg-white flex flex-col justify-start p-6">
                        <a href="#" class="text-3xl font-bold hover:text-gray-700 pb-4">{props.title}</a>
                        <h1 class="text-2xl font-bold pb-3">Penjelasan Beasiswa</h1>
                        <p class="pb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Curabitur vel neque non libero suscipit suscipit eu eu urna. Proin bibendum 
                            urna mattis ante malesuada ultrices. Etiam in turpis vitae elit dictum aliquet. 
                            Donec mattis risus in turpis dapibus, eget tempus sem tincidunt. Orci varius 
                            natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                            In est enim, imperdiet sed ornare quis, pellentesque vel risus. Nunc vitae 
                            vestibulum turpis. Quisque eget eleifend urna. Etiam et vulputate purus, ut egestas sem. 
                            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; 
                            Duis quis neque non urna venenatis mollis et at massa. Pellentesque sem lacus, malesuada 
                            vel hendrerit molestie, mollis vel elit.
                        </p>
                        <ul className="mt-8 border-2 border-white border-opacity-25 divide-y-2 divide-white sm:grid sm:divide-y-0 sm:divide-x-2 sm:border-l-0 sm:border-r-0 divide-opacity-25 sm:grid-cols-3">
                            <li className="flex items-center justify-center p-8">
                                <p className="text-3xl font-extrabold">100+</p>
                                <p className="mt-1 text-xl font-medium"> Mahasiswa Daftar</p>
                            </li>
                            <li className="flex items-center justify-center p-8">
                                <p className="text-3xl font-extrabold">6</p>
                                <p className="mt-1 text-xl font-medium"> Bulan</p>
                            </li>
                            <li className="flex items-center justify-center p-8">
                                <p className="text-3xl font-extrabold">8</p>
                                <p className="mt-1 text-xl font-medium"> Juta</p>
                            </li>
                        </ul>

                        <div className='flex items-center justify-end'>
                            <a className="flex items-center justify-end w-40 px-8 py-3 text-white bg-indigo-600 border border-indigo-600 rounded hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring mr-20 mb-3">
                                <Link to='/formbeasiswa'>
                                    <span className="text-sm font-medium"> DAFTAR </span>
                                </Link>
                                <svg className="w-5 h-5 ml-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <hr />                      
                </article>
            </section>
            <Footer />

        </>
    )
}

export default DetailBeasiswa