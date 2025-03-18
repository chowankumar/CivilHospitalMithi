import React from "react";

const wards = [
  { id: 1, name: "Emergency Ward", image: "/ward1.jpg" },
  { id: 2, name: "ICU", image: "/ward2.jpg" },
  { id: 3, name: "General Ward", image: "/ward3.jpg" },
   
];

const Wards = () => {
  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Hospital Wards</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {wards.map((ward) => (
          <div key={ward.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={ward.image} alt={ward.name} className="w-full h-48 object-cover" />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold">{ward.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wards;
