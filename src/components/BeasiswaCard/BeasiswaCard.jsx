import React from 'react';
import { Link } from 'react-router-dom';

const BeasiswaCard = (props) =>{
    return(
        <>
            <Link to='/detailbeasiswa'>
                <div className='mb-5 border-2 rounded-md px-2'>
                    <div className="flex gap-2">
                        <img className='w-10 h-10' src="http://placeimg.com/200/150/tech" alt="" />
                        <div className='max-w-xs'>
                            <p className='font-semibold text-medium'>{props.title}</p>
                            <p className='desc text-gray-500 text-sm'>{props.desc}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}


export default BeasiswaCard;