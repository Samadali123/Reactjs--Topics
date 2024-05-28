import React, { useContext } from 'react';
import { UserContext } from '../contexts/usercontext';

const Cards = () => {
   
   const [users, setUsers] =  useContext(UserContext)

  return (
    <div className="app">
      <div className="card-container w-full flex flex-wrap gap-4 justify-center px-6  ">
       
        {users.map((user, index) => (
          <div className="card  text-white flex items-center justify-center gap-3 flex-col bg-orange-600 rounded-md w-64  h-44 " key={index}>
            <h2>{user.name}</h2>
            <p>Age: {user.age}</p>
            <p>Profession: {user.profession}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
