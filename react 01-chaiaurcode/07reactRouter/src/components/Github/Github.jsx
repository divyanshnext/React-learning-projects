import React, { useState,useEffect } from 'react'

function Github() {
    // github ke followers lane hai kaise laaye 
    // api call krke late hai 
    // kb late hai ??
    // jab component load hota hai tabhi 
    // kaise laye ?
    // useEffect hook se

    const[data,setData] = useState({})

    useEffect(() => {
        fetch('https://api.github.com/users/divyanshnext')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setData(data)
        })
    }, [])
    
  return (
    <div className = 'text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers {data.followers}
    <img src={data.avatar_url} alt='git picture' width={300}/>
    </div>
    
  )
}

export default Github