// import React from "react";
// import Logo from "@/assets/Logo2.png";
// const ClientTemplate = () => {
//   return (
//     <div>
      
//         <div className="bg-gray-100 flex items-center justify-center p-6 rounded-xl">
//         {/* Logo */}
//         <div className="flex justify-center mb-6">
//           <img
//             src={Logo}
//             alt="Website Logo"
//             className="h-16"
//           />
//         </div>

//         {/* Heading */}
//         <h1 className="text-4xl font-bold text-gray-800 mb-4">
//           Welcome
//         </h1>

//         {/* Client Name */}
//         <h2 className="text-5xl font-extrabold text-blue-600 mb-6">
//           Ankit Sharma
//         </h2>

//         {/* Description
//         <p className="text-gray-600 text-lg">
//           We are happy to work with <span className="font-bold text-blue-600">Ankit Sharma</span>.  
//           This project is specially designed for our respected client.
//         </p> */}


//         {/* Button
//         <button className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
//           View Project
//         </button> */}

//       </div>

//     </div>
//   );
// };

// export default ClientTemplate;

import React from "react";
import Logo from "@/assets/Logo2.png";

const ClientTemplate = () => {
  return (
    <div className="flex items-center justify-center w-full p-4">

      <div className="bg-white shadow-xl rounded-2xl p-6 md:p-8 lg:p-10 max-w-sm md:max-w-md w-full text-center border border-gray-100">

        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img
            src={Logo}
            alt="Website Logo"
            className="h-12 md:h-14"
          />
        </div>

        {/* Heading */}
        {/* <h1 className="text-xl md:text-2xl font-semibold text-gray-700 mb-2">
          Welcome
        </h1> */}

        {/* Client Name */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-600 mb-4">
          Ankit Sharma
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
          We proudly provide premium catering services for{" "}
          <span >
            Our Clients</span>, 
          offering delicious food and excellent service for special events.
        </p>

      </div>

    </div>
  );
};

export default ClientTemplate;