import React from "react";
import chairimage from "../../../assets/images/chair.png";
import PrimaryButton from "../../../Shared/PrimaryButton/PrimaryButton";

const Banner = () => {
  return (
    <div>
       <div className="hero mt-5">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chairimage} className="rounded-lg lg:w-1/2 shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton>Getting Started</PrimaryButton>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Banner;
