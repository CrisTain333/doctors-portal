import React from 'react';
import Banner from '../Banner/Banner';
import Info from '../Info/Info';
import bg from '../../../assets/images/bg.png';
import Services from '../Services/Services';
import Kid from '../KidSection/Kid';
import MakeAppointment from '../MakeAppoinment/MakeAppoinment';
import Testimonial from '../Testimonial/Testimonial';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div className=''>
           <div style={{
            background: `url(${bg})`,
            backgroundSize:'cover'
        }} className='rounded-lg'>
           <Banner></Banner>
           <Info />
           </div>
           <Services></Services>
           <Kid></Kid>
           <MakeAppointment></MakeAppointment>
           <Testimonial></Testimonial>
           <Contact></Contact>
           
        </div>
    );
};

export default Home;