import React,{useState} from 'react'


const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(email,password)

        setEmail("")
        setPassword("")
    }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 border-emerald-600 text-white p-20 rounded-2xl'>
            <form 
            onSubmit={(e)=>{
                submitHandler(e)
            }}
            className='flex flex-col items-center justify-center'>
                <input
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }} 
                required 
                className='text-black outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400'type="email" placeholder='Enter your email'
                />
                <input
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }} 
                required 
                className='text-black outline-none bg-transparent border-2 border-emerald-600 mt-5 text-xl py-3 px-5 rounded-full placeholder:text-gray-400' type="password" placeholder='password'
                />
                <button className='text-white outline-none border-none bg-emerald-600 text-xl py-3 px-5 rounded-full w-full placeholder:text-white mt-5'>Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login