import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import Row from "../Row";
import { Dna } from "react-loader-spinner";
import AuthContext from "../../../Context/Context";

const MyAppointment = () => {
  const { user} = useContext(AuthContext);
  const email = user?.email;
  let count = 1;

  const { data: bookings = [], } = useQuery({
    queryKey: ["bookings", email],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/bookings?email=${email}`, {
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
            </tr>
          </thead>
          <tbody className="dark:bg-gray-900 dark:text-gray-100">
            {bookings?.map((e) => {
              return <Row key={count + 1} count={count++} data={e} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
