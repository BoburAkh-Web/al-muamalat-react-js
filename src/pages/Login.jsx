import { toast } from "react-toastify";
import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../hooks/useAuth";

function Login() {
  const auth = useAuth();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    auth.login(data, () => {
      toast.error("Email yoki parol xato");
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white shadow-2xl rounded-3xl flex flex-col md:flex-row w-full max-w-4xl overflow-hidden min-h-[500px]">
        {/* Chap tomon: Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <img src="/logo.png" alt="Logo" className="w-32 mb-8" />
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Get started</h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <input
                {...register("email", { required: "Email is required" })}
                type="email"
                placeholder="Enter your email"
                className="w-full p-4 border border-gray-300 rounded-xl outline-none focus:border-teal-600 transition"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <input
                {...register("password", { required: "Password is required" })}
                type="password"
                placeholder="Password"
                className="w-full p-4 border border-gray-300 rounded-xl outline-none focus:border-teal-600 transition"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-teal-600 text-white font-bold py-4 rounded-xl hover:bg-teal-700 transition duration-300"
            >
              Sign in
            </button>
          </form>

          <p className="text-center text-gray-500 mt-6 cursor-pointer hover:underline">
            Create a new account !
          </p>
        </div>

        {/* O'ng tomon: Rasm va Matn */}
        <div className="hidden md:flex md:w-1/2 bg-teal-700 p-12 flex-col justify-center items-center text-white text-center">
          {/* Bu yerga rasmni qo'shasiz */}
          <div className="mb-8">
            {/* Illustration placeholder */}
            <div className="w-64 h-64 bg-white/10 rounded-full flex items-center justify-center">
              <span className="text-6xl">✨</span>
            </div>
          </div>
          <h3 className="text-2xl font-semibold leading-relaxed">
            Welcome to Al Muamalat – <br /> Empowering Your Journey in Islamic
            Finance
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Login;
