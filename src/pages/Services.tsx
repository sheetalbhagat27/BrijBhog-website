// // import { Link } from "react-router-dom";
// // import { Button } from "@/components/ui/button";
// // import { ArrowRight } from "lucide-react";
// // import birthdayImg from "@/assets/birthday-party.jpg";
// // import weddingImg from "@/assets/wedding-decor.jpg";
// // import kittyImg from "@/assets/kitty-party.jpg";
// // import retirementImg from "@/assets/retirement-party.jpg";
// // import corporateImg from "@/assets/corporate-event.jpg";
// // import WhyChooseUs from "@/components/WhyChooseUs";
// // import { useEffect } from "react";

// // const events = [
// //   {
// //     title: "Birthday Decoration & Catering",
// //     image: birthdayImg,
// //     desc: "Make every birthday unforgettable with our vibrant decorations, themed setups, and delicious food packages tailored for all ages.",
// //     features: ["Themed decorations", "Custom cakes", "Kids-friendly menus", "Entertainment coordination"],
// //   },
// //   {
// //     title: "Wedding Decoration & Catering",
// //     image: weddingImg,
// //     desc: "From intimate ceremonies to grand celebrations, we create magical wedding experiences with stunning décor and exquisite multi-cuisine menus.",
// //     features: ["Mandap decoration", "Multi-cuisine menus", "Floral arrangements", "Full event coordination"],
// //   },
// //   {
// //     title: "Kitty Party",
// //     image: kittyImg,
// //     desc: "Host the perfect get-together with elegant table settings, delightful snacks, and a warm, inviting atmosphere for you and your friends.",
// //     features: ["Elegant table setup", "Finger food platters", "Beverage station", "Theme-based décor"],
// //   },
// //   {
// //     title: "Retirement Party",
// //     image: retirementImg,
// //     desc: "Celebrate a well-deserved milestone with sophistication. Our retirement party packages honor achievements with style and warmth.",
// //     features: ["Elegant décor", "Customized menu", "Personalized touches", "Cake & desserts"],
// //   },
// //   {
// //     title: "Corporate Events",
// //     image: corporateImg,
// //     desc: "Impress clients, reward teams, and host successful corporate gatherings with our professional catering and seamless event management.",
// //     features: ["Conference catering", "Gala dinners", "Team celebrations", "Presentation setups"],
// //   },
// // ];

// // const Services = () => {
// //   useEffect(() => {
// //   window.scrollTo(0, 0);
// // }, []);
// //   return (
// //     <>
// //       <section className="maroon-gradient pt-32 pb-20">
// //         <div className="container-wide px-4 sm:px-6 lg:px-8 text-center">
// //           <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-4">
// //             Our Services
// //           </h1>
// //           <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
// //             Explore our range of catering and event services designed to make your celebrations extraordinary.
// //           </p>
// //         </div>
// //       </section>

// //       <section className="section-padding bg-background">
// //         <div className="container-wide space-y-20">
// //           {events.map((event, i) => (
// //             <div
// //               key={event.title}
// //               className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
// //                 i % 2 !== 0 ? "lg:direction-rtl" : ""
// //               }`}
// //             >
// //               <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
// //                 <img
// //                   src={event.image}
// //                   alt={event.title}
// //                   className="rounded-lg w-full object-cover aspect-[4/3]"
// //                   loading="lazy"
// //                 />
// //               </div>
// //               <div className={i % 2 !== 0 ? "lg:order-1" : ""}>
// //                 <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
// //                   {event.title}
// //                 </h2>
// //                 <p className="text-muted-foreground leading-relaxed mb-6">
// //                   {event.desc}
// //                 </p>
// //                 <ul className="grid grid-cols-2 gap-3 mb-8">
// //                   {event.features.map((f) => (
// //                     <li key={f} className="flex items-center gap-2 text-sm text-foreground">
// //                       <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
// //                       {f}
// //                     </li>
// //                   ))}
// //                 </ul>
// //                 <Button asChild>
// //                   <Link to="/contact">
// //                     Request a Quote
// //                     <ArrowRight className="ml-2 h-4 w-4" />
// //                   </Link>
// //                 </Button>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </section>

      
// //     </>
// //   );
// // };

// // export default Services;

// import React from "react";
// import { Utensils, Coffee, Martini, Users } from "lucide-react";

// const Services = () => {
//   const services = [
//     {
//       icon: <Utensils size={32} />,
//       title: "Event Catering",
//       desc: "Exceptional culinary experiences for weddings, corporate events and private parties."
//     },
//     {
//       icon: <Coffee size={32} />,
//       title: "Custom Menus",
//       desc: "Personalized menu planning to meet your unique tastes and dietary needs."
//     },
//     {
//       icon: <Martini size={32} />,
//       title: "Presentation",
//       desc: "Elegant and creative food displays that enhance the visual appeal of your event."
//     },
//     {
//       icon: <Users size={32} />,
//       title: "Coordination",
//       desc: "Complete event coordination including setup, service and cleanup."
//     }
//   ];

//   return (
//     <div className="bg-white">

//       {/* Premium Services Title */}
//       <section className="py-16 bg-[#0f172a] text-white text-center">
//         {/* <p className="bg-gray-700 inline-block px-4 py-1 rounded-full text-sm">
//           WHAT WE OFFER
//         </p> */}
//         <h2 className="text-4xl font-bold mt-4">Our Premium Services</h2>
//       </section>

//       {/* Services Cards */}
//       <section className="py-16 max-w-7xl mx-auto grid md:grid-cols-4 gap-8 px-6">
//         {services.map((service, index) => (
//           <div
//             key={index}
//             className="bg-white shadow-lg rounded-xl p-6 text-center border hover:shadow-xl transition"
//           >
//             <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full border-4 border-gray-800 mb-4">
//               {service.icon}
//             </div>

//             <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
//             <p className="text-gray-600 text-sm">{service.desc}</p>
//           </div>
//         ))}
//       </section>

//       {/* Booking Section */}
//       <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20">
//         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6">

//           <div>
//             <h2 className="text-4xl font-bold leading-tight">
//               Book Us Now For Your Next Event
//             </h2>
//           </div>

//           <div className="bg-white p-6 rounded-xl text-black">
//             <p className="mb-4 text-gray-600">
//               Your event deserves the best menu. Let us make it extraordinary.
//             </p>

//             <input
//               type="text"
//               placeholder="Your Name"
//               className="w-full mb-3 p-3 border rounded-full"
//             />

//             <div className="grid grid-cols-2 gap-3">
//               <input
//                 type="text"
//                 placeholder="Your Phone"
//                 className="p-3 border rounded-full"
//               />

//               <select className="p-3 border rounded-full">
//                 <option>Event Type</option>
//                 <option>Wedding</option>
//                 <option>Birthday</option>
//                 <option>Corporate</option>
//               </select>
//             </div>

//             <button className="w-full mt-4 bg-black text-white py-3 rounded-full">
//               Submit
//             </button>
//           </div>
//         </div>
//       </section>

//     </div>
//   );
// };

// export default Services;


import React, { useEffect } from "react";
import { Utensils, Coffee, Martini, Users } from "lucide-react";

const Services = () => {

   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const services = [
    {
      icon: <Utensils size={32} />,
      title: "Event Catering",
      image:
        "https://images.unsplash.com/photo-1555244162-803834f70033",
      desc: "Exceptional culinary experiences for weddings, corporate events and private parties."
    },
    {
      icon: <Coffee size={32} />,
      title: "Custom Menus",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
      desc: "Personalized menu planning to meet your unique tastes and dietary needs."
    },
    {
      icon: <Martini size={32} />,
      title: "Food Presentation",
      image:
        "https://images.unsplash.com/photo-1466637574441-749b8f19452f",
      desc: "Elegant and creative food displays that enhance the visual appeal of your event."
    },
    {
      icon: <Users size={32} />,
      title: "Event Coordination",
      image:
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622",
      desc: "Complete event coordination including setup, service and cleanup."
    }
  ];

  return (
    <div className="bg-white">

      {/* Premium Services Title */}
      <section className="py-32 bg-[#0f172a] text-white text-center">
        <h2 className="text-4xl font-bold mt-4">Our Premium Services</h2>
      </section>

      {/* Services Cards */}
      <section className="py-16 max-w-7xl mx-auto grid md:grid-cols-4 gap-8 px-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl overflow-hidden border hover:shadow-xl transition"
          >

            {/* Image */}
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-40 object-cover"
            />

            <div className="p-6 text-center">

              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full border-4 border-gray-800 mb-4">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold mb-2">
                {service.title}
              </h3>

              <p className="text-gray-600 text-sm">
                {service.desc}
              </p>

            </div>
          </div>
        ))}
      </section>

      {/* Booking Section */}
      {/* <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6">

          <div>
            <h2 className="text-4xl font-bold leading-tight">
              Book Us Now For Your Next Event
            </h2>
          </div>

          <div className="bg-white p-6 rounded-xl text-black">
            <p className="mb-4 text-gray-600">
              Your event deserves the best menu. Let us make it extraordinary.
            </p>

            <input
              type="text"
              placeholder="Your Name"
              className="w-full mb-3 p-3 border rounded-full"
            />

            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Your Phone"
                className="p-3 border rounded-full"
              />

              <select className="p-3 border rounded-full">
                <option>Event Type</option>
                <option>Wedding</option>
                <option>Birthday</option>
                <option>Corporate</option>
              </select>
            </div>

            <button className="w-full mt-4 bg-black text-white py-3 rounded-full">
              Submit
            </button>
          </div>

        </div>
        
      </section> */}


      {/* Booking Section */}
<section className="relative py-24">

  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622"
      alt="catering event"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/70"></div>
  </div>

  <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

    {/* Left Content */}
    <div className="text-white space-y-6">

      <h2 className="text-4xl md:text-5xl font-bold leading-tight">
        Book Us For Your Next <br /> Celebration
      </h2>

      <p className="text-gray-200 max-w-lg">
        From weddings to corporate events, our catering team delivers
        exceptional food and unforgettable experiences.
      </p>

      <ul className="space-y-2 text-gray-300 text-sm">
        <li>✔ Premium Catering Services</li>
        <li>✔ Customized Menu Planning</li>
        <li>✔ Professional Event Management</li>
      </ul>

    </div>

    {/* Booking Form */}
    <div className="bg-white p-8 rounded-2xl shadow-2xl">

      <h3 className="text-2xl font-semibold mb-4 text-gray-800">
        Request A Quote
      </h3>

      <p className="text-gray-500 mb-6 text-sm">
        Fill the form below and our team will contact you shortly.
      </p>

      <form className="space-y-4">

        <input
          type="text"
          placeholder="Your Name"
          className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gray-800"
        />

        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gray-800"
        />

        <select
          className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gray-800"
        >
          <option>Select Event Type</option>
          <option>Wedding</option>
          <option>Birthday</option>
          <option>Corporate</option>
          <option>Outdoor Catering</option>
        </select>

        <textarea
          placeholder="Event Details"
          rows="3"
          className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gray-800"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Send Request
        </button>

      </form>

    </div>

  </div>

</section>

    </div>
  );
};

export default Services;