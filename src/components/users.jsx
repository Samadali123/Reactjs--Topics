import React from 'react'

const names = ["syed samad ali", "ahsan ahmed", "salim bhoi", "arham badmosh", "tahoor gunde"];
const UsersObject =  {name:"syed samad ali", age:21, Nationality: "Indian"}

const UsersIdentity =  <p>Name : {UsersObject.name} <br />
 Age: {UsersObject.age} <br />
 Nationality:{UsersObject.Nationality}
</p>


const TotalUsers  =  [
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
    }
  ]
  


const Users = () => {
  return (
    <div className='w-full  mt-4 '>
        <h1 className='mb-4'>Array Loading</h1>
    {names.map((elem, index)=> <ul><li> My name is : {elem}</li></ul>)}

<h1 className='mb-4 mt-4'>Object Loading</h1>
    {UsersIdentity}




    {/* <h1 className='mb-4 mt-4'>Total Users</h1>
      {TotalUsers.map((user, index) => (
        <div className='w-full flex gap-4 mb-4  ' key={index}>
          <h1>{user.name}</h1>
          <h2>{user.age}</h2>
          <h3>{user.profession}</h3>
        </div>
      ))} */}



     {TotalUsers.map((elem, index)=> (<div className='w-full flex justify-center gap-5' key={index}> <h1>{elem.name}</h1>  <h2>{elem.age}</h2>  <h3>{elem.profession}</h3> </div>))}

    </div>

        
  )
}

export default Users