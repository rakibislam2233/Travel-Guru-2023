import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ViewDetail = () => {
    const data = useLoaderData();
    const {id,name,photoUrl,details} = data;
    console.log(data);
    return (
        <div
        style={{
          backgroundImage: `url("${photoUrl}")`,
          width: "100%",
          height: "100vh",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="pt-20 w-full max-w-6xl h-full  mx-auto flex justify-between items-center">
        <div className="w-[50%]">
          <h3 className="text-6xl text-white font-semibold">{name}</h3>
          <p className="text-xl text-slate-100">
           {details}
          </p>
        </div>
        <div className='w-[50%] bg-slate-200 p-5 rounded-xl'>
        <div>
        <h3>orgin</h3>
        <input className='py-2 px-6 rounded w-[70%]' type="text" value={'Dhaka'} name="name" id="name" />
        </div>
        <div>
        <h3>Destination</h3>
        <input className='py-2 px-6 rounded w-[70%]' type="text" value={name} name="name" id="name" />
        </div>
        <div className='flex my-4 gap-5'>
            <div>
                <h3>Form</h3>
                <input className='py-2 px-5 rounded' type="date" name="date" id="date" />
            </div>
            <div>
                <h3>To</h3>
            <input className='py-2 px-5 rounded' type="date" name="date" id="date" />
            </div>
        </div>
        <Link to={'/hotel'}><button className='py-2 px-5 w-full bg-amber-500 rounded-full font-semibold'>Start Booking</button></Link>
        </div>
      </div>
      </div>
    );
};

export default ViewDetail;