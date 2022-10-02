import React from 'react';
import '../../App.css';

export default function Footer() {
    return (
        <>
            <footer className="bg-indigo-100 h-full w-full">
                <div className='bg-cyan-900'>
                    <p className="font-medium text-2xl text-white flex justify-center">Scholarship Center</p>
                    <div className="flex justify-center">
                        <div className="flex justify-around gap-7 mb-3 mt-3">
                            <img src='https://cdn-icons-png.flaticon.com/128/747/747562.png' alt='' className='w-5' />
                            <img src="https://cdn-icons-png.flaticon.com/128/3781/3781736.png" alt="" className='w-5 h-5' />
                        </div>
                    </div>
                    <p className="text-sm text-white flex justify-center">2022 Copyright Scholarhsip Center. All Rights Reserved.</p>
                </div>
            </footer>
        </>
    )
}