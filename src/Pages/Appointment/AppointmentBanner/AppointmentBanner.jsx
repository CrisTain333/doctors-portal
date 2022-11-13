import React, { useState } from "react";
import chairimage from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import bg from '../../../assets/images/bg.png';



const AppointmentBanner = ({selectedDate,setSelctedDate}) => {
  

  return (
    <div style={{
        background: `url(${bg})`,
        backgroundSize:'cover'
    }}>
      <div className="hero mt-5 py-16">
        <div className="hero-content flex-col  lg:flex-row-reverse">
          <img
            src={chairimage}
            className="rounded-lg lg:w-96 shadow-2xl lg:ml-10"
            alt=""
          />
          <div>
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelctedDate}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
