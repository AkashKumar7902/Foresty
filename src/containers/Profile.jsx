import React from 'react'
import { client } from '../client'
import { useState, useEffect } from 'react'
import logo from '../assets/Myproject.png'
import { useParams } from 'react-router-dom'
import { getUserById } from '../utils/data'

const Profile = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  const queryString = getUserById(id);

  useEffect(() => {
    client.fetch(queryString)
      .then((res) => {
        setUser(res[0]);
        console.log(res[0])
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div className='flex flex-col w-full items-center'>
      <div className="h-370 2xl:h-510 relative w-4/5 user-background mb-20">
        <img
          className='absolute -bottom-10 right-1/2 translate-x-[50%] rounded-full w-20 h-20 shadow-xl object-cover'
          src={user?.image}
          alt="user-pic"
        />
      </div>
      <div className="flex justify-between w-4/5 border-2 p-3 rounded-lg drop-shadow-2xl">
        <p className="font-semibold text-xl flex flex-row items-center gap-5">
          <img src={user?.image} alt="" className="rounded-lg w-[25px]" />
          <p> {user?.userName}</p>
        </p>
        <p className='text-gray-600'>
          Joined on {user?._createdAt.substr(0, 10)}
        </p>
      </div>
    </div>
  )
}

export default Profile