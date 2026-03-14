

// import React from "react";

// const featuresLeft = [
//   {
//     title: "AUTHENTIC INDIAN FLAVORS",
//     desc: "At Brij Bhog, we serve delicious traditional Indian dishes prepared by experienced chefs using fresh ingredients and authentic recipes.",
//   },
//   {
//     title: "CUSTOMIZED CATERING MENUS",
//     desc: "We design catering menus according to your event type, guest preferences, and budget to make every celebration special.",
//   },
//   {
//     title: "QUALITY & HYGIENE",
//     desc: "Food safety and hygiene are our top priorities. Every dish is prepared with strict quality standards and cleanliness.",
//   },
// ];

// const featuresRight = [
//   {
//     title: "EXPERIENCED CATERING TEAM",
//     desc: "Our professional catering team ensures smooth service, timely food delivery, and excellent guest hospitality at every event.",
//   },
//   {
//     title: "PERFECT FOR EVERY OCCASION",
//     desc: "From weddings and receptions to corporate events and birthday parties, Brij Bhog provides catering for all occasions.",
//   },
//   {
//     title: "MEMORABLE DINING EXPERIENCE",
//     desc: "We focus on presentation, taste, and service to create a memorable dining experience for you and your guests.",
//   },
// ];

// const WhyChooseUs = () => {
//   return (
//     <section className="bg-[#faf7f2] py-16 md:py-20 px-5 md:px-8">

//       {/* Heading */}
//       <div className="text-center max-w-3xl mx-auto mb-12 md:mb-14">

//         <p className="text-gray-500 italic mb-2 text-sm md:text-base">
//           Premium Catering Services
//         </p>

//         <h2 className="text-3xl md:text-4xl font-serif tracking-wide mb-4">
//           WHY CHOOSE BRIJ BHOG?
//         </h2>

//         {/* <p className="text-gray-600 text-sm md:text-base">
//           Brij Bhog Catering brings delicious food, elegant presentation,
//           and professional hospitality to every celebration. Whether it's
//           a wedding, corporate event, birthday party, or family gathering,
//           we ensure a delightful culinary experience for you and your guests.
//         </p> */}

//       </div>

//       {/* Main Layout */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center">

//         {/* LEFT FEATURES */}
//         <div className="space-y-8 md:space-y-10">
//           {featuresLeft.map((item, index) => (
//             <div key={index} className="text-center md:text-right">
//               <h3 className="font-semibold tracking-wide text-base md:text-lg mb-2">
//                 {item.title}
//               </h3>

//               <p className="text-gray-600 text-sm leading-relaxed">
//                 {item.desc}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* CENTER IMAGE */}
//         <div className="flex justify-center order-first md:order-none">
//           <img
//             src="https://images.unsplash.com/photo-1555244162-803834f70033"
//             alt="Brij Bhog Catering"
//             className="rounded-lg shadow-lg w-[260px] sm:w-[300px] md:w-[320px] lg:w-[360px] object-cover"
//           />
//         </div>

//         {/* RIGHT FEATURES */}
//         <div className="space-y-8 md:space-y-10">
//           {featuresRight.map((item, index) => (
//             <div key={index} className="text-center md:text-left">
//               <h3 className="font-semibold tracking-wide text-base md:text-lg mb-2">
//                 {item.title}
//               </h3>

//               <p className="text-gray-600 text-sm leading-relaxed">
//                 {item.desc}
//               </p>
//             </div>
//           ))}
//         </div>

//       </div>

//     </section>
//   );
// };

// export default WhyChooseUs;

import React from "react";
import ClientTemplate from "../pages/ClientTemplate";
const featuresLeft = [
  {
    title: "AUTHENTIC INDIAN FLAVORS",
    desc: "At Brij Bhog, we serve delicious traditional Indian dishes prepared by experienced chefs using fresh ingredients and authentic recipes.",
  },
  {
    title: "CUSTOMIZED CATERING MENUS",
    desc: "We design catering menus according to your event type, guest preferences, and budget to make every celebration special.",
  },
  {
    title: "QUALITY & HYGIENE",
    desc: "Food safety and hygiene are our top priorities. Every dish is prepared with strict quality standards and cleanliness.",
  },
];

const featuresRight = [
  {
    title: "EXPERIENCED CATERING TEAM",
    desc: "Our professional catering team ensures smooth service and timely food delivery at every event.",
  },
  {
    title: "PERFECT FOR EVERY OCCASION",
    desc: "From weddings and receptions to corporate events and birthday parties, Brij Bhog provides catering for all occasions.",
  },
  {
    title: "MEMORABLE DINING EXPERIENCE",
    desc: "We focus on presentation and taste to create a memorable dining experience for you and your guests.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-[#faf7f2] py-16 md:py-20 px-5 md:px-8">

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12 md:mb-14">
        <p className="text-gray-500 italic mb-2 text-sm md:text-base">
          Premium Catering Services
        </p>

        <h2 className="text-3xl md:text-4xl font-serif tracking-wide mb-4">
          WHY CHOOSE BRIJ BHOG?
        </h2>
      </div>

      {/* Main Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center">

        {/* LEFT FEATURES */}
        <div className="space-y-8 md:space-y-10">
          {featuresLeft.map((item, index) => (
            <div key={index} className="text-center md:text-right">
              <h3 className="font-semibold tracking-wide text-base md:text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CENTER COMPONENT (Image removed) */}
        <div className="flex justify-center">
          <ClientTemplate />
        </div>

        {/* RIGHT FEATURES */}
        <div className="space-y-8 md:space-y-10">
          {featuresRight.map((item, index) => (
            <div key={index} className="text-center md:text-left">
              <h3 className="font-semibold tracking-wide text-base md:text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
};

export default WhyChooseUs;