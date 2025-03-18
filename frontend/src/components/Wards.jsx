import React, { useState } from "react";

const wards = [
  { 
    id: 1, 
    name: "Emergency Ward", 
    image: "/ward1.jpg",
    description: "The Emergency Ward provides immediate care for critically ill or injured patients, available 24/7 with specialized medical staff."
  },
  { 
    id: 2, 
    name: "ICU", 
    image: "/ward2.jpg",
    description: "The Intensive Care Unit (ICU) offers advanced medical support for critically ill patients, equipped with life-saving technology and expert care."
  },
  { 
    id: 3, 
    name: "General Ward", 
    image: "/ward3.jpg",
    description: "The General Ward provides essential medical care for patients requiring hospitalization, ensuring comfort and treatment under professional supervision."
  },
];

const Wards = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const handleToggle = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Hospital Wards</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {wards.map((ward) => (
          <div 
            key={ward.id} 
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300"
          >
            <img src={ward.image} alt={ward.name} className="w-full h-48 object-cover" />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold">{ward.name}</h3>
              <p className="text-gray-600 mt-2">
                {expandedCard === ward.id 
                  ? ward.description 
                  : `${ward.description.split(" ").slice(0, 10).join(" ")}...`}
              </p>
              <button 
                onClick={() => handleToggle(ward.id)}
                className="mt-3  text-black px-4 py-2 rounded-lg transition  "
              >
                {expandedCard === ward.id ? "Read Less" : "Read More"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wards;
