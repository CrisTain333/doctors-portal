import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { Dna } from "react-loader-spinner";
import { Link } from "react-router-dom";
import AuthContext from "../../../Context/Context";

const MyAppointment = () => {
  const { user } = useContext(AuthContext);

  const { data: bookings = [], isLoading } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(`https://doctor-portal-server-three.vercel.app/bookings?email=${user?.email}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

 

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th className="dark:bg-gray-800 dark:text-gray-100"></th>
              <th className="dark:bg-gray-800 dark:text-gray-100">Name</th>
              <th className="dark:bg-gray-800 dark:text-gray-100">Service</th>
              <th className="dark:bg-gray-800 dark:text-gray-100">Time</th>
              <th className="dark:bg-gray-800 dark:text-gray-100">Date</th>
              <th className="dark:bg-gray-800 dark:text-gray-100">Price</th>
              <th className="dark:bg-gray-800 dark:text-gray-100">Payment</th>
            </tr>
          </thead>
          <tbody className="dark:bg-gray-900 dark:text-gray-100">
          
            {bookings &&
              bookings?.map((e, i) => (
                <tr key={i + 1}>
                  <th className="dark:bg-gray-800 dark:text-gray-100">
                    {i + 1}
                  </th>
                  <td className="dark:bg-gray-800 dark:text-gray-100">
                    {e?.patient}
                  </td>
                  <td className="dark:bg-gray-800 dark:text-gray-100">
                    {e?.treatmentName}
                  </td>
                  <td className="dark:bg-gray-800 dark:text-gray-100">
                    {e?.slot}
                  </td>
                  <td className="dark:bg-gray-800 dark:text-gray-100">
                    {e?.appointmentDate}
                  </td>
                  <td className="dark:bg-gray-800 dark:text-gray-100">
                    ${e?.price}
                  </td>
                  <td className="dark:bg-gray-800 dark:text-gray-100">
                    {e.price && !e.paid && (
                      <>
                        <Link to={`/dashboard/payment/${e._id}`}>
                          <button className="btn bg-red-500 text-white btn-sm">
                            Pay
                          </button>
                        </Link>
                      </>
                    )}
                    {e.price && e.paid && (
                      <span className="text-white btn btn-sm  bg-green-500 ">
                        Paid
                      </span>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
