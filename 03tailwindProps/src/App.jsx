import { useState } from 'react'
import Card from './components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // let myObj = {
  //   userName: "divyansh",
  //   age: 21
  // }
  // let newArr = [1,2,3]

  return (
    <>
    
      <h1 className='bg-pink-400 text-black p-4 rounded-xl mb-4'>project 03</h1>
      {/* <Card userName = "divyansh" someObj={myObj} someArr = {newArr}/> */} 
      {/* array aur objects bhi upar ki tarah pass kr skte hai */}
      <Card userName = "divyansh" spanText = "#coder"/>
      <Card userName = "hitesh" spanText = "#developer"/>
      
    </>
  )
}

export default App
