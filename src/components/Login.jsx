import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/UserAuth";

const Login = () => {
  const { setUser } = useAppContext();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    // Simulated login
    setUser({ name: "John Doe", email });
    navigate("/user");
  };

  return (
    <div className="h-screen bg-white flex items-center justify-center overflow-hidden">
      <div className="w-[375px] h-[90vh] rounded-sm bg-[#F7F8F9] border border-gray-300 px-6 py-10 flex flex-col gap-5 text-left">
        <h1 className="text-3xl font-bold text-gray-900 leading-tight">
          Signin to your <br /> PopX account
        </h1>

        <p className="text-[1.1rem] font-[500] text-gray-500 ">
          Lorem ipsum dolor sit amet, <br />
          consectetur adipiscing elit,
        </p>

        <div className="relative w-full">
          <label className=" text-violet-600 absolute text-[12px] w-24 top-0 left-3 -translate-y-1/2 bg-[#F7F8F9] font-[600] px-[4px]  ">
            Email Address
          </label>
          <input
            type="email"
            autoComplete="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-neutral-400 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 bg-[#F7F8F9] text-black"
          />
        </div>

        <div className="relative w-full">
          <label className="text-violet-600 absolute text-[12px] w-24 top-0 left-3  -translate-y-1/2 bg-[#F7F8F9] font-[600] px-[4px]">
            Password
          </label>
          <input
            type="password"
            autoComplete="current-password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 bg-[#F7F8F9] text-black"
          />
        </div>

        <button
          onClick={handleLogin}
          className="w-full py-3 rounded-md text-white bg-neutral-400 font-semibold text-base hover:bg-[#bfbfbf] transition"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
