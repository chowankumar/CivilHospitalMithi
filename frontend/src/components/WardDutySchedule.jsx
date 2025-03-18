import React from "react";

const wardDutySchedule = [
  { ward: "Emergency Ward", staff: "Dr. Ahsan Khan / Nurse Sarah", time: "8:00 AM - 4:00 PM", days: "Mon - Sat" },
  { ward: "ICU", staff: "Dr. Saira Ahmed / Nurse Ali", time: "9:00 AM - 5:00 PM", days: "Mon - Sun" },
  { ward: "General Ward", staff: "Dr. Nadia Malik / Nurse Fatima", time: "10:00 AM - 6:00 PM", days: "Mon - Fri" },
  { ward: "Pediatrics Ward", staff: "Dr. Zubair Ali / Nurse Hina", time: "7:00 AM - 3:00 PM", days: "Tue, Thu, Sat" },
  { ward: "Cardiology Ward", staff: "Dr. Faisal Qureshi / Nurse Bilal", time: "12:00 PM - 8:00 PM", days: "Mon - Wed" },
  { ward: "Surgical Ward", staff: "Dr. Salman Javed / Nurse Ayesha", time: "6:00 AM - 2:00 PM", days: "Wed & Fri" },
];

const WardDutySchedule = () => {
  return (
    <div className="container mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-6">🩺 Ward Duty Schedule</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-primary text-white">
              <th className="border border-gray-300 px-4 py-2">Ward Name</th>
              <th className="border border-gray-300 px-4 py-2">Doctor/Nurse on Duty</th>
              <th className="border border-gray-300 px-4 py-2">Shift Time</th>
              <th className="border border-gray-300 px-4 py-2">Days</th>
            </tr>
          </thead>
          <tbody>
            {wardDutySchedule.map((duty, index) => (
              <tr key={index} className="text-center bg-white hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">{duty.ward}</td>
                <td className="border border-gray-300 px-4 py-2">{duty.staff}</td>
                <td className="border border-gray-300 px-4 py-2">{duty.time}</td>
                <td className="border border-gray-300 px-4 py-2">{duty.days}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WardDutySchedule;
