import React,{useState} from 'react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [username, setusername] = useState('')
  const submitHandler = (e) =>{
    if(!username.trim()){
      console.log("username cant be empty")
    }
    console.log(username.trim());
    console.log("submitted");
    setusername('')
  }
  return (
    <div>
      <Navbar/>
      
      <form onSubmit={(e) => {
        e.preventDefault()
        submitHandler()
      }} >
        <input value={username} type='text' placeholder='enter your name' onChange={(e)=>{
          setusername(e.target.value)
        }}></input>
        <button type='submit'>submit</button>
      </form>
      <Footer/>
    </div>
  )
}

export default App