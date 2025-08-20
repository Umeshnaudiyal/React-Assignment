import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/UserAuth";

const Register = () => {
    const { setUser } = useAppContext();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullName: "Marry Doe",
        phone: "Marry Doe",
        email: "MarryDoe@gmail.com",
        password: "Marry Doe",
        company: "Marry Doe",
        isAgency: "yes",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.fullName || !formData.email || !formData.phone || !formData.password || !formData.isAgency) {
            alert("Please fill all required fields.");
            return;
        }
        setUser({ name: formData.fullName, email: formData.email });
        navigate("/user");
    };

    return (
        <div className="min-h-screen bg-white flex items-center justify-center overflow-hidden">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-sm h-[90vh] relative  border border-gray-200 bg-[#F7F8F9] rounded-lg p-6 shadow-sm"
            >
                {/* Heading */}
                <h2 className="text-[1.8rem] font-bold text-[#1D2939] ">Create your</h2>
                <h3 className="text-[1.8rem] font-bold text-[#1D2939] mb-6">PopX account</h3>

                {/* Full Name */}
                <div className="mb-5 relative w-full">
                    <label className=" text-violet-600 absolute text-[12px] top-0 left-3  -translate-y-1/2 bg-[#F7F8F9] font-[600] px-[4px]" htmlFor="fullName">
                        Full Name<span className="text-red-500">*</span>
                    </label>
                    <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        placeholder="name"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full bg-[#F7F8F9] text-black border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[#8000ff]"
                    />

                </div>

                {/* Phone Number */}
                <div className="mb-5 relative w-full">
                    <label className=" text-violet-600 absolute text-[12px] top-0 left-3  -translate-y-1/2 bg-[#F7F8F9] font-[600] px-[4px]" htmlFor="phone">
                        Phone number<span className="text-red-500">*</span>
                    </label>
                    <input
                        id="phone"
                        name="phone"
                        type="text"
                        placeholder="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-[#F7F8F9] text-black border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[#8000ff]"
                    />
                </div>

                {/* Email Address */}
                <div className="w-full relative mb-5">
                    <label className=" text-violet-600 absolute text-[12px] top-0 left-3  -translate-y-1/2 bg-[#F7F8F9] font-[600] px-[4px] " htmlFor="email">
                        Email address<span className="text-red-500">*</span>
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-[#F7F8F9] text-black border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[#8000ff]" />
                </div>

                {/* Password */}
                <div className="relative w-full mb-5">
                    <label className="text-violet-600 absolute text-[12px] top-0 left-3  -translate-y-1/2 bg-[#F7F8F9] font-[600] px-[4px] " htmlFor="password">
                        Password<span className="text-red-500">*</span>
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="password"
                        required
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full bg-[#F7F8F9]  text-black border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[#8000ff]"
                    />
                </div>

                {/* Company Name */}
                <div className="relative w-full mb-5">
                    <label className="text-violet-600 absolute text-[12px] top-0 left-3  -translate-y-1/2 bg-[#F7F8F9]  font-[600] px-[4px] " htmlFor="company">
                        Company name
                    </label>
                    <input
                        id="company"
                        name="company"
                        type="text"
                        placeholder="company name"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full bg-[#F7F8F9]  text-black border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[#8000ff]"
                    />
                </div>

                {/* Are you an Agency? */}
                <div className="text-black width-full ">
                    <span className="block text-sm font-medium mb-1">
                        Are you an Agency?<span className="text-red-500">*</span>
                    </span>
                    <div className="flex gap-4 mt-1">
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                name="isAgency"
                                value="yes"
                                checked={formData.isAgency === "yes"}
                                onChange={handleChange}
                                className="hidden peer"
                                required
                            />
                            <div class="w-4 h-4 border-2 border-gray-400 rounded-full peer-checked:bg-[#8000ff]"></div>
                            <span className="ml-2 text-sm text-black">Yes</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                name="isAgency"
                                value="no"
                                checked={formData.isAgency === "no"}
                                onChange={handleChange}
                                className="hidden peer"
                                required
                            />
                            <div class="w-4 h-4 border-2 border-gray-400 rounded-full peer-checked:bg-[#8000ff]"></div>
                            <span className="ml-2 text-sm text-black">No</span>
                        </label>
                    </div>
                </div>

                {/* Submit Button */}

                <button
                    type="submit"
                    className=" bg-[#8000ff] hover:bg-[#7000e0] text-white font-semibold py-2 rounded-md transition absolute bottom-5 left-4 right-4"
                >
                    Create Account
                </button>
            </form>
        </div>
    );
};

export default Register;
