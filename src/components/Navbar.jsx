import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-[#ffffff] flex justify-center p-5 text-3xl'>
        <div className='mb-5'>
            <a href='/' className='p-8'>Home</a>
            <a href='teams' className='p-8'>Teams</a>
            <a href='drivers' className='p-8'>Drivers</a>
            <a href='circuits' className='p-8'>Circuits</a>
            <a href='standings' className='p-8'>Standings</a>
        </div>
    </div> 
  )
}

export default Navbar