
import React from "react";

const TastOfTemple = () => {
  return (
    <div className="bg-white py-10 px-6 md:px-16">

      {/* Title Section */}
      <div className="max-w-5xl mx-auto mb-10">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
          🍽 Brij Bhog Catering – Premium Veg Catering Services in Bhopal
        </h1>

        <p className="text-gray-600">
          Brij Bhog Catering provides delicious and high-quality vegetarian
          catering services for weddings, receptions, corporate events and
          family celebrations in Bhopal. We focus on authentic flavors,
          hygienic preparation and elegant food presentation to create
          memorable dining experiences for every event.
        </p>
      </div>

      {/* Highlights Section */}
      {/* <div className="max-w-5xl mx-auto border rounded-lg p-6 shadow-sm mb-12">
        <h2 className="text-xl font-semibold mb-4">
          ✨ Our Catering Highlights
        </h2>

        <ul className="space-y-2 text-gray-600">
          <li>
            <strong>100% Pure Vegetarian Menu:</strong> Authentic Indian
            cuisine prepared with fresh ingredients.
          </li>

          <li>
            <strong>Customized Event Menus:</strong> Menus designed according
            to your event type and guest preferences.
          </li>

          <li>
            <strong>Elegant Buffet Setup:</strong> Beautiful buffet counters
            with attractive food presentation.
          </li>

          <li>
            <strong>Live Food Counters:</strong> Chaat, South Indian, Chinese
            and dessert counters for guests.
          </li>

          <li>
            <strong>Professional Catering Staff:</strong> Experienced team
            ensuring smooth service for every event.
          </li>

          <li>
            <strong>Event Catering Services:</strong> Weddings, birthdays,
            receptions, corporate events and family functions.
          </li>
        </ul>
      </div> */}

      {/* Image Gallery */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 mb-12">

        <img
          src="https://images.unsplash.com/photo-1555244162-803834f70033"
          alt="Catering Food"
          className="rounded-lg shadow-md"
        />

        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
          alt="Buffet Setup"
          className="rounded-lg shadow-md"
        />

        <img
          src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3"
          alt="Event Catering"
          className="rounded-lg shadow-md"
        />

      </div>



      <div className="max-w-5xl mx-auto border rounded-lg p-6 shadow-sm mb-12">
        <h2 className="text-xl font-semibold mb-4">
          ✨ Our Catering Highlights
        </h2>

        <ul className="space-y-2 text-gray-600">
          <li>
            <strong>100% Pure Vegetarian Menu:</strong> Authentic Indian
            cuisine prepared with fresh ingredients.
          </li>

          <li>
            <strong>Customized Event Menus:</strong> Menus designed according
            to your event type and guest preferences.
          </li>

          <li>
            <strong>Elegant Buffet Setup:</strong> Beautiful buffet counters
            with attractive food presentation.
          </li>

          <li>
            <strong>Live Food Counters:</strong> Chaat, South Indian, Chinese
            and dessert counters for guests.
          </li>

          <li>
            <strong>Professional Catering Staff:</strong> Experienced team
            ensuring smooth service for every event.
          </li>

          <li>
            <strong>Event Catering Services:</strong> Weddings, birthdays,
            receptions, corporate events and family functions.
          </li>
        </ul>
      </div>


      {/* Why Choose Section */}
      {/* <div className="max-w-5xl mx-auto mb-10">
        <h2 className="text-xl font-semibold mb-3">
          ⭐ Why Choose Brij Bhog Catering?
        </h2>

        <p className="text-gray-600">
          Brij Bhog Catering is known for authentic taste, professional
          service and beautiful food presentation. Whether it’s a wedding,
          birthday party or corporate event, our team ensures every guest
          enjoys a delightful dining experience.
        </p>

        <p className="mt-3 text-gray-600">
          Choose Brij Bhog Catering for delicious food, reliable service
          and memorable celebrations.
        </p>
      </div> */}

      {/* Contact Section */}
      <div className="max-w-5xl mx-auto border rounded-lg p-6 shadow-sm">

        <h2 className="text-xl font-semibold mb-3">
          📍 Contact Us
        </h2>

        <p className="text-gray-600 mb-4">
          Bhopal, Madhya Pradesh, India
        </p>

        <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600">
          📞 Book Catering Now : +91 9303099808
        </button>

      </div>

    </div>
  );
};

export default TastOfTemple;