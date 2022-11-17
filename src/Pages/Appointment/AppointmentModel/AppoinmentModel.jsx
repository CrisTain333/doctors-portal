import React, { useContext } from "react";
import { format } from "date-fns";
import toast from "react-hot-toast";
import AuthContext from "../../../Context/Context";

const AppoinmentModel = ({
  treatment,
  setTreatment,
  selectedDate,
  refetch,
}) => {
  console.log(treatment);
  const { name, slots } = treatment;
  const treatmentName = name;
  const { user } = useContext(AuthContext);
  const date = format(selectedDate, "PP");
  

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const booking = {
      appointmentDate: date,
      treatmentName,
      patient: name,
      slot,
      email,
      phone,
    };
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
            setTreatment(null);
            toast.success('Booking confirmed');
            refetch();
        }
        else{
            toast.error(data.message);
        }
      });
  };

  return (
    <div className=" ">
      <input
        type="checkbox"
        id="booking-modal"
        className="modal-toggle dark:bg-gray-900 dark:text-gray-100"
      />
      <div className="modal">
        <div className="modal-box relative dark:bg-gray-900 dark:text-gray-100">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-10 "
          >
            <input
              type="text"
              disabled
              value={date}
              className="input w-full input-bordered  dark:bg-gray-900 dark:text-gray-100"
            />
            <select name="slot" className="select dark:border-red-50 select-bordered w-full dark:bg-gray-900 dark:text-gray-100">
              {slots.map((slot, i) => (
                <option value={slot} key={i}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className="input w-full input-bordered dark:border-red-50 dark:bg-gray-900 dark:text-gray-100"
              defaultValue={user?.displayName}
              readOnly
            />
            <input
              name="email"
              type="email"
              defaultValue={user?.email}
              readOnly
              placeholder="Email Address"
              className="input w-full input-bordered dark:border-red-50 dark:bg-gray-900 dark:text-gray-100"
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input w-full input-bordered dark:border-red-50 dark:bg-gray-900 dark:text-gray-100"
            />
            <br />
            <input
              className="btn btn-primary bg-gradient-to-r from-primary to-secondary w-full dark:border-red-50 dark:bg-gray-900 dark:text-gray-100"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AppoinmentModel;
