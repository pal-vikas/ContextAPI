import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Intro() {

    let {user}=useContext(UserContext)
    if(!user) return <h1 className='text-xl font-bold'>You are not logged In</h1>
  return (
   < >
   
          <div className="flex gap-3 items-center">
              <img className='h-16 w-16 rounded-full object-cover' src={user.img} alt="" />
              <div className=" items-center">
                  <div className="font-bold">{user.name}</div>
                  <div className="font-bold">{user.email}</div>
              </div>
          </div>
   
   </>

   
  )
}

export default Intro
