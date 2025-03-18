import React, { useState, useEffect } from "react";

const Dashboard = () => {
  // Dummy data (can be fetched from API)
  const [data, setData] = useState({
    totalPatients: 120,
    recovered: 85,
    underTreatment: 30,
    dailyDeaths: [
      { id: 1, reason: "Cardiac Arrest", count: 2 },
      { id: 2, reason: "Respiratory Failure", count: 1 },
      { id: 3, reason: "Severe Trauma", count: 1 },
    ],
  });

  // Fake counter animation
  const [animatedData, setAnimatedData] = useState({ ...data });

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedData(data);
    }, 500);
    return () => clearInterval(interval);
  }, [data]);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Hospital Dashboard</h2>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* Total Patients */}
        <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-lg font-semibold">Total Patients</h3>
          <p className="text-2xl font-bold">{animatedData.totalPatients}</p>
        </div>

        {/* Recovered Patients */}
        <div className="bg-green-500 text-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-lg font-semibold">Recovered Patients</h3>
          <p className="text-2xl font-bold">{animatedData.recovered}</p>
        </div>

        {/* Under Treatment */}
        <div className="bg-yellow-500 text-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-lg font-semibold">Under Treatment</h3>
          <p className="text-2xl font-bold">{animatedData.underTreatment}</p>
        </div>

        {/* Daily Deaths */}
        <div className="bg-red-500 text-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-lg font-semibold">Daily Deaths</h3>
          <p className="text-2xl font-bold">
            {animatedData.dailyDeaths.reduce((acc, death) => acc + death.count, 0)}
          </p>
        </div>
      </div>

      {/* Death Reasons Table */}
      <div className="mt-8">
        <h3 className="text-xl font-bold text-gray-700 mb-4">Death Reasons</h3>
        <div className="bg-white shadow-lg rounded-lg p-4">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 text-left">Reason</th>
                <th className="p-2 text-center">Count</th>
              </tr>
            </thead>
            <tbody>
              {animatedData.dailyDeaths.map((death) => (
                <tr key={death.id} className="border-b">
                  <td className="p-2">{death.reason}</td>
                  <td className="p-2 text-center">{death.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
