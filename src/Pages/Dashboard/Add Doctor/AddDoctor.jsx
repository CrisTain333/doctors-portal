import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { ColorRing, Dna, ThreeDots } from "react-loader-spinner";

const AddDoctor = () => {
  const [loading, setLoading] = useState(false);
  const { data: specialties, isLoading } = useQuery({
    queryKey: ["specialty"],
    queryFn: async () => {
      const res = await fetch(
        "https://doctor-portal-server-three.vercel.app/appointmentSpecialty"
      );
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Dna></Dna>;
  }

  const handleAddDoctor = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const specialty = form.specialty.value;
    const image = form.image.files[0];
    const formData = new FormData();
    formData.append("image", image);
    const uri = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_api}`;
    setLoading(true);
    fetch(uri, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        const img = data.data.display_url;
        const doctor = {
          name,
          email,
          specialty,
          img,
        };
        fetch("https://doctor-portal-server-three.vercel.app/doctors", {
          method: "POST",
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
            "content-type": "application/json",
          },
          body: JSON.stringify(doctor),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              toast.success("Doctor added successfully");
              setLoading(false);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      });
  };

  return (
    <div className="w-96 mx-auto p-7  dark:bg-gray-900 dark:text-gray-100 shadow-lg dark:shadow-primary">
      <Toaster></Toaster>
      <h2 className="text-4xl">Add A Doctor</h2>
      <form onSubmit={handleAddDoctor}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text dark:bg-gray-900 dark:text-gray-100">
              Name
            </span>
          </label>
          <input
            type="text"
            name="name"
            className="w-full border rounded p-2 outline-none focus:shadow-outline text-black"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text dark:bg-gray-900 dark:text-gray-100">
              Email
            </span>
          </label>
          <input
            type="email"
            name="email"
            className="w-full border rounded p-2 outline-none focus:shadow-outline text-black"
          />
        </div>
        <div className="form-control w-full max-w-xs ">
          <label className="label">
            {" "}
            <span className="label-text dark:bg-gray-900 dark:text-gray-100">
              Specialty
            </span>
          </label>
          <select
            name="specialty"
            className="w-full border rounded p-2 outline-none focus:shadow-outline text-black"
          >
            {specialties.map((specialty) => (
              <option key={specialty._id} value={specialty.name} >
                {specialty.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text dark:bg-gray-900 dark:text-gray-100">
              Photo
            </span>
          </label>
          <input
            type="file"
            name="image"
            className="w-full border rounded p-2 outline-none focus:shadow-outline text-black dark:text-white "
          />
        </div>
        <button
          type="submit"
          className="bg-gradient-to-r from-primary to-secondary text-white w-full mt-4 btn"
        >
          {loading ? (
            <ThreeDots
              height="50"
              width="50"
              radius="9"
              color="#ff006e"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          ) : (
            "Add a Doctor"
          )}
        </button>
      </form>
    </div>
  );
};

/**
 * Three places to store images
 * 1. Third party image hosting server
 * 2. File system of your server
 * 3. mongodb (database)
 */

export default AddDoctor;
