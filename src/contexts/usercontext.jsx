import React, { createContext, useState } from 'react';

// Corrected context name to match usage
export const UserContext = createContext(null);

// Renamed function to follow naming conventions
const UserContextProvider = ({ children }) => {

  // Initial state setup remains the same
  const [users, setUsers] = useState([
    {
      "name": "Alice Johnson",
      "age": 29,
      "profession": "Software Engineer"
    },
    {
      "name": "Michael Smith",
      "age": 34,
      "profession": "Graphic Designer"
    },
    {
      "name": "Emily Davis",
      "age": 26,
      "profession": "Marketing Specialist"
    },
    {
      "name": "David Brown",
      "age": 42,
      "profession": "Project Manager"
    },
    {
      "name": "Sophia Martinez",
      "age": 31,
      "profession": "Data Analyst"
    },
    {
        "name": "Sophia Martinez",
        "age": 31,
        "profession": "Data Analyst"
      },
      {
        "name": "Ahsan",
        "age": 31,
        "profession": "Data Analyst"
      },
      {
        "name": "Samad",
        "age": 31,
        "profession": "Data Analyst"
      },
      {
        "name": "Salim",
        "age": 31,
        "profession": "Data Analyst"
      }
  ]);

  // Corrected the provider to pass an object instead of an array
  return (
    <div>
      <UserContext.Provider value={[users, setUsers]}>
        {children}
      </UserContext.Provider>
    </div>
  );
};

export default UserContextProvider;
