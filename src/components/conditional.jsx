import React from 'react'

const Conditional = ({age}) => {
  return (
    <div>
       {age>= 18? <h3>Welcome to profile</h3>:<h3>Soory , you have not logged in</h3>}

    </div>
  )
}

export default Conditional