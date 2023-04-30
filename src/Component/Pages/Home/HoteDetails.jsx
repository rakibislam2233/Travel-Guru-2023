import React from 'react';

const HoteDetails = ({pd}) => {
    const {id,name,photoUrl,description,rating,price} = pd;
    return (
        <div className='my-4 flex gap-2'>
            <img className='w-48' src={photoUrl} alt="" />
            <div>
                <h2>{name}</h2>
                <p>{description}</p>
                <div className='flex justify-between'>
                    <h2>{rating}</h2>
                    <p>{price}</p>
                </div>
            </div>
        </div>
    );
};

export default HoteDetails;