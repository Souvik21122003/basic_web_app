import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const  {id} = useParams();
    console.log(useParams());
  return (
    <div className='bg-green-700 text-white text-center'>
      User:{id}
    </div>
  )
}

export default User
