import React, { useRef } from 'react'
const ref = () => {
   const inputref =  useRef(0);
   
   let check = 0;
   const setinput = ()=>{
       if(check == 0){
       inputref.current.style.backgroundColor = "blue";
       inputref.current.style.fontSize = "20px";
       check = 1;
       }
       else if(check == 1){
        inputref.current.style.backgroundColor = "red";
       inputref.current.style.fontSize = "15px";
       check = 2;
       }

       else {
        alert("Exceeds the limit of button...")
       }
       

      
   }

  return (
    <div className='mt-6'>
       <h3>Use Ref in React.js</h3>
       <input className='px-3 py-1 mt-4 rounded-md bg-orange-700 text-white' ref={inputref} type="text" placeholder='Enter your username' /> 
       <button className='px-3 py-1 bg-gray-300 text-black rounded-lg ' onClick={setinput}>Edit Input</button>
    </div>
  )
}

export default ref