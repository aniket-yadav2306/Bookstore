import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form"; // ✅ THIS LINE WAS MISSING
import Login from "./Login";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
  const location=useLocation()
  const navigate = useNavigate();
  const from=location.state?.from?.pathname || "/"

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
  await axios
      .post("http://localhost:4001/user/signup", userInfo)


      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Signup Successfull");
          navigate(from, { replace: true });
         
        }
        localStorage.setItem("Users",JSON.stringify(res.data.user))
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
           toast.error("Error:"+err.response.data.message);
        }
      });
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-50 dark:bg-slate-900">
      <div className="border-2 shadow-md p-6 rounded-md relative bg-white dark:bg-slate-800 dark:text-white">
        <Link
          to="/"
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          aria-label="Close"
        >
          ✕
        </Link>
        <h3 className="font-bold text-xl mb-4 text-center">Signup</h3>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your fullname"
              className="w-80 px-3 py-2 border rounded-md outline-none dark:bg-slate-700"
              {...register("fullname", { required: true })}
            />
            <br />
            {errors.fullname && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-80 px-3 py-2 border rounded-md outline-none dark:bg-slate-700"
              {...register("email", { required: true })}
            />
            <br />
            {errors.email && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-80 px-3 py-2 border rounded-md outline-none dark:bg-slate-700"
              {...register("password", { required: true })}
            />
            <br />
            {errors.password && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-pink-500 text-white rounded-md px-3 py-2 hover:bg-pink-700 transition"
          >
            Signup
          </button>

          {/* Login Link */}
          <p className="text-sm text-center">
            Have an account?{" "}
            <button
              type="button"
              className="underline text-blue-500"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              Login
            </button>
            <Login />
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
