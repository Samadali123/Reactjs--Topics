import React, { useState } from 'react'
import Card from "../components/userCard"




 const updateArrayofobjects = () => {

    const [user,setuser] = useState([]);
      const submitHandler = (e)=>{
        e.preventDefault();
        const usernameval = document.querySelector("#username").value;
        const profileval = document.querySelector("#profile").value;
        const professionval = document.querySelector("#profession").value;


        setuser([...user, {username : usernameval || user.username, profile : profileval || user.profile, profession : professionval || user.profession}])
        document.querySelector("#username").value  = "";
        document.querySelector("#profile").value = "";
         document.querySelector("#profession").value = "";


          const set = setTimeout(() => {
            document.querySelector("#form").style.display = "none";
          }, 100);


          const up = setTimeout(() => {
            document.querySelector("#form").style.display = "block";
          }, 1000);

      


         
      }
   
  return (
    <div className='flex gap-5 flex-wrap justify-center'>
        {user.map((elem, index) => {
            return  <Card username={elem.username} profile={elem.profile} profession={elem.profession} />
        })}
        
         
       <form id='form' action="" onSubmit={submitHandler}>
          <div className=' text-black flex flex-col gap-3 w-[100vw] justify-center items-center'>
          <input id='username' required className='bg-fuchsia-200 rounded-md px-3 py-1 w-64'  type="text"  placeholder='Enter your Usernamme'/>
         <input id='profile' required className='bg-fuchsia-200 rounded-md px-3 py-1 w-64'  type="text"  placeholder='Enter your Profile Url'/>
         <input id='profession' required  className='bg-fuchsia-200 rounded-md px-3 py-1 w-64' type="text"  placeholder='Enter your Profession'/>
          </div>
         
         <div className='flex justify-center '>
         <input  className='text-center bg-slate-700  text-white rounded-md mt-2 px-3 py-1' type="submit" value="Add User" />
         </div>
       </form>
    </div>
    
  )
}

export default updateArrayofobjects
