import axios from 'axios'
import React,{useEffect, useState} from 'react'

const App = () => {
  
  const [data, setData] = useState([])

  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list')
    setData(response.data)
    console.log(data);
  }
  useEffect(() => { // it is used to automatically call this function and load the data. Instead of clicking the button then load it 
    getData()
  }, [])
  
  return (
    <div className='p-10'>
    {/* <button onClick={getData}className='bg-teal-700 text-white font-semibold text-2xl px-6 py-3 rounded active:scale-90'>Get data</button> */}
    <div className='p-5 bg-gray-950 text-white'>
      {data.map(function(elem,idx){
        return <div key={idx} className='bg-green-50 text-black flex items-center justify-between w-full px-7 py-6 rounded mb-3'>
          <img src={elem.download_url} className='h-40'></img>
          <h1>{elem.author}</h1>
        </div>
      })}
    </div>
    </div>
  )
}

export default App