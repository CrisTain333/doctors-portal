import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/30697801_9-removebg-preview.png";
import googleLogo from "../../assets/google.png";
import AuthContext from "../../Context/Context";

const Login = () => {
  const { loginUser, googleLogin } = useContext(AuthContext);

  const [error, setError] = useState("");
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        const currentUser = {
          email: user.email,
        };
        fetch("https://doctor-portal-server-three.vercel.app/jwt",{
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("token", data);
            navigate(from, { replace: true });
          });
      })
      .catch((err) => {
        const errorMessage = err.message;
        setError(errorMessage);
      });

    
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        navigate(from, { replace: true });
      })
      .catch((err) => {
        const errorMessaage = err.message;
        setError(errorMessaage);
      });
  };

  return (
    <div>
      <div className="max-w-xl mx-auto mb-6 dark:bg-gray-900 dark:text-gray-100">
        <div className="flex items-center ">
          <div className="w-full  rounded shadow-lg dark:shadow-primary p-8 m-4 md:max-w-sm md:mx-auto">
            <span className="flex justify-center items-center  w-full text-xl uppercase font-bold mb-4 text-center">
              <img src={logo} alt="brandImage" className="w-8 mr-2" />
              Login
            </span>
            <form className="mb-4" onSubmit={handleSubmit}>
              <div className="mb-4 md:w-full">
                <label htmlFor="email" className="block text-xs mb-1">
                  Email
                </label>
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="mb-6 md:w-full">
                <label htmlFor="password" className="block text-xs mb-1">
                  Password
                </label>
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  required
                />
              </div>
              <input
                type="submit"
                className="bg-primary bg-gradient-to-r from-primary to-secondary text-white uppercase text-sm font-semibold px-4 py-2 rounded w-full"
                value="Login"
              />
            </form>
            <Link to='/passwordreset'>
            <p className="text-primary underline ">Forgot Password ? </p>
            </Link>

            <p className="text-red-600">{error}</p>

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
                onClick={handleGoogleLogin}
                className="p-3 rounded-sm"
              >
                <img src={googleLogo} className="w-8 h-8" alt="" />
              </button>
            </div>
            <p className="text-xs text-center sm:px-6 py-2 dark:text-gray-400">
              Dont have an account?
              <Link
                rel="noopener noreferrer"
                to="/singup"
                className="underline text-secondary px-2"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
