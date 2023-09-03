import React from 'react';

export const Navbar = () => {
  return (
    <nav className='bg-blue-500 p-4'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='text-white text-xl font-bold'>App Name</div>
        <ul className='flex space-x-4'>
          <li>
            <a
              href='#'
              className='text-white hover:text-gray-300 transition duration-300 ease-in-out'
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href='#'
              className='text-white hover:text-gray-300 transition duration-300 ease-in-out'
            >
              Schedule
            </a>
          </li>
          <li>
            <a
              href='#'
              className='text-white hover:text-gray-300 transition duration-300 ease-in-out'
            >
              Profile
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
