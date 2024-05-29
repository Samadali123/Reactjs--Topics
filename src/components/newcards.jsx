// import React, { useState } from 'react'
// import axios from '../utils/axios'

// const NewCards = () => {
//     const [users, setUsers] = useState([]); // Initialize with an empty array

//     const getUsers = async () => {
//         try {
//             const { data } = await axios.get("/users")
//             setUsers(data)
//             console.log(data)
//         } catch (error) {
//             console.error(error)
//         }
//     }

//     return (
//         <div className="p-4">
//             <button 
//                 onClick={getUsers} 
//                 className='px-4 py-2 mb-4 rounded-lg bg-orange-600 text-white hover:bg-orange-700 transition-colors duration-300 transform hover:scale-105'
//             >
//                 Get Users
//             </button>
//             <div className='w-full h-full flex flex-wrap items-center justify-center gap-4'>
//                 {users.map((user) => (
//                     <div 
//                         key={user.id} 
//                         className="user-card w-full sm:w-60 mt-3 h-auto sm:h-48 bg-red-700 rounded-md flex flex-col justify-center items-center gap-2 p-4 text-white shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105 duration-300"
//                     >
//                         <h1 className="text-lg font-bold">{user.username}</h1>
//                         <p className="text-sm">ID: {user.id}</p>
//                         <p className="text-sm">Email: {user.email}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default NewCards




import React, { useState } from 'react';
import axios from '../utils/axios';

const NewCards = () => {
    const [users, setUsers] = useState([]); // Initialize with an empty array

    const getUsers = async () => {
        try {
            const { data } = await axios.get('/users');
            setUsers(data);
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

    const generateRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    return (
        <div className="p-4">
            <button
                onClick={getUsers}
                className="px-4 py-2 mb-4 rounded-lg bg-orange-600 text-white hover:bg-orange-700 transition-colors duration-300 transform hover:scale-105"
            >
                Get Users
            </button>
            <div className="w-full h-full flex flex-wrap items-center justify-center gap-4">
                {users.map((user) => (
                    <div
                        key={user.id}
                        className="user-card w-full sm:w-60 mt-3 h-auto sm:h-48 bg-red-700 rounded-md flex flex-col justify-center items-center gap-2 p-4 text-white shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105 duration-300"
                        style={{ transition: 'background-color 0.3s' }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = generateRandomColor()}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = generateRandomColor()}
                    >
                        <h1 className="text-lg font-bold">{user.username}</h1>
                        <p className="text-sm">ID: {user.id}</p>
                        <p className="text-sm">Email: {user.email}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewCards;
