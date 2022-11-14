import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const InfoCard = ({card}) => {
    const { name, description, icon, bgClass } = card;
    return (
        <div className={`card text-white p-6 md:card-side shadow-xl ${bgClass}  `} data-aos="flip-up" data-aos-duration="2000">
            <figure>
                <img src={icon} alt="Movie" />
            </figure>
            <div className="card-body">
                <h2 className="card-title ">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;