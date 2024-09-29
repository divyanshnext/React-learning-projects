import { useState } from 'react'

function App() {
  const [color,setColor] = useState("black")
  
 
  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      
      <h1 class="text-5xl font-extrabold dark:text-white">Project04 - <small class="ms-2 font-semibold text-gray-500 dark:text-gray-400">BG-ColorChanger</small></h1>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button 
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
          style={{backgroundColor:"red"}} 
          onClick={() => setColor("red")} // yha pe pura function pass krna hota hai na ki uska reference 
          // onClick={setColor}  // wrong
          // onClick = {setColor("red")} // wrong
          >red
          </button>

          <button 
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
          style={{backgroundColor:"blue"}} 
          onClick = {()=> setColor("blue")}
          >blue
          </button>

          <button 
          className='outline-none px-4 py-1 rounded-full text-black shadow-lg' 
          style={{backgroundColor:"yellow"}} 
          onClick={() => setColor("yellow")}
          >yellow
          </button>

          <button 
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
          style={{backgroundColor:"black"}} 
          onClick = {() => setColor("black")}
          >black
          </button>

          <button 
          className='outline-none px-4 py-1 rounded-full text-black shadow-lg' 
          style={{backgroundColor:"white"}} 
          onClick = {() => setColor("white")}
          >white
          </button>

          <button 
          className='outline-none px-4 py-1 rounded-full text-black shadow-lg' 
          style={{backgroundColor:"green"}}
          onClick = {() => setColor("green")}
          >green
          </button>
        </div>
      </div>
    </div>
      
  )
}

export default App
