import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const Service = ({service}) => {
    const {name, description , img} = service;
    return (
        <div className="card bg-base-100 shadow-xl  dark:bg-gray-800 dark:text-gray-100 dark:shadow-primary"  data-aos="fade-up" data-aos-duration="2000">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Service;