import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { AdminContext } from '../context/AdminContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { aToken, setAtoken } = useContext(AdminContext);
  const navigate = useNavigate();

  const logout = () => {
    navigate('/');
    if (aToken) {
      setAtoken('');
      localStorage.removeItem('aToken');
    }
  };

  return (
    <nav className="flex justify-between items-center px-6 sm:px-12 py-4 shadow-md bg-white">
      <div className="flex items-center gap-4">
        <img
          className="w-24 sm:w-20 cursor-pointer"
          src={assets.logo2}
          alt="Logo"
        />
        <p className="border px-4 py-1 rounded-full border-gray-500 text-gray-700 text-sm sm:text-base font-medium">
          {aToken ? 'Admin' : 'Doctor'}
        </p>
      </div>
      <button
        className="bg-primary text-white text-sm sm:text-base px-6 sm:px-10 py-2 rounded-full transition duration-300 hover:bg-primary-dark"
        onClick={logout}
      >
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
