

import React, { useEffect } from "react";

const services = [
  "Wedding Catering",
  "Birthday Party Catering",
  "Reception Catering",
  "Housewarming (Griha Pravesh) Catering",
  "Wedding Anniversary Catering"
];

const About = () => {

  useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  return (
    <div className="w-full">

      {/* HERO SECTION */}

      <div
        className="h-[400px] flex items-center justify-center text-white text-center bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3')"
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <h1 className="text-5xl font-semibold relative z-10">
          Brij Bhog
        </h1>
      </div>

      {/* OUR STORY */}

      <div className="max-w-7xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-10">

        <div>
          <p className="text-sm text-orange-500 mb-2">
            Brij Bhog Catering Services
          </p>

          <h2 className="text-4xl font-serif mb-4">
            Our Story
          </h2>

          <div className="w-20 h-[3px] bg-orange-400 mb-6"></div>
        </div>

        <p className="text-gray-600 leading-relaxed">
          Brij Bhog Catering is a trusted catering service in Bhopal
          known for delivering delicious food and exceptional hospitality
          for every celebration. We specialize in providing high-quality
          vegetarian catering services for weddings, family functions,
          corporate gatherings and social events.

          Our team focuses on authentic taste, hygienic preparation and
          beautiful food presentation to create a memorable dining
          experience for your guests. Whether it’s a small family event
          or a grand wedding celebration, Brij Bhog ensures professional
          service and delightful cuisine.
        </p>

      </div>


      {/* SERVICES + IMAGE */}

      <div className="max-w-7xl mx-auto px-6 pb-20 grid md:grid-cols-2 gap-12 items-center">

        {/* SERVICES */}

        <div className="space-y-6">

          {services.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 border-b pb-4"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-200 text-orange-600">
                •
              </div>

              <p className="text-gray-700">{item}</p>
            </div>
          ))}

        </div>


        {/* IMAGE */}

        <img
          src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3"
          alt="Brij Bhog Catering"
          className="w-full h-[350px] object-cover rounded"
        />

      </div>

    </div>
  );
};

export default About;