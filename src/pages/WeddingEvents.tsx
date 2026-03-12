import React from "react";

const WeddingEvents = () => {
  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <section className="relative h-[420px] flex items-end justify-center text-white text-center pb-20">

        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative">
          <h1 className="text-4xl md:text-5xl font-bold tracking-widest">
            WEDDING EVENT MANAGEMENT
          </h1>

          <p className="mt-4 text-gray-300">
            Home / Wedding Event Management
          </p>
        </div>

      </section>

      {/* INTRO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

        <img
          src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc"
          className="rounded-xl shadow-lg"
        />

        <div>
          <h2 className="text-3xl font-bold mb-4">
            Dream Wedding Planners
          </h2>

          <p className="text-gray-600 leading-relaxed">
            We specialize in creating beautiful and memorable wedding
            celebrations. From venue selection to decoration and guest
            management, our team ensures every moment of your special
            day is perfectly organized and magical.
          </p>
        </div>

      </section>

      {/* SERVICES */}
      <section className="bg-gray-50 py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-14">
            Our Wedding Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-3">
                Wedding Planning
              </h3>
              <p className="text-gray-600">
                Complete planning and coordination for your wedding
                ceremony and celebrations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-3">
                Venue Decoration
              </h3>
              <p className="text-gray-600">
                Elegant stage design, floral decoration and lighting
                to make your wedding beautiful.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-3">
                Catering & Hospitality
              </h3>
              <p className="text-gray-600">
                Delicious catering services and professional guest
                management for your wedding.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* GALLERY */}
      <section className="py-20">

        <h2 className="text-3xl font-bold text-center mb-12">
          Wedding Highlights
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 px-6">

          <img
            src="https://images.unsplash.com/photo-1520854221256-17451cc331bf"
            className="rounded-xl shadow-lg"
          />

          <img
            src="https://images.unsplash.com/photo-1523438885200-e635ba2c371e"
            className="rounded-xl shadow-lg"
          />

        </div>

      </section>

      {/* CALLBACK FORM */}
      <section className="bg-black text-white py-20">

        <h2 className="text-3xl font-bold text-center mb-10">
          Plan Your Dream Wedding
        </h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-4 px-6">

          <input
            type="text"
            placeholder="Your Name"
            className="p-3 bg-transparent border border-gray-500 rounded"
          />

          <input
            type="text"
            placeholder="Phone Number"
            className="p-3 bg-transparent border border-gray-500 rounded"
          />

          <input
            type="text"
            placeholder="Wedding Details"
            className="p-3 bg-transparent border border-gray-500 rounded"
          />

        </div>

        <div className="text-center">
          <button className="mt-6 px-8 py-3 bg-purple-600 rounded hover:bg-purple-700 transition">
            Submit
          </button>
        </div>

      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-6 py-20">

        <h2 className="text-3xl font-bold text-center mb-10">
          Wedding FAQs
        </h2>

        <div className="space-y-4">

          <details className="border p-4 rounded">
            <summary className="font-semibold">
              Do you manage destination weddings?
            </summary>
            <p className="text-gray-600 mt-2">
              Yes, we plan destination weddings and complete event
              management for outstation locations.
            </p>
          </details>

          <details className="border p-4 rounded">
            <summary className="font-semibold">
              Do you provide decoration and catering?
            </summary>
            <p className="text-gray-600 mt-2">
              Yes, we provide full wedding services including
              decoration, catering and guest hospitality.
            </p>
          </details>

        </div>

      </section>

    </div>
  );
};

export default WeddingEvents;