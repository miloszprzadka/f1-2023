import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-[#ffffff] flex justify-center p-5 text-3xl sm:text-[8px] sm:p-0 sm:flex sm:mx-auto'>
        <div className='mb-5'>
            <a href='/' className='p-8 sm:p-3'>Home</a>
            <a href='teams' className='p-8 sm:p-3'>Teams</a>
            <a href='drivers' className='p-8 sm:p-3'>Drivers</a>
            <a href='circuits' className='p-8 sm:p-3'>Circuits</a>
            <a href='standings' className='p-8 sm:p-3'>Standings</a>
        </div>
    </div> 
  )
}

export default Navbar