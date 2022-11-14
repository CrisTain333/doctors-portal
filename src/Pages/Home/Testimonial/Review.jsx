import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
const Review = ({ review }) => {
    const { name, img, review: userReview, location } = review;
    return (
        <div className="card  shadow-lg dark:shadow-primary mt-9" data-aos="zoom-out" data-aos-duration="1000">
            <div className="card-body">
                <p>{userReview}</p>
                <div className="flex items-center mt-6">
                    <div className="avatar mr-6">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt="" />
                        </div>
                    </div>
                    <div>
                        <h5 className="text-lg">{name}</h5>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;