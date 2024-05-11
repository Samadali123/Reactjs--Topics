import React, { useState } from 'react'

//onlick 
// usestate

const content = () => {
 
  const [name, setname] = useState("unknown")

  const  updatename = ()=>{
       let editname = document.querySelector("#name").value;
       document.querySelector("#name").value = "";
      setname(editname)
  }

  return (
    <div className='bg-black w-full h-[80vh] text-white flex flex-col justify-center items-center gap-3'>
          <h1>Hello {name}</h1>
            
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ratione nemo omnis?</p>
          <input id='name' className='w-32 rounded-md text-black' type="text" />
          <button onClick={updatename} className='px-4 bg-fuchsia-700 py-1 rounded-md text-white'>update name</button>

    </div>
  )
}


export default content