import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'

export default function ProfilePage(){
    return(
        <>
            <Navbar/>
            <section class="container mx-auto flex-col px-6 py-4 mt-5 bg-white shadow">
                <p class="text-xl font-bold text-gray-800">Profile Page</p>
            </section>

            <div className="flex justify-center">
                <div className='border-b border-gray-600'>
                    <img src="./images/user.png" className='md:w-40 md:h-40 w-24 h-24 md:mt-10 mt-4 md:ml-8 ml-16' alt="" />
                    <p className='font-semibold text-2xl'>Farhan Fadlurahman</p>
                </div>
            </div>
            <div class="flex justify-center mt-10 mb-14">
                <div class="block p-6 rounded-lg shadow-lg bg-gray-100 md:w-xl lg:w-2xl max-w-sm">
                    <h5 class="text-gray-900 text-2xl leading-tight font-medium mb-2 text-center">Daftar Beasiswa Anda</h5>
                    <div className="flex justify-center gap-4 mt-5">
                        <div className="flex justify-center ">
                            {/* beasiswa diterima */}
                            <div>
                                <div className="flex">
                                    <img src="./images/ceklist-icon.svg" className='w-5 h-5 mt-1' alt="" />
                                    <p className='font-medium'>Diterima</p>
                                    <img src="./images/ceklist-icon.svg" className='w-5 h-5 mt-1' alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='border-r-2 border-gray-400'></div>
                        <div className="flex justify-center">
                            {/* beasiswa pending */}
                            <div>
                                <div className="flex">
                                    <img src="./images/pending-icon.svg" className='w-4 h-4 mt-1' alt="" />
                                    <p className='px-1 font-medium'>Pending</p>
                                    <img src="./images/pending-icon.svg" className='w-4 h-4 mt-1' alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center"></div>
                    </div>
                </div>
            </div>

            <Footer/>
            
        </>
    )
}