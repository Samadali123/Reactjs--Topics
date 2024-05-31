// src/Profile.js
// import React from 'react';
// import Nav from "./Nav"
// import { useParams} from "react-router-dom";

// const Profile = () => {
//   const {username} = useParams();
  
//   return (
//     <div className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg max-w-sm mx-auto">
//       <Nav  username={username} />
      
//       <img
//         src="https://via.placeholder.com/150"
//         alt="Profile"
//         className="w-32 h-32 rounded-full shadow-md"
//       />
//       <h2 className="mt-4 text-2xl font-semibold text-black">{username}</h2>
//       <p className="text-gray-600">Software Developer</p>
//       <div className="mt-4">
//         <h3 className="text-lg font-medium">About Me</h3>
//         <p className="text-gray-600 mt-2 text-center">
//           Passionate developer with experience in building web applications using React and other modern technologies.
//         </p>
//       </div>
//       <div className="mt-4 flex space-x-4">
//         <a href="#" className="text-blue-500 hover:underline">LinkedIn</a>
//         <a href="#" className="text-blue-500 hover:underline">GitHub</a>
//       </div>
//     </div>
//   );
// };

// export default Profile;


import React, { useState } from 'react';
import Nav from "./Nav";
import { useParams, useNavigate,useLocation} from "react-router-dom";

const Profile = () => {
 const { username } = useParams();
 const navigate = useNavigate();
 const {pathname, state, search} =  useLocation();
 
console.log(pathname, state, search);


  return (
    <div className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg max-w-sm mx-auto">
      <Nav username={username} />
      

      <img
        src="https://via.placeholder.com/150"
        alt="Profile"
        className="w-32 h-32 rounded-full shadow-md"
      />
       <p onClick={()=>{ navigate(-1)}} className='text-black mt-5 cursor-pointer'>GO Back</p>
      <h2 className="mt-2 text-2xl font-semibold text-black">
        {pathname === "/profile/username" ? "Unknown User": username};

        </h2>
      <p className="text-gray-600">Software Developer</p>
      <div className="mt-4">
        <h3 className="text-lg font-medium">About Me</h3>
        <p className="text-gray-600 mt-2 text-center">
          Passionate developer with experience in building web applications using React and other modern technologies.
        </p>
      </div>
      <div className="mt-4 flex space-x-4">
        <a href="#" className="text-blue-500 hover:underline">LinkedIn</a>
        <a href="#" className="text-blue-500 hover:underline">GitHub</a>
      </div>
    </div>
  );
};

export default Profile;

