 import medicineModel from './../models/medicineModel.js';

const addMedicine = async (req, res) => {
  try {
    const { name,stock,expiryDate } = req.body;

    if (!name || !stock || !expiryDate) {
      return res.status(400).json({ message: 'Please fill all fields.' });
    }

    const normalizedName = name.trim().toLowerCase();
    const parsedExpiryDate = new Date(expiryDate);

     
    const existingMedicine = await medicineModel.findOne({ name: normalizedName });

    if (existingMedicine) {
      
      const batchExists = existingMedicine.batches.some(
        (batch) => new Date(batch.expiryDate).getTime() === parsedExpiryDate.getTime()
      );

      if (batchExists) {
        return res.status(409).json({
          message: 'This medicine batch with the same expiry date already exists. Please update it instead.',
        });
      }

 
      existingMedicine.batches.push({ stock, expiryDate: parsedExpiryDate });
      const updatedMedicine = await existingMedicine.save();
      return res.status(200).json(updatedMedicine);
    }

     
    const newMedicine = new medicineModel({
      name: normalizedName,
      batches: [{ stock, expiryDate: parsedExpiryDate }]
    });

    const savedMedicine = await newMedicine.save();
    res.status(201).json(savedMedicine);
  } catch (error) {
    console.error('Error adding medicine:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

 






const getAllMedicines = async (req, res) => {
  try {
    const medicines = await medicineModel.find().sort({ name: 1 });  
    res.status(200).json(medicines);
  } catch (error) {
    console.error('Error fetching medicines:', error);
    res.status(500).json({ message: 'Failed to fetch medicines from the server' });
  }
};

 


export { addMedicine,getAllMedicines };
