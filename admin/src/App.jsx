import React, { useContext } from 'react'
import Login from './pages/Login'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AdminContext } from './context/AdminContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import {Routes,Route } from 'react-router-dom';
import Dashboard from './pages/Admin/AddDoctor'
import  AllApointmetns from './pages/Admin/AllApointments'
import AddDoctor from './pages/Admin/AddDoctor'
import DoctorList from './pages/Admin/DoctorsList'
import MedicalList from './pages/Medical/MedicalList';
import MedicalDashboard from './pages/Medical/MedicalDashboard';

const App = () => {
  const {aToken} = useContext(AdminContext)
  return aToken ? (

    <div className='bg-[#F8F9FD]'>
      <ToastContainer />
      <Navbar/>
      <div className='flex items-start'>
        <Sidebar/>
        <Routes>
          <Route path='/' element={<></>}/>
          <Route path='/admin-dashboard' element={<Dashboard />}/>
          <Route path='/all-appointments' element={<AllApointmetns/>}/>
          <Route path='/add-doctor' element={<AddDoctor/>}/>
          <Route path='/doctor-list' element={<DoctorList/>}/>
          <Route path='/medicine-list' element={<MedicalList/>}/>
          <Route path='/medicine-dashboard' element={<MedicalDashboard/>}/>

        </Routes>
      </div>

    </div>
  ) : (
    <>
      <Login />
      <ToastContainer />
    </>
  )
}

export default App