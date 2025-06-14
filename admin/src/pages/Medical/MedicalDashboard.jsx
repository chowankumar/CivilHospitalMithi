import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AdminContext } from "../../context/AdminContext";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  PieChart, Pie, Cell, LineChart, Line, ResponsiveContainer
} from "recharts";

const MedicalDashboard = () => {
  const [medicines, setMedicines] = useState([]);
  const { backendUrl } = useContext(AdminContext);

  useEffect(() => {
    axios
      .get(backendUrl + "/api/medicine/getAll")
      .then((res) => setMedicines(res.data))
      .catch((err) => console.error("Error fetching medicines:", err));
  }, []);

  const totalMedicines = medicines.length;
  const totalStock = medicines.reduce(
    (acc, med) => acc + med.batches.reduce((sum, b) => sum + b.stock, 0),
    0
  );

  const upcomingExpiry = medicines.flatMap((med) =>
    med.batches
      .filter((batch) => {
        const expiry = new Date(batch.expiryDate);
        const now = new Date();
        return expiry > now && expiry < new Date(now.getTime() + 30 * 86400000);
      })
      .map((batch) => ({
        name: med.name,
        stock: batch.stock,
        expiryDate: batch.expiryDate,
      }))
  );

  const barData = medicines.map((med) => ({
    name: med.name,
    totalStock: med.batches.reduce((sum, b) => sum + b.stock, 0),
  }));

 

  const lineChartData = medicines.map((med) => ({
    name: med.name,
    stock: med.batches.reduce((sum, b) => sum + b.stock, 0),
  }));

  const COLORS = ["#FF6384", "#36A2EB"];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>

      <div className="bg-yellow-100 p-4 rounded mb-6">
        <h3 className="font-semibold text-lg mb-2">Notifications</h3>
        {upcomingExpiry.length > 0 && (
          <p>⚠️ Some medicine batches will expire soon.</p>
        )}
        {medicines.some(med => med.batches.some(batch => batch.stock < 10)) && (
          <p>⚠️ Some batches have low stock (less than 10).</p>
        )}
      </div>

      <div className="mb-6">
        <p><strong>Total Medicines:</strong> {totalMedicines}</p>
        <p><strong>Total Stock:</strong> {totalStock}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8 ">
        {/* Bar Chart */}
        <div className="bg-white shadow p-4 rounded-lg ">
          <h3 className="text-lg font-semibold mb-2">Stock per Medicine</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="totalStock" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>

         
        
      </div>

      {/* Line Chart */}
      <div className="bg-white shadow p-4 rounded-lg mb-8">
        <h3 className="text-lg font-semibold mb-2">Yearly Stock Overview</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={lineChartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="stock" stroke="#82ca9d" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      
    </div>
  );
};

export default MedicalDashboard;
