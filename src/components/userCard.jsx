import React from 'react'

const userCard = ({username, profile, profession}) => {
  return (
    <div className='w-80 h-52 bg-slate-700 flex justify-center flex-col items-center gap-1 rounded-md'>
        <div className="profile w-20 h-20 rounded-full bg-red-600 overflow-hidden">
            <img className='w-full h-full object-cover rounded-full' src={profile} alt="" />

        </div>

        <h3>{username}</h3>
        <p>{profession}</p>

    </div>
  )
}

export default userCard