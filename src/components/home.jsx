
import React from 'react';
import Nav from "./Nav"
import { useNavigate } from 'react-router-dom';



const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-between h-screen text-center bg-gray-100 text-gray-800 font-sans">
      <header className="bg-green-500 text-white py-4 w-full">
        <h1 className="text-2xl">Welcome to My React App</h1>
        <Nav/>
      </header>
      <main className="flex-1 py-8 w-full">
        <p>This is the Home component.</p>
        <p onClick={()=>{ navigate(+1)}} className='text-black mt-5 cursor-pointer'>GO Ahead</p>
      </main>
      <footer className="bg-green-500 text-white py-4 w-full">
        <p>&copy; 2024 My React App</p>
      </footer>
    </div>
  );
};

export default Home;
