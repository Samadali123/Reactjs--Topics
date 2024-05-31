// src/ContactUs.js
import React from 'react';
import Nav from "./Nav"
import { useNavigate } from 'react-router-dom';


const ContactUs = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg max-w-md mx-auto">
      <Nav/>
      <h2 className="text-2xl font-semibold mb-4 text-black">Contact Us</h2>
      <p onClick={()=>{ navigate(-1)}} className='text-black mt-5 cursor-pointer'>GO Back</p>
      <form className="w-full space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:ring-opacity-50"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:ring-opacity-50"
            placeholder="Your email"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            id="message"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:ring-opacity-50"
            rows="4"
            placeholder="Your message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md shadow-sm hover:bg-blue-600"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
