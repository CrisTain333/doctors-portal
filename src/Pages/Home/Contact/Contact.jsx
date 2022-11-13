import React from "react";
import lgl from "../../../assets/images/appointment.png";
import PrimaryButton from "../../../Shared/PrimaryButton/PrimaryButton";

const Contact = () => {
  return (
    <div   style={{
        background: `url(${lgl})`
    }} className='rounded '>
 <div className="flex flex-col w-full max-w-md mx-auto p-6 rounded-md sm:p-10  dark:bg-gray-900 dark:text-gray-100">
      <div className="mb-8 text-center">
        <p className="text-xl font-bold text-primary">
        Contact Us
        </p>
        <h1 className="my-3 text-3xl font-bold text-white">Stay connected with us</h1>
      </div>
      <form
        className="space-y-12 ng-untouched ng-pristine ng-valid"
      >
        <div className="space-y-4">
          <div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email address"
              className="w-full px-3 py-2 border rounded-md dark:border-primary dark:bg-gray-900 dark:text-gray-100 shadow-lg dark:shadow-neutral"
            />
          </div>
          <div>
            <div className="flex justify-between mb-2">
            </div>
            <input
              type="text"
              name="password"
              placeholder="Subject"
              className="w-full px-3 py-2 border rounded-md dark:border-primary dark:bg-gray-900 dark:text-gray-100 shadow-lg dark:shadow-neutral"
            />
          </div>
          <div>
            <textarea name="" id="" cols="30" rows="5" className="w-full px-3 py-2 border rounded-md dark:border-primary dark:bg-gray-900 dark:text-gray-100 shadow-lg dark:shadow-neutral" placeholder="Your Message" >

            </textarea>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-center">
          <PrimaryButton className="dark:bg-violet-400 dark:text-gray-900">Submit</PrimaryButton>
          </div>
        </div>
      </form>
    </div>
    </div>
   
  );
};

export default Contact;
