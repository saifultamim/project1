'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { getOTP } from './server-action';
import { admin } from '../dashboard/career/server-action';

const OTP_TIMEOUT_SECONDS = 300; // Default timeout in seconds 300

const AdminOtpPage = () => {
    const [otpInput, setOtpInput] = useState("");
    const [feedbackMessage, setFeedbackMessage] = useState("");
    const [timeRemaining, setTimeRemaining] = useState(OTP_TIMEOUT_SECONDS);
    const [isUserDataValid, setIsUserDataValid] = useState(true); 
    const router = useRouter();

    const userDataString = typeof window !== "undefined" ? localStorage.getItem("admin") : null;

    const userData = userDataString ? JSON.parse(userDataString) : null;
    const adminCheck = async() => {
       const res = await admin(userData)
       if(!res.bool){
        router.push('/')
       }
    }

    useEffect(() => {
        adminCheck()
        if (!userData || !userData.email) {
            setIsUserDataValid(false); 
            router.push('/'); 
            return;
        }
        const storedOtpStartTime = localStorage.getItem("otpStartTime");
        const otpStartTime = storedOtpStartTime ? parseInt(storedOtpStartTime, 10) : Date.now();

        if (!storedOtpStartTime) {
            localStorage.setItem("otpStartTime", otpStartTime.toString());
        }

        const timerInterval = setInterval(() => {
            const elapsedTime = Math.floor((Date.now() - otpStartTime) / 1000);
            const remainingTime = OTP_TIMEOUT_SECONDS - elapsedTime;

            if (remainingTime <= 0) {
                clearInterval(timerInterval);
                handleTimeout();
                return;
            }

            setTimeRemaining(remainingTime);
        }, 1000);

        return () => clearInterval(timerInterval); 
    }, [router, userData]);

    const handleTimeout = () => {
        localStorage.clear(); 
        router.push('/'); 
    };

    const handleOtpInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setOtpInput(event.target.value);
    };

    const handleOtpSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (otpInput && userData?.email) {
            const requestPayload = { otp: otpInput, email: userData.email };

            try {
                const otpResponse = await getOTP(requestPayload); 
                if (otpResponse?.success) {
                    setTimeout(() => {
                    localStorage.removeItem("otpStartTime");
                }, 3000);
                    setFeedbackMessage("OTP verified successfully! Redirecting...");
                        router.push('/admin/dashboard'); 
                } else {
                    setFeedbackMessage("Invalid OTP. Please try again.");
                    localStorage.clear();
                    router.push('/')
                }
            } catch (error) {
                setFeedbackMessage("Something went wrong. Please try again.");
            }
        } else {
            setFeedbackMessage("Invalid input. Ensure OTP and email are provided.");
        }
    };

    if (!isUserDataValid) {
        return null; 
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-[#05163B]">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Admin OTP Verification</h2>
                <form onSubmit={handleOtpSubmit}>
                    <div className="mb-6">
                        <label
                            htmlFor="otp"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Enter OTP Code
                        </label>
                        <input
                            type="text"
                            id="otp"
                            value={otpInput}
                            onChange={handleOtpInputChange}
                            maxLength={6}
                            className="w-full px-4 py-2 bg-violet-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#05163B] focus:border-[#05163B]"
                            placeholder="Enter 6-digit OTP"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#05163B] text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Verify OTP
                    </button>
                </form>
                {feedbackMessage && (
                    <div className="mt-4 text-center text-sm font-medium text-green-600">
                        {feedbackMessage}
                    </div>
                )}
                <div className="mt-6 text-center text-red-600 text-md">
                    {timeRemaining > 0
                        ? `Time remaining: ${timeRemaining} seconds`
                        : "Time expired. Redirecting..."}
                </div>
            </div>
        </div>
    );
};

export default AdminOtpPage;
