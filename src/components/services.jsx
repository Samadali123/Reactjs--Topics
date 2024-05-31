import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function ServicePage() {
  return (
    <div>
      <h1>Our Services</h1>
      <nav>
        <ul className='flex gap-3 text-blue-600 text-center'>
          <li>
            <Link to="web-development">Web Development</Link>
          </li>
          <li>
            <Link to="graphic-design">Graphic Design</Link>
          </li>
          <li>
            <Link to="seo-service">SEO Service</Link>
          </li>
        </ul>
        
        <Outlet/>
      </nav>
      <div>
        
      </div>
    </div>
  );
}

export default ServicePage;
