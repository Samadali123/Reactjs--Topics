

// import React, { useState} from 'react';

// const Twoway = () => {
//   const [username, setUsername] = useState(""); // text
//   const [password, setPassword] = useState(""); // text
//   const [age, setAge] = useState(""); // number (use empty string for initial state to avoid input type warnings)
//   const [bio, setBio] = useState(""); // text
//   const [graduate, setGraduate] = useState(false); // checkbox (boolean)
//   const [option, setOption] = useState(""); // select and options
//   const [gender, setGender] = useState(""); // radio buttons
//   const [user, setUser] = useState([]); // array of users

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newUser = { username, password, age, bio, graduate, option, gender };
//     setUser([...user, newUser]);

//     // Reset form fields
//     setUsername("");
//     setPassword("");
//     setAge("");
//     setBio("");
//     setGraduate(false);
//     setOption("");
//     setGender("");

//     console.log(user.length)
//   };


//   return (
//     <div>
//       <form className='w-full h-screen bg-gray-900 flex flex-col justify-center items-center rounded-2xl px-4' onSubmit={handleSubmit}>
//         <h1>Two Way Binding in React.JS</h1>
//         <div className='flex flex-col gap-3 w-[40vw] text-black mt-6'>
//           <input
//             required
//             value={username}
//             onChange={(event) => setUsername(event.target.value)}
//             className='px-3 py-1 rounded-2xl'
//             type="text"
//             placeholder='Enter your username'
//           />
//           <p className='text-white'>Username: {username}</p>
//           <input
//             required
//             value={password}
//             onChange={(event) => setPassword(event.target.value)}
//             className='px-3 py-1 rounded-2xl'
//             type="password"
//             placeholder='Enter your password'
//           />
//           <p className='text-white'>Password: {password}</p>
//           <input
//             required
//             value={age}
//             onChange={(event) => setAge(event.target.value)}
//             className='px-3 py-1 rounded-2xl'
//             type="number"
//             placeholder='Enter your Age'
//           />
//           <p className='text-white'>Age: {age}</p>
//           <textarea
//             required
//             value={bio}
//             onChange={(event) => setBio(event.target.value)}
//             className='px-3 py-1 rounded-2xl'
//             placeholder='Enter Your Bio'
//           />
//           <p className='text-white'>Bio: {bio}</p>

//           <div className='flex gap-3'>
//             <label className='text-white' htmlFor="">Graduated</label>
//             <input
//               onChange={(event) => setGraduate(event.target.checked)}
//               type="checkbox"
//               checked={graduate}
//             />
//           </div>
//           <p className='text-white'>Graduate: {graduate ? "Yes" : "No"}</p>

//           <div className='flex gap-3'>
//             <label className='text-white'>Profession</label>
//             <select
//               required
//               value={option}
//               onChange={(event) => setOption(event.target.value)}
//               className='text-black px-3 rounded-2xl'
//             >
//               <option value=""></option>
//               <option value="Engineer">Engineer</option>
//               <option value="Doctor">Doctor</option>
//               <option value="Politician">Politician</option>
//               <option value="Pilot">Pilot</option>
//               <option value="Businessman">Businessman</option>
//             </select>
//           </div>
//           <p className='text-white'>Profession: {option}</p>

//           <div className='flex gap-3'>
//             <label className='text-white'>Male</label>
//             <input
//               required
//               onChange={(event) => setGender(event.target.value)}
//               value="male"
//               name='gender'
//               type="radio"
//               checked={gender === "male"}
//             />
//             <label className='text-white'>Female</label>
//             <input
//               required
//               onChange={(event) => setGender(event.target.value)}
//               value="female"
//               name='gender'
//               type="radio"
//               checked={gender === "female"}
//             />
//           </div>
//           <p className='text-white'>Gender: {gender}</p>
//         </div>

//         <button className='mt-3 px-4 py-1 bg-orange-600 text-white rounded-2xl' type='submit'>Add Details</button>
//       </form>

//       <div className='flex gap-5 justify-center flex-wrap w-[100vw] px-5 py-4'>
//         {user.map((u, index) => (
//           <div key={index} className='text-white flex  flex-col gap-1 px-3 py-1 w-56 h-52 bg-orange-600 flex-wrap rounded-lg'>
//             <p>Username: {u.username}</p>
//             <p>Password: {u.password}</p>
//             <p>Age: {u.age}</p>
//             <p>Bio: {u.bio}</p>
//             <p>Graduate: {u.graduate ? "Yes" : "No"}</p>
//             <p>Profession: {u.option}</p>
//             <p>Gender: {u.gender}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Twoway;





import React, { useState } from 'react';

const Twoway = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [bio, setBio] = useState("");
  const [graduate, setGraduate] = useState(false);
  const [option, setOption] = useState("");
  const [gender, setGender] = useState("");
  const [user, setUser] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { username, password, age, bio, graduate, option, gender };
    setUser([...user, newUser]);
    setUsername("");
    setPassword("");
    setAge("");
    setBio("");
    setGraduate(false);
    setOption("");
    setGender("");
  };

  return (
    <div className="min-h-screen  flex flex-col items-center justify-center px-4 py-8">
      <h1 className="text-white text-3xl font-bold mb-8">Two Way Binding in React.JS</h1>
      <form className="w-full max-w-lg text-zinc-900 bg-white rounded-2xl shadow-lg p-6 mb-8" onSubmit={handleSubmit}>
        <input
          required
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          className="block w-full px-4 py-2 mb-4 border border-black rounded-lg focus:outline-none focus:border-orange-500"
          type="text"
          placeholder="Username"
        />
        <input
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="block w-full px-4 py-2 mb-4 border border-black rounded-lg focus:outline-none focus:border-orange-500"
          type="password"
          placeholder="Password"
        />
        <input
          required
          value={age}
          onChange={(event) => setAge(event.target.value)}
          className="block w-full px-4 py-2 mb-4 border border-black rounded-lg focus:outline-none focus:border-orange-500"
          type="number"
          placeholder="Age"
        />
        <textarea
          required
          value={bio}
          onChange={(event) => setBio(event.target.value)}
          className="block w-full px-4 py-2 mb-4 border border-black rounded-lg focus:outline-none focus:border-orange-500"
          placeholder="Bio"
        />
        <div className="flex items-center mb-4">
          <input
            onChange={(event) => setGraduate(event.target.checked)}
            type="checkbox"
            checked={graduate}
            className="mr-2"
          />
          <label className="text-black">Graduated</label>
        </div>
        <select
          required
          value={option}
          onChange={(event) => setOption(event.target.value)}
          className="block w-full px-4 py-2 mb-4 border border-black rounded-lg focus:outline-none focus:border-orange-500"
        >
          <option value="">Select Profession</option>
          <option value="Engineer">Engineer</option>
          <option value="Doctor">Doctor</option>
          <option value="Politician">Politician</option>
          <option value="Pilot">Pilot</option>
          <option value="Businessman">Businessman</option>
        </select>
        <div className="flex items-center mb-4">
          <input
            required
            onChange={(event) => setGender(event.target.value)}
            value="male"
            name="gender"
            type="radio"
            checked={gender === "male"}
            className="mr-2"
          />
          <label className="text-black mr-4">Male</label>
          <input
            required
            onChange={(event) => setGender(event.target.value)}
            value="female"
            name="gender"
            type="radio"
            checked={gender === "female"}
            className="mr-2"
          />
          <label className="text-black">Female</label>
        </div>
        <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline" type="submit">Add Details</button>
      </form>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {user.map((u, index) => (
          <div key={index} className="bg-orange-600 text-white rounded-lg p-4">
            <p><strong>Username:</strong> {u.username}</p>
            <p><strong>Password:</strong> {u.password}</p>
            <p><strong>Age:</strong> {u.age}</p>
            <p><strong>Bio:</strong> {u.bio}</p>
            <p><strong>Graduate:</strong> {u.graduate ? "Yes" : "No"}</p>
            <p><strong>Profession:</strong> {u.option}</p>
            <p><strong>Gender:</strong> {u.gender}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Twoway;
