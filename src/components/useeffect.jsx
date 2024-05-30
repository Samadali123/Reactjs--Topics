import React, { useEffect, useState } from 'react'

const useeffect = () => {
    
    const [bio, setbio] = useState("hello")
    const [username, setusername] = useState("ahsan")
 // component mount
 // componenent update
 // cleanup function component removed
const updatebio = ()=>{
    setbio("Bado BAdi")
}


const updateusername = ()=>{
    setusername("hue hue hue")
}


//  useEffect(()=>{
//     console.log("working in use effect")
//  })   // very basic tab chalega jab component render or yah kisii  bhi state ful varibale ko update kro ge tab chalega


// // creation  time
// useEffect(()=>{
//    console.log("khulne pe chalge");
// }, []);


// upatede on statuful variables as bio changes
// useEffect(()=>{
//     console.log("khulne pe chalge");
//  }, [bio]);


// clearn up runs when component removed or returning function


// useEffect(() => {
//     console.log("working on mouting")
//     // let rotationDegree = 0;
//     // const box = document.querySelector("#box");

//     // const boxRotate = setInterval(() => {
//     //     rotationDegree += 10;
//     //     box.style.transform = `rotate(${rotationDegree}deg)`;
//     // }, 100);

//     return () => {
//         // clearInterval(boxRotate);
//         // console.log("working on unmounting")
//     };
// }, []);


  return (
    <div>useeffect
        <div id='box' className='w-56 h-44 rounded-md bg-red-700 '></div>
       <p onClick={updatebio} className='mt-4 bg-orange-600 px-3 py-1 rounded-md text-white '>{bio}</p>
       <p onClick={updateusername} className='mt-4 bg-orange-600 px-3 py-1 rounded-md text-white '>{username}</p>
    </div>
  )
}

export default useeffect