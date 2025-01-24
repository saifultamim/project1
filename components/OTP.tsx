import React, { useState } from 'react';

const OTP= () => {
    const [otp, setOtp] = useState("");
    const [message, setMessage] = useState("");

    const handleChange = (e:any) => {
        setOtp(e.target.value);
    };

    const handleSubmit = (e:any) => {
        e.preventDefault();
        if (otp.length === 6) {
           
            setMessage("OTP verified successfully!");
        } else {
            setMessage("Invalid OTP. Please enter a 6-digit code.");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center mb-6">Enter OTP</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="otp" className="block text-gray-700 font-medium mb-2">
                            OTP Code
                        </label>
                        <input
                            type="text"
                            id="otp"
                            value={otp}
                            onChange={handleChange}
                            maxLength={6}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter 6-digit OTP"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Verify OTP
                    </button>
                </form>
                {message && (
                    <div className="mt-4 text-center text-sm text-red-500 font-medium">
                        {message}
                    </div>
                )}
            </div>
        </div>
    );
};

export default OTP;
