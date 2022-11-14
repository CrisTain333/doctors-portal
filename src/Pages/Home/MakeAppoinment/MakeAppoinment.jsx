import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../Shared/PrimaryButton/PrimaryButton';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { Link } from 'react-router-dom';
// ..
AOS.init();

const MakeAppointment = () => {
    return (
        <section className={`mt-24 rounded-md `}
        style={{
            background: `url(${appointment})`
        }}
            >
            <div className="hero dark:bg-gray-900">
                <div className="hero-content p-px flex-col lg:flex-row">
                    <img src={doctor} alt="" className="-mt-32 hidden md:block lg:w-1/2 rounded-lg "/>
                    <div className='sm:p-5  p-1'>
                        <h4 className='text-lg text-primary font-bold'>Appointment</h4>
                        <h1 className=" text-white text-4xl font-bold">Make an appointment Today</h1>
                        <p className="text-white py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <Link to='/appointment'>
                        <PrimaryButton>Appointment</PrimaryButton>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;