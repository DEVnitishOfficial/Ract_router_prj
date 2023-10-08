import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userId} = useParams()
  return (
    <div className='bg-gray-600 text-3xl text-white p-4 flex items-center justify-center'>User : {userId}</div>
  )
}

export default User