import React, { useContext } from 'react'
import {AdminContext} from "./../context/AdminContext"
import {NavLink} from 'react-router-dom'
import  {assets} from './../assets/assets'

const Sidebar = () => {

  const {aToken} = useContext(AdminContext)
  return (
    <div>
      {
        aToken && 
        <ul>
          <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary':''}`} to='/admin-dashboard'>
            <img src={assets.home_icon} alt="" />
            <p>Dashboard</p>
          </NavLink>

          <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary':''}`} to='/all-appointments'>
            <img src={assets.appointment_icon} alt="" />
            <p>Appointments</p>
          </NavLink>

          <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary':''}`} to='/add-doctor'>
            <img src={assets.add_icon} alt="" />
            <p>Add Doctor</p>

          </NavLink>

          <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary':''}`} to='/doctor-list'>
            <img src={assets.people_icon} alt="" />
            <p>Doctor List</p>

          </NavLink>

          <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary':''}`} to='/medicine-list'>
            <img src={assets.people_icon} alt="" />
            <p>Medicine List</p>

          </NavLink>

          <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary':''}`} to='/medicine-dashboard'>
            <img src={assets.people_icon} alt="" />
            <p>Medicine Dashboard</p>

          </NavLink>

        </ul>
      }

    </div>
  )
}

export default Sidebar