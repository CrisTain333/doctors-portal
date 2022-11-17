import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import AppoinmentCard from "./AppoinmentCard";
import AppoinmentModel from "../AppointmentModel/AppoinmentModel";
import { Toaster } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import { Dna } from "react-loader-spinner";

const AppointmentBooking = ({ selectedDate }) => {
  // const [appointmentOptions, setAppointmentOptions] = useState([]);
  const [treatment, setTreatment] = useState(null);
  const date = format(selectedDate, "PP");

  const {
    data: appointmentOptions = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["appointmentOptions", date],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/appointmentOptions?date=${date}`
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex  justify-center items-center">
        <Dna
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </div>
    );
  }

  return (
    <section className="my-14">
      <Toaster position="top-right" reverseOrder={false} />
      <p className="text-2xl text-secondary text-center font-semibold">
        Available Appointments on {format(selectedDate, "PP")}
      </p>
      <div className="grid gap-x-9 gap-y-9 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
        {appointmentOptions.map((option) => {
          return (
            <AppoinmentCard
              key={option._id}
              option={option}
              setTreatment={setTreatment}
            />
          );
        })}
      </div>
      {treatment && (
        <AppoinmentModel
          selectedDate={selectedDate}
          treatment={treatment}
          setTreatment={setTreatment}
          refetch={refetch}
        ></AppoinmentModel>
      )}
    </section>
  );
};

export default AppointmentBooking;
