import express from 'express'
import {addMedicine,getAllMedicines} from '../controllers/medicineController.js';
import authAdmin from '../middlewares/authAdmin.js';


const medicineRouter = express.Router();

medicineRouter.post('/addMedicine',addMedicine);
medicineRouter.get('/getAll',getAllMedicines);
 
export default medicineRouter 

