import React, { useState } from 'react'


const updateobjects = () => {
    const [person, setperson]= useState({Name: "Syed Samad ali", age: 21, Profession :"Engineer"})

    const submitHandler = (e)=>{
       e.preventDefault();

     const nameval = document.querySelector("#name").value;
     const ageval =  document.querySelector("#age").value
     const professionval = document.querySelector("#profession").value;

     setperson({
        ...person,
        Name: nameval,
        age: ageval,
        Profession: professionval
      });
      
      
      document.querySelector("#name").value = "";
      document.querySelector("#age").value = "";
      document.querySelector("#profession").value = "";

    

    }


    
  return (
    <div>
        <ol>
            <li>Name :  {person.Name}</li>
            <li>Age : {person.age}</li>
            <li>Profession : {person.Profession}</li>
             

             <form onSubmit={submitHandler} action="" >
              <div className='flex gap-2 pt-3 text-black '>
                <input id='name' type="text" placeholder='Enter your Name' />
                <input id='age'  type="number" placeholder='Enter your age' />
                <input  id='profession' type="text" placeholder='Enter your profession' />
                </div>
                <input className='mt-2 bg-red-600 rounded-2xl px-3 py-1 ' type="submit"  value="Update Details"/>
             </form>




        </ol>
    </div>
  )
}



export default updateobjects

