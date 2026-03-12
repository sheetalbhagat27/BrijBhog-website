import React from "react";

const TasteOfTemple = () => {
  return (
    <div className="bg-white py-10 px-6 md:px-16">

      {/* Title Section */}
      <div className="max-w-5xl mx-auto mb-10">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
          🍽 Taste of Temple - Pure Veg Multi-Cuisine Restaurant & Stay in Bhopal
        </h1>

        <p className="text-gray-600">
          Indulge in a wholesome culinary experience at Taste of Temple,
          Bhopal’s premier pure vegetarian restaurant offering multi-cuisine
          delicacies and elegant dine-in facilities. Perfect for family
          gatherings, parties, and casual dining.
        </p>
      </div>

      {/* Highlights Section */}
      <div className="max-w-5xl mx-auto border rounded-lg p-6 shadow-sm mb-12">
        <h2 className="text-xl font-semibold mb-4">
          ✨ Highlights & Facilities
        </h2>

        <ul className="space-y-2 text-gray-600">
          <li>
            <strong>100% Pure Vegetarian Menu:</strong> Fresh ingredients and
            authentic flavors.
          </li>

          <li>
            <strong>Buffet & Dine-In Options:</strong> Live buffet, à la carte,
            and themed meals.
          </li>

          <li>
            <strong>Elegant Interiors & Ambience:</strong> Comfortable dining
            experience.
          </li>

          <li>
            <strong>Event Hosting:</strong> Birthday, anniversary, parties and
            corporate lunches.
          </li>

          <li>
            <strong>Accommodation Facilities:</strong> Rooms available for
            guests who want to stay.
          </li>

          <li>
            <strong>Special Services:</strong> Custom menu planning and event
            decoration.
          </li>
        </ul>
      </div>

      {/* Image Gallery */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 mb-12">

        <img
          src="https://tse3.mm.bing.net/th/id/OIP.YtxHTe1d609iYB2xmZI66wHaD8?rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="Food"
          className="rounded-lg shadow-md"
        />

        <img
          src="https://tse2.mm.bing.net/th/id/OIP.zxLzw9KiHJoc_Jgj0qPTNAHaEo?rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="Room"
          className="rounded-lg shadow-md"
        />

        <img
          src="https://static.wixstatic.com/media/42acfd_9c13c0848c9347dfb375a499f43e1c88~mv2.jpg/v1/fill/w_960,h_768,al_c,q_85/42acfd_9c13c0848c9347dfb375a499f43e1c88~mv2.jpg"
          alt="Interior"
          className="rounded-lg shadow-md"
        />

      </div>

      {/* Why Choose Section */}
      <div className="max-w-5xl mx-auto mb-10">
        <h2 className="text-xl font-semibold mb-3">
          ⭐ Why Choose Taste of Temple?
        </h2>

        <p className="text-gray-600">
          Elegant Greens is not just a venue; it's a space where memories are
          created. Whether you're planning a grand wedding or an intimate party,
          our dedicated team ensures flawless execution.
        </p>

        <p className="mt-3 text-gray-600">
          Reserve your table or event at Taste of Temple and savor a culinary
          journey that delights every guest.
        </p>
      </div>

      {/* Address Section */}
      <div className="max-w-5xl mx-auto border rounded-lg p-6 shadow-sm">

        <h2 className="text-xl font-semibold mb-3">
          📍 Address
        </h2>

        <p className="text-gray-600 mb-4">
          Plot No 8 Sector Tower, Zone 1, M P Nagar, Near Divya steel 
          Bhopal, Madhya Pradesh 462011
        </p>

        <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600">
          📞 Reserve Your Seat Now : +91 9303099808
        </button>

      </div>

    </div>
  );
};

export default TasteOfTemple;