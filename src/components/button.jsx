import React from 'react'


const button = ({name, age, setage}) => {
   
    const editage = ()=>{
          setage(21)
    } 

  return (
    <>
    <button onClick={editage} className='px-3 py-1 bg-red-600 rounded-3xl text-white'>edit age</button>
    </>
  )
}

export default button


