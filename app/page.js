"use client";
import React, { useState } from 'react';

export default function StartScreen() {
  const [showAdminLogin, setShowAdminLogin] = useState(false);

  const handleAdminLoginClick = () => {
    setShowAdminLogin(true);
  };

  const handleBackToStart = () => {
    setShowAdminLogin(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200 relative font-outfit">
      {showAdminLogin ? (
        // Admin Login Form
        <div className="min-h-screen flex items-center justify-center bg-white w-full">
          {/* Container for the login form with border and padding */}
          <div className="p-6 border border-gray-300 rounded-lg shadow-md w-full max-w-md">
            {/* NeXTLearn Title */}
            <h1 className="text-4xl font-bold text-[#626AE7] mb-4 text-center">NeXTLearn</h1>
            
            {/* Admin Login Header */}
            <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">Admin Login</h2>
            
            {/* Login Form - Centered content */}
            <form className="space-y-4 flex flex-col items-center">
              {/* Username Field */}
              <div className="w-full">
                <label htmlFor="username" className="block text-gray-700 font-medium mb-1">
                  Username
                </label>
                <input
                  type="email"
                  id="username"
                  placeholder="Enter your email address"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#626AE7]"
                />
              </div>
              
              {/* Password Field */}
              <div className="w-full">
                <label htmlFor="password" className="block text-gray-700 font-medium mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#626AE7]"
                />
              </div>
              
              {/* Login Button */}
              <button
                type="submit"
                className="w-32 bg-[#626AE7] text-white py-2 rounded-md hover:bg-[#5259B9] transition-colors font-bold"
              >
                Login
              </button>
            </form>
          </div>
          
          {/* Start Screen Button (Top-Right Corner) */}
          <button
            onClick={handleBackToStart}
            className="absolute top-4 right-4 bg-[#626AE7] text-white px-4 py-2 rounded-md hover:bg-[#5259B9] transition-colors font-bold"
          >
            Start Screen
          </button>
          
          {/* Footer (Made with Visily) */}
          <div className="absolute bottom-4 text-[#626AE7] text-sm">
            Made with <span className="font-bold">Visily</span>
          </div>
        </div>
      ) : (
        // Start Screen Content
        <>
          {/* Admin Login Button (Top-Right Corner) */}
          <button
            onClick={handleAdminLoginClick}
            className="absolute top-5 right-5 bg-[#626AE7] text-white px-5 py-3 rounded-md hover:bg-[#512a8a] transition-colors duration-300 font-bold text-lg border-2 border-[#636AE8]"
          >
            Admin Login
          </button>

          {/* Main Content */}
          <div className="text-center">
            {/* NeXTLearn Title */}
            <h1 className="text-8xl font-bold text-[#626AE7] mb-6">NeXTLearn</h1>
            
            {/* Subtitle */}
            <p className="text-2xl text-black font-bold mb-11">
              AI Based Specialized LMS Study Material Platform
            </p>
            
            {/* Get Started Button */}
            <a
              href="/dashboard"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-primary focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Get Started
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </>
      )}
    </div>
  );
}






// "use client"
// import React from 'react';
// import Link from 'next/link'; // For navigation between pagesimport { useState } from 'react';
// import { useState } from 'react';
// export default function AdminLogin() {
//   const [loginSuccess, setLoginSuccess] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // You can add real authentication logic here
//     setLoginSuccess(true);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-white">
//       {/* Container for the login form */}
//       <div className="p-6 border border-gray-300 rounded-lg shadow-md w-full max-w-md relative">
//         {/* NeXTLearn Title */}
//         <h1 className="text-4xl font-bold text-[#626AE7] mb-4 text-center">NeXTLearn</h1>

//         {/* Admin Login Header */}
//         <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">Admin Login</h2>

//         {/* Success Message */}
//         {loginSuccess && (
//           <div className="mb-4 p-2 bg-green-100 text-green-700 rounded text-center font-medium">
//             Login Successful!
//           </div>
//         )}

//         {/* Login Form */}
//         <form onSubmit={handleSubmit} className="space-y-4 flex flex-col items-center">
//           {/* Username Field */}
//           <div className="w-full">
//             <label htmlFor="username" className="block text-gray-700 font-medium mb-1">
//               Username
//             </label>
//             <input
//               type="email"
//               id="username"
//               placeholder="Enter your email address"
//               className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#626AE7]"
//             />
//           </div>

//           {/* Password Field */}
//           <div className="w-full">
//             <label htmlFor="password" className="block text-gray-700 font-medium mb-1">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               placeholder="Enter your password"
//               className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#626AE7]"
//             />
//           </div>

//           {/* Login Button */}
//           <button
//             type="submit"
//             className="w-32 bg-[#626AE7] text-white py-2 rounded-md hover:bg-[#5259B9] transition-colors font-bold"
//           >
//             Login
//           </button>
//         </form>
//       </div>

//       {/* Start Screen Button */}
//       <a
//         href="/start"
//         className="absolute top-4 right-4 bg-[#626AE7] text-white px-4 py-2 rounded-md hover:bg-[#5259B9] transition-colors font-bold"
//       >
//         Start Screen
//       </a>

//       {/* Footer */}
//       <div className="absolute bottom-4 text-[#626AE7] text-sm">
//         Made with <span className="font-bold">Visily</span>
//       </div>
//     </div>
//   );
// }



















// import { Button } from "@/components/ui/button";
// import { UserButton } from "@clerk/nextjs";
// import Image from "next/image";

// export default function Home() {
//   return (
//     <div>
//       <h2>NeXTLearn is An AI Based Specialized LMS SAAS Application</h2>
//       <Button>Login</Button>

//       <UserButton/>
//     </div>
//   );
// }
