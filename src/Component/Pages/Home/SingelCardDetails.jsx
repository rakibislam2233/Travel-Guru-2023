import React from 'react';
import { Link } from 'react-router-dom';

const SingelCardDetails = ({pd}) => {
    const {id,name,photoUrl,details} = pd;
    console.log(id);
    return (
       <Link to={`/place/${id}`}>
         <div className='w-full h-64 relative'>
            <img className='w-full h-full rounded-xl' src={photoUrl} alt="" />
            <h3 className='absolute bottom-5 text-xl font-semibold left-5 text-white '>{name}</h3>
        </div>
       </Link>
    );
};

export default SingelCardDetails;