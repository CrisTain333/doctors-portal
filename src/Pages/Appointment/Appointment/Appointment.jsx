import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AppointmentBooking from '../AppointmentBooking/AppointmentBooking';
const Appointment = () => {
    const [selectedDate, setSelctedDate] = useState(new Date());
    return (
        <div>
            <AppointmentBanner setSelctedDate={setSelctedDate} selectedDate={selectedDate} />
            <AppointmentBooking selectedDate={selectedDate} />
        </div>
    );
};

export default Appointment;