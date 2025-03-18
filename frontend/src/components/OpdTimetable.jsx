import React from "react";

const opdSchedule = [
  { department: "General Medicine", doctor: "Dr. Ahsan Khan", time: "9:00 AM - 1:00 PM", days: "Mon - Fri" },
  { department: "Pediatrics", doctor: "Dr. Saira Ahmed", time: "10:00 AM - 2:00 PM", days: "Mon - Sat" },
  { department: "Gynecology", doctor: "Dr. Nadia Malik", time: "11:00 AM - 3:00 PM", days: "Mon - Fri" },
  { department: "Orthopedics", doctor: "Dr. Zubair Ali", time: "9:30 AM - 12:30 PM", days: "Tue, Thu, Sat" },
  { department: "Cardiology", doctor: "Dr. Faisal Qureshi", time: "12:00 PM - 4:00 PM", days: "Mon - Wed" },
  { department: "Dermatology", doctor: "Dr. Hina Shah", time: "2:00 PM - 5:00 PM", days: "Wed & Fri" },
  { department: "ENT", doctor: "Dr. Salman Javed", time: "10:00 AM - 1:00 PM", days: "Tue & Thu" },
];

const OpdTimetable = () => {
  return (
    <div className="container mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-6">🩺 OPD Timetable</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-primary text-white">
              <th className="border border-gray-300 px-4 py-2">Department</th>
              <th className="border border-gray-300 px-4 py-2">Doctor</th>
              <th className="border border-gray-300 px-4 py-2">Time</th>
              <th className="border border-gray-300 px-4 py-2">Days</th>
            </tr>
          </thead>
          <tbody>
            {opdSchedule.map((opd, index) => (
              <tr key={index} className="text-center bg-white hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">{opd.department}</td>
                <td className="border border-gray-300 px-4 py-2">{opd.doctor}</td>
                <td className="border border-gray-300 px-4 py-2">{opd.time}</td>
                <td className="border border-gray-300 px-4 py-2">{opd.days}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OpdTimetable;
