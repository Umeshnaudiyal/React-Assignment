import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-[375px] mx-auto h-[90vh] flex flex-col justify-end px-6 py-10 bg-gray-100 rounded-sm shadow-md border border-neutral-300">
        <div>
          <h1 className="text-neutral-900 text-[26px] font-bold leading-[1] mb-2">
            Welcome to PopX
          </h1>
          <p className="text-[1.1rem] text-[#667085] tracking-[0.01em] mb-6">
            Lorem ipsum dolor sit amet, <br />
            consectetur adipiscing elit,
          </p>

          <button
            className="w-full bg-[#6C25FF] text-[#f5f3f3] text-[1rem] tracking-[0.01em] font-semibold py-3 rounded-md mb-3"
            onClick={() => navigate('/Register')}
          >
            Create Account
          </button>

          <button
            className="w-full bg-[#cebafb] text-[#282727] text-sm font-semibold py-3 rounded-md"
            onClick={() => navigate('/login')}
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>




  );
}