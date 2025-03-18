import React, { useState } from "react";

const facilities = [
  { 
    id: 1, 
    name: "24/7 Emergency Services", 
    image: "/Facility3.jpg",
    description: "Our emergency services are available round the clock, ensuring immediate medical assistance and life-saving treatments for critical cases."
  },
  { 
    id: 2, 
    name: "Advanced ICU", 
    image: "/Facility1.jpg",
    description: "Our Intensive Care Unit is equipped with state-of-the-art medical technology to provide critical care for patients in need of constant monitoring."
  },
  { 
    id: 3, 
    name: "Pharmacy & Laboratory", 
    image: "/Facility2.jpg",
    description: "We offer a fully stocked pharmacy and a high-tech laboratory for quick diagnostics, ensuring efficient and accurate medical support."
  },
];

const Facilities = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const handleToggle = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Hospital Facilities</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {facilities.map((facility) => (
          <div 
            key={facility.id} 
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300"
          >
            <img src={facility.image} alt={facility.name} className="w-full h-48 object-cover" />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold">{facility.name}</h3>
              <p className="text-gray-600 mt-2">
                {expandedCard === facility.id 
                  ? facility.description 
                  : `${facility.description.split(" ").slice(0, 10).join(" ")}...`}
              </p>
              <button 
                onClick={() => handleToggle(facility.id)}
                className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-lg transition hover:bg-blue-600"
              >
                {expandedCard === facility.id ? "Read Less" : "Read More"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facilities;
