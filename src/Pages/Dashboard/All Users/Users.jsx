import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast, { Toaster } from "react-hot-toast";

const Users = () => {
  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(`https://doctor-portal-server-three.vercel.app/users`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  const handleMakeAdmin = (id) => {
    fetch(`https://doctor-portal-server-three.vercel.app/users/admin/${id}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Admin Created Successfully");
          refetch();
        }
      })
  };
  const handleDelete = id =>{
    fetch(`https://doctor-portal-server-three.vercel.app/users/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        
        if (data.deletedCount > 0) {
          toast.success("User Deleted Successfully");
          refetch();
        }
      });


  }

  return (
    <div>
      <h2 className="text-3xl">All Users</h2>
      <div className="overflow-x-auto">
        <Toaster position="top-center" reverseOrder={false} />
        <table className="table w-full">
          <thead>
            <tr>
              <th className="dark:bg-gray-800 dark:text-gray-100"></th>
              <th className="dark:bg-gray-800 dark:text-gray-100">Name</th>
              <th className="dark:bg-gray-800 dark:text-gray-100">Email</th>
              <th className="dark:bg-gray-800 dark:text-gray-100">Admin</th>
              <th className="dark:bg-gray-800 dark:text-gray-100">Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={user._id}>
                <th className="dark:bg-gray-800 dark:text-gray-100">{i + 1}</th>
                <td className="dark:bg-gray-800 dark:text-gray-100">
                  {user.name}
                </td>
                <td className="dark:bg-gray-800 dark:text-gray-100">
                  {user.email}
                </td>
                <td className="dark:bg-gray-800 dark:text-gray-100">
                  {user?.role !== "admin" ? (
                    <button
                      onClick={() => handleMakeAdmin(user._id)}
                      className="btn btn-xs text-white bg-green-500"
                    >
                      Make Admin
                    </button>
                  ) : (
                    <span className="text-green-500">Admin</span>
                  )}
                </td>
                <td className="dark:bg-gray-800 dark:text-gray-100">
                  <button
                    className="btn btn-xs bg-red-500 text-white"
                    onClick={() => handleDelete(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
