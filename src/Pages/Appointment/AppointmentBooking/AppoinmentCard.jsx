import React from 'react';

const AppoinmentCard = ({option,setTreatment}) => {
    const {name,slots , price} =  option
    return (
        <div className="card w-full bg-base-100 shadow-md  text-center  dark:bg-gray-900 dark:text-gray-100 dark:shadow-primary">
        <div className="card-body">
          <h2 className="card-title justify-center">{name}</h2>
          <p>{slots.length > 0?slots[0]:'Try Another Day'}</p>
          <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
          <p>Price : ${price}</p>
          <div className="card-actions justify-center">
          <label
                        disabled={slots.length === 0}
                        htmlFor="booking-modal"
                        className="btn btn-primary text-white"
                        onClick={() => setTreatment(option)}
                    >Book Appointment</label>
          </div>
        </div>
      </div>
    );
};

export default AppoinmentCard;