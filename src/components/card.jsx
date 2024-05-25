import React, { useState } from 'react'
import Button from '../components/button'


const card = ({name, age, image, setage}) => {

  return (
    <>
     <div className='mx-5 my-6 w-48 h-60 rounded-xl bg-zinc-600 text-white '>
     <div className='w-48  h-40 bg-red-600 text-white rounded-md relative '>
       <img className='w-full h-full object-cover rounded-md' src={image} alt="" />
    </div>
     
     <div className="dets px-3 py-3">
     <h3>{name}</h3>
    <p>{age}</p>
    <input className='px-2 py-1 w-20 rounded-md text-black' type="text" placeholder='Enter your age' />
    <Button name={name} age={age} setage={setage} />
     </div>
    
     </div>

    </>
  )
}



card.defaultProps = {
     name : "unkwnown user",
     age: 0,
     image : "https://th.bing.com/th/id/OIP.2wRpI007gG7aZqFRrBmGRwHaFP?w=860&h=609&rs=1&pid=ImgDetMain",
     
}

export default card