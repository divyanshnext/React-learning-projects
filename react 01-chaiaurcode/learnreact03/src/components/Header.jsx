import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='py-7 px-10 bg-emerald-600 text-white flex items-center justify-between'>
        <h2 className='text-2xl'>Sheriyans</h2>
        <div className='flex gap-10 text-lg underline'>

            {/* anchor tag use krne par page reload hota hai */}

            {/* <a className='text-xl underline' href='/'>Home</a> 
            <a className='text-xl underline' href="/about">About</a>
            <a className='text-xl underline' href="/contact">Contact</a>
            <a className='text-xl underline' href='/product'>Product</a> */}

            {/*Link tag use krne par page reload nhi hota */}
            
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/product'>Product</Link>
            <Link to='/contact'>Contact</Link>
        </div>
    </div>
  )
}

export default Header