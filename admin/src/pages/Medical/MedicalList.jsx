import { useEffect, useState,useContext } from "react";
import axios from "axios";
import { AdminContext } from "../../context/AdminContext";

const MedicalList = () => {
  const [medicines, setMedicines] = useState([]);
   const {backendUrl } = useContext(AdminContext)

  useEffect(() => {
    axios.get(backendUrl +'/api/medicine/getAll')
      .then(res => setMedicines(res.data))
      .catch(err => console.error("Error fetching medicines:", err));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Medicine List</h2>
       {console.log(medicines)}
      {medicines.map(med => (
        <div key={med._id} className="border p-4 rounded mb-3 shadow">
          <h3 className="text-xl capitalize font-semibold">{med.name}</h3>
          <ul className="list-disc pl-6 mt-2">
            {med.batches.map((batch, index) => (
              <li key={index}>
                Stock: {batch.stock}, Expiry: {new Date(batch.expiryDate).toLocaleDateString()}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MedicalList;
