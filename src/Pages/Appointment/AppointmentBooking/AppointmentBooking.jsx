import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AppoinmentCard from './AppoinmentCard';
import AppoinmentModel from '../AppointmentModel/AppoinmentModel';
import { Toaster } from 'react-hot-toast';
const AppointmentBooking = ({selectedDate}) => {
    const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatment,setTreatment]=useState(null);
    

 useEffect(()=>{
    fetch('option.json')
    .then(res=>res.json())
    .then(data => {
        setAppointmentOptions(data)
    });
 },[])


    return (
        <section className='my-14'>
        <Toaster
  position="top-right"
  reverseOrder={false}
/>
              <p className="text-2xl text-secondary text-center font-semibold">Available Appointments on {format(selectedDate,"PP")}</p>
              <div className='grid gap-x-9 gap-y-9 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10'>
                {
                    appointmentOptions.map(option =>{
                        return(
                            <AppoinmentCard key={option._id} option={option} setTreatment={setTreatment} />
                        )
                    })
                }
              </div>
              {
                treatment &&
                <AppoinmentModel
                    selectedDate={selectedDate}
                    treatment={treatment}
                    setTreatment={setTreatment}
                ></AppoinmentModel>
            }
        </section>
    );
};

export default AppointmentBooking;