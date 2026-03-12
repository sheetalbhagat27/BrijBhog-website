

import React, { useState } from "react";

const Login = () => {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

      {/* Popup Box */}
      <div className="bg-white w-[900px] rounded-lg shadow-lg relative flex">

        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-xl font-bold"
        >
          ✕
        </button>

        {/* Left Image */}
        <div className="w-1/2">
          <img
            src="https://images.unsplash.com/photo-1555244162-803834f70033"
            alt="catering"
            className="h-full w-full object-cover rounded-l-lg"
          />
        </div>

        {/* Right Form */}
        <div className="w-1/2 p-10">

          <h2 className="text-2xl font-semibold text-center mb-2">
            BOOK YOUR CATERING SERVICE
          </h2>

          <p className="text-gray-500 text-center mb-6 text-sm">
            Let Brij Bhog make your event memorable with delicious food and premium catering services.
          </p>

          <form className="space-y-4">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full border p-3 rounded outline-none"
            />

            <input
              type="tel"
              placeholder="Contact Number"
              className="w-full border p-3 rounded outline-none"
            />

            <input
              type="text"
              placeholder="Event Type (Wedding, Birthday, Corporate)"
              className="w-full border p-3 rounded outline-none"
            />

            <textarea
              placeholder="Tell us about your event..."
              className="w-full border p-3 rounded outline-none"
            ></textarea>

            <button
              className="w-full bg-orange-600 text-white py-3 rounded hover:bg-orange-700"
            >
              Request Catering
            </button>

          </form>

        </div>
      </div>
    </div>
  );
};

export default Login;