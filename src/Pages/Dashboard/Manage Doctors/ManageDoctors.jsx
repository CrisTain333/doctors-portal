import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast, { Toaster } from "react-hot-toast";

const ManageDoctors = () => {
  const { data ,refetch} = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      const res = await fetch(`https://doctor-portal-server-three.vercel.app/doctors`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  const handleDelete = (id)=>{
    fetch(`https://doctor-portal-server-three.vercel.app/doctors/${id}`,{
        method:'DELETE',
        headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
    })
    .then(res=>res.json())
    .then(data => {
        if(data.deletedCount){
            toast.success('Deleted Successfully')
            refetch()
        };
    })

  }

  return (
    <div>
    <Toaster></Toaster>
      <h2 className="text-4xl">Doctors : {data?.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th className="dark:bg-gray-800 dark:text-gray-100"></th>
              <th className="dark:bg-gray-800 dark:text-gray-100">Image</th>
              <th className="dark:bg-gray-800 dark:text-gray-100">Name</th>
              <th className="dark:bg-gray-800 dark:text-gray-100">Email</th>
              <th className="dark:bg-gray-800 dark:text-gray-100">Specialty</th>
              <th className="dark:bg-gray-800 dark:text-gray-100">Action</th>
            </tr>
          </thead>
          <tbody className="dark:bg-gray-900 dark:text-gray-100">
            {data &&
              data?.map((e, i) => (
                <tr key={i + 1}>
                  <th className="dark:bg-gray-800 dark:text-gray-100">
                    {i + 1}
                  </th>
                  <th className="dark:bg-gray-800 dark:text-gray-100">
                  <div className="avatar  placeholder">
                      <div className="bg-neutral-focus text-neutral-content rounded-full w-16">
                        <img src={e?.img} alt="" />
                      </div>
                    </div>
                  </th>
                  <td className="dark:bg-gray-800 dark:text-gray-100">
                    
                    {e?.name}
                  </td>
                  <td className="dark:bg-gray-800 dark:text-gray-100">
                    {e?.email}
                  </td>
                  <td className="dark:bg-gray-800 dark:text-gray-100">
                    {e?.specialty}
                  </td>
                  <td className="dark:bg-gray-800 dark:text-gray-100">
                    <button className="btn bg-red-500 text-white btn-sm " onClick={()=>handleDelete(e?._id)}>Delete</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageDoctors;
