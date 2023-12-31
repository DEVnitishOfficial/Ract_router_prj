// import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data,setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/DEVnitishOfficial')
    //     .then(response => response.json())
    //     .then( data => {
    //         console.log(data)
    //         setData(data)
    //     })

    // },[])
  return (
    <div className='bg-gray-600 text-3xl text-white p-4 flex flex-col items-center justify-center'>Github followers:{data.followers}
    <img src={data.avatar_url} alt="GithHub pic" width={300} />
    </div>
  )
}

export default Github

export const GithubInfoLoader = async () => {
   const response = await fetch('https://api.github.com/users/DEVnitishOfficial')
   return response.json()
}