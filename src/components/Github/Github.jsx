import React, { useEffect } from 'react'
import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data = useLoaderData();
  return (
      <div className='bg-gray-200 '>
          <div className="text-center text-white bg-gray-500">Github Followers:{data.followers}<br></br>userName:{data.login}</div> 
          <div className='flex items-center justify-center '><img src={data.avatar_url} alt="" /></div>
    </div>
  )
}

export const gitDataLoader = async() => {
    try {
        const res = await fetch('https://api.github.com/users/Souvik21122003')
        return res.json()
    } catch (error) {
        console.log("there has been an error in fetching data");
        return {}
    }
}
export default Github
