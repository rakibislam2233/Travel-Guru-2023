import React from "react";
import { useLoaderData } from "react-router-dom";
import HoteDetails from "./HoteDetails";

const Booking = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="w-full max-w-7xl  grid grid-cols-2 mx-auto gap-5 pt-20 my-5">
      <div>
        {data.map((pd) => (
          <HoteDetails key={pd.id} pd={pd}></HoteDetails>
        ))}
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28681.590138590567!2d88.44536996431158!3d26.02705170364274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e4c00fae515037%3A0xc354ad492e9e6874!2sThakurgaon!5e0!3m2!1sen!2sbd!4v1682879937507!5m2!1sen!2sbd"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Booking;
