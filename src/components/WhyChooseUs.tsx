// // import { Heart, Award, Eye, Utensils, Users, Clock } from "lucide-react";

// // const reasons = [
// //   { icon: Heart, title: "Personalized Approach", desc: "Every event is unique — we customize menus, décor, and service to match your vision." },
// //   { icon: Award, title: "Professional Expertise", desc: "Our seasoned team brings decades of catering and event management experience." },
// //   { icon: Eye, title: "Attention to Detail", desc: "From table settings to garnishes, nothing escapes our meticulous planning." },
// //   { icon: Utensils, title: "Exquisite Cuisine", desc: "Authentic flavors crafted from the finest ingredients by our master chefs." },
// //   { icon: Users, title: "Dedicated Team", desc: "A passionate crew ensuring smooth execution from setup to cleanup." },
// //   { icon: Clock, title: "Timely Delivery", desc: "Punctual service you can always rely on, no matter the scale." },
// // ];

// // const WhyChooseUs = () => {
// //   return (
// //     <section className="section-padding maroon-gradient">
// //       <div className="container-wide">
// //         <div className="text-center mb-14">
// //           <span className="text-accent font-body text-sm font-semibold tracking-[0.2em] uppercase">
// //             Why Brij Bhog
// //           </span>
// //           <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mt-3">
// //             Why Choose Us
// //           </h2>
// //         </div>

// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
// //           {reasons.map((r) => (
// //             <div
// //               key={r.title}
// //               className="bg-primary-foreground/5 backdrop-blur-sm rounded-lg p-8 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors duration-300"
// //             >
// //               <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center mb-5">
// //                 <r.icon className="text-accent-foreground" size={22} />
// //               </div>
// //               <h3 className="font-display text-xl font-semibold text-primary-foreground mb-3">
// //                 {r.title}
// //               </h3>
// //               <p className="text-primary-foreground/60 text-sm leading-relaxed">
// //                 {r.desc}
// //               </p>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default WhyChooseUs;
// import React from "react";

// const featuresLeft = [
//   {
//     title: "PROFESSIONAL EXPERTISE",
//     desc: "Our team comprises skilled professionals with vast experience in event planning, ensuring a smooth and successful event every time.",
//   },
//   {
//     title: "PERSONALIZED APPROACH",
//     desc: "We believe in understanding your unique preferences and vision to create customized events tailored to your individual needs.",
//   },
//   {
//     title: "ATTENTION TO DETAIL",
//     desc: "Every detail matters to us. We meticulously plan and execute each element, leaving no room for errors.",
//   },
// ];

// const featuresRight = [
//   {
//     title: "VENDOR RELATIONSHIPS",
//     desc: "We have established strong relationships with reputable vendors, enabling us to offer high-quality services at competitive prices.",
//   },
//   {
//     title: "STRESS-FREE EXPERIENCE",
//     desc: "Sit back, relax, and enjoy your event while we handle all the logistics and planning.",
//   },
//   {
//     title: "EXCEPTIONAL GUEST EXPERIENCE",
//     desc: "Hospitality is at the heart of our service ensuring every guest feels welcomed and valued.",
//   },
// ];

// const WhyChooseUs = () => {
//   return (
//     <section className="bg-[#faf7f2] py-20 px-6">
      
//       {/* Heading */}
//       <div className="text-center max-w-3xl mx-auto mb-14">
//         <p className="text-gray-500 italic mb-2">
//           Unparalleled Quality, Trusted Services
//         </p>

//         <h2 className="text-4xl font-serif tracking-wide mb-4">
//           WHY CHOOSE US?
//         </h2>

//         <p className="text-gray-600 text-sm">
//           At weddings, having a trusted event organizer is vital. Our services
//           offer stress-free planning, budget management, timely execution,
//           innovative ideas, and tailored solutions to create unforgettable
//           wedding experiences.
//         </p>
//       </div>

//       {/* Main Layout */}
//       <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 items-center">

//         {/* LEFT FEATURES */}
//         <div className="space-y-10">
//           {featuresLeft.map((item, index) => (
//             <div key={index} className="text-right">
//               <h3 className="font-semibold tracking-wide text-lg mb-2">
//                 {item.title}
//               </h3>

//               <p className="text-gray-600 text-sm leading-relaxed">
//                 {item.desc}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* CENTER IMAGE */}
//         <div className="flex justify-center">
//           <img
//             src="https://images.unsplash.com/photo-1519225421980-715cb0215aed"
//             alt="wedding decor"
//             className="rounded-lg shadow-lg w-[320px] object-cover"
//           />
//         </div>

//         {/* RIGHT FEATURES */}
//         <div className="space-y-10">
//           {featuresRight.map((item, index) => (
//             <div key={index}>
//               <h3 className="font-semibold tracking-wide text-lg mb-2">
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
    desc: "Our professional catering team ensures smooth service, timely food delivery, and excellent guest hospitality at every event.",
  },
  {
    title: "PERFECT FOR EVERY OCCASION",
    desc: "From weddings and receptions to corporate events and birthday parties, Brij Bhog provides catering for all occasions.",
  },
  {
    title: "MEMORABLE DINING EXPERIENCE",
    desc: "We focus on presentation, taste, and service to create a memorable dining experience for you and your guests.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-[#faf7f2] py-20 px-6">

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-14">

        <p className="text-gray-500 italic mb-2">
          Premium Catering Services
        </p>

        <h2 className="text-4xl font-serif tracking-wide mb-4">
          WHY CHOOSE BRIJ BHOG?
        </h2>

        <p className="text-gray-600 text-sm">
          Brij Bhog Catering brings delicious food, elegant presentation,
          and professional hospitality to every celebration. Whether it's
          a wedding, corporate event, birthday party, or family gathering,
          we ensure a delightful culinary experience for you and your guests.
        </p>

      </div>

      {/* Main Layout */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 items-center">

        {/* LEFT FEATURES */}
        <div className="space-y-10">
          {featuresLeft.map((item, index) => (
            <div key={index} className="text-right">
              <h3 className="font-semibold tracking-wide text-lg mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CENTER IMAGE */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1555244162-803834f70033"
            alt="Brij Bhog Catering"
            className="rounded-lg shadow-lg w-[320px] object-cover"
          />
        </div>

        {/* RIGHT FEATURES */}
        <div className="space-y-10">
          {featuresRight.map((item, index) => (
            <div key={index}>
              <h3 className="font-semibold tracking-wide text-lg mb-2">
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