import React from 'react'
import { client } from '../client'
import { useState, useEffect } from 'react'

const Profile = () => {
  const user = JSON.parse(localStorage.getItem('user'))
  console.log(user.name)
  console.log(user.email)

  return (
    
    <>
      <h1>Profile</h1>
      <div>
        <div className='py-10 text-7xl font-extrabold md:order-1 order-2 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-red-600'> 
            User Profile
        </div>
        <div> 
            <div className="flex flex-row items-center justify-center gap-2 w-full md:w-1/2 ">
                <img
                  src={user?.picture}
                  alt="user-profile"
                  className="w-50 h-50 rounded-full"
                />
                <h3 className="font-bold text-3xl">{user.name}</h3>
                <h4 className='text-2xl'> Email: {user.email}</h4>
            </div>
        </div>

      </div>
    </>
  )
}

export default Profile