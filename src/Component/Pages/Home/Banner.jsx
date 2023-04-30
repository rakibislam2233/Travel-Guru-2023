import React, { useEffect, useRef, useState } from "react";
import banner from "../../../assets/icons/Rectangle 1.png";
import SingelCardDetails from "./SingelCardDetails";
const Banner = () => {
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/place')
        .then(res => res.json())
        .then(data=>setData(data))
    },[])
    console.log(data);
  return (
    <div
      style={{
        backgroundImage: `url("${banner}")`,
        width: "100%",
        height: "100vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundColor: "black",
        backgroundBlendMode: " inherit",
      }}
    >
      <div className="pt-20 w-full max-w-6xl h-full  mx-auto flex justify-between items-center">
        <div className="w-[50%]">
          <h3 className="text-6xl text-white font-semibold">Cox's bazar</h3>
          <p className="text-xl text-slate-100">
            Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly
            for  its long natural sandy beach, and it ...
          </p>
          <button className="btn btn-warning">Booking</button>
        </div>
        <div className="w-[50%] grid grid-cols-3 gap-4">
            {
              data.map(pd=><SingelCardDetails key={pd.id} pd={pd}></SingelCardDetails>)
            }
        </div>
      </div>
    </div>
  );
};

export default Banner;
