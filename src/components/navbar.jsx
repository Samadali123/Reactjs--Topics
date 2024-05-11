import React from 'react'

const navbar = () => {
  return (
    <div className='bg-black text-white flex justify-between px-6 h-10 py-3 w-full '>
     <h3>Notely</h3>
     <div className="part2 flex gap-3">
        <h3>About</h3>
        <h3>Contact us</h3>
        <h3>Services</h3>
     </div>
    </div>
  )
}

export default navbar