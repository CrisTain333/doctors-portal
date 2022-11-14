import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/30697801_9-removebg-preview.png";
import googleLogo from "../../assets/google.png";
import AuthContext from "../../Context/Context";

const SingUp = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const [error, setError] = useState("");

  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    if (password.length < 6) {
      setError("Password Must Be > 6");
      return;
    }
    if (password === "123456") {
      setError("Very Week Password");
      return;
    }
    createUser(email, password)
      .then((result) => {
        updateUser(name);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        const errorMessaage = err.message;
        setError(errorMessaage);
      });
  };

  //   const handleGoogleLogin = () => {
  //     googleLogin()
  //     .then(result =>{const user = result.user;
  //       const currentUser = {
  //         email: user.email,
  //       };

  //       fetch("https://picoritamy-server.vercel.app/jwt",{
  //         method: "POST",
  //         headers: {
  //           "content-type": "application/json",
  //         },
  //         body: JSON.stringify(currentUser),
  //       })
  //         .then((res) => res.json())
  //         .then((data) => {
  //           localStorage.setItem("token", data);
  //           navigate(from, { replace: true });
  //         });

  //     })
  //     .catch(err=>{
  //         const errorMessaage = err.message;
  //         setError(errorMessaage);

  //     })
  //   };

  return (
    <div>
      <div className="max-w-xl mx-auto mb-6  dark:bg-gray-900 dark:text-gray-100">
        <div className="flex items-center ">
          <div className="w-full  rounded shadow-lg dark:shadow-primary p-8 m-4 md:max-w-sm md:mx-auto">
            <span className="flex justify-center items-center  w-full text-xl uppercase font-bold mb-4 text-center">
              <img src={logo} alt="brandImage" className="w-8 mr-2" />
              SING UP
            </span>
            <form className="mb-4" onSubmit={handleSubmit}>
              <div className="mb-2 md:w-full">
                <label htmlFor="email" className="block text-xs mb-1">
                  Name
                </label>
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline text-black"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-2 md:w-full">
                <label htmlFor="email" className="block text-xs mb-1">
                  Email
                </label>
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline text-black"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="mb-2 md:w-full">
                <label htmlFor="password" className="block text-xs mb-1">
                  Password
                </label>
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline text-black"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  required
                />
              </div>
              <p className="text-red-600">{error}</p>
              <input
                type="submit"
                className="bg-primary bg-gradient-to-r from-primary to-secondary text-white uppercase text-sm font-semibold px-4 py-2 rounded w-full"
                value="Sing Up"
              />
            </form>

            <div className="flex items-center pt-4 space-x-1">
              <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
              <p className="px-3 text-sm dark:text-gray-400">
                Login with social accounts
              </p>
              <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
            </div>
            <div className="flex justify-center space-x-4">
              <button
                aria-label="Log in with Google"
                // onClick={handleGoogleLogin}
                className="p-3 rounded-sm"
              >
                <img src={googleLogo} className="w-8 h-8" alt="" />
              </button>
            </div>
            <p className="text-xs text-center sm:px-6 py-2 dark:text-gray-400">
              All Ready have an account?
              <Link
                rel="noopener noreferrer"
                to="/login"
                className="underline text-primary px-2"
              >
                Sign In
              </Link>
            </p>
          </div>
          {/* <Toaster position="top-center" reverseOrder={false} /> */}
        </div>
      </div>
    </div>
  );
};

export default SingUp;
