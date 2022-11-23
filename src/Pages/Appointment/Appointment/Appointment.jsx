import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AppointmentBooking from '../AppointmentBooking/AppointmentBooking';
const Appointment = () => {
    // window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    const [selectedDate, setSelctedDate] = useState(new Date());
    console.log(selectedDate);
    return (
        <div>
            <AppointmentBanner setSelctedDate={setSelctedDate} selectedDate={selectedDate} />
            <AppointmentBooking selectedDate={selectedDate} />
        </div>
    );
};

export default Appointment;