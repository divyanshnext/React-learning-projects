import {useState,useCallback} from 'react'

function App() {
  const[length,setLength] = useState(9)
  const[numberAllowed,setNumberAllowed] = useState(false)
  const [charAllowed,setCharAllowed] = useState(false)
  const [password,setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijjklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()~`,<>.?/{}[]:;+-*/"

    for(let i = 1; i<=Array.length; i++){
      let char = Math.floor(Math.random()*str.length + 1)
      pass = str.charAt(char)
    }
    setPassword(pass)
  },[length,numberAllowed,charAllowed,setPassword])

  return (
    <>
    <p className="text-lg text-center font-normal text-gray-500 lg:text-xl dark:text-gray-400">Project05</p>
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center">Password Generator</h1>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>test
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly=
          />
        </div>
      </div>
    </>
  )
}

export default App
