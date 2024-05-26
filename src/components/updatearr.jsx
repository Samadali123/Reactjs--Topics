import React, { useState } from 'react'
import Button from '../components/button';

const Updatearr = () => {

    const [name, setname] = useState([]);


    const addname = ()=>{
        const val =  document.querySelector("input").value;
        document.querySelector("input").value = "";
        if(val) { setname([...name, val])
            alert("Added Successfully...")
         } 
        else alert("PLease Provide The name For Add in Users")
        
    }


    const deleteName = (index) => {
        // const newNames = name.filter((_, id) => id !== index);
        // setname(newNames);
           
        setname(name.filter((_, id) => id !== index));

        alert("Deleted Succesfully...")
      };



  return (
    <div id='main' className='bg-white text-black py-4 px-12 rounded-lg h-fit overflow-x-hidden overflow-y-auto  '>
        <h2 className='text-red-600 mb-3 font-semibold text-3xl '>{name.length >0 ? "My Users":"No users found"}</h2>
     {
     name.map((elem, index)=> <><div className='flex flex-col gap-3  justify-between'>{<ol><li key={index} >{elem}</li></ol>} <button
     onClick={() => deleteName(index)}
     className='bg-red-600 text-white rounded-3xl px-3 py-1'
   >
     Delete
   </button> </div></>)
     }


<div className='flex gap-3 mt-3 '>
    <input  className='border-0 rounded-3xl px-2 ' type="text"  placeholder='Add a new name'/>
    <button onClick={addname} className='bg-blue-600 text-white rounded-3xl px-3 py-1 '>Add Name</button>
</div>
    </div>


  )
}

export default Updatearr