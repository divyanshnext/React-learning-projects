import { useState } from 'react'
import './App.css'
import { Card,CardContent,Button } from '@mui/material'

function App() {
  const [cart, setcart] = useState([]);

  const product = [
    {id: 1, name:"Laptop", price:5000},
    {id: 2, name:"Smartphone",price:2500},
    {id: 3, name:"Headphones",price:3000},
    {id: 4, name:"SmartWatch",price:4000},
  ];

  const addToCart = (product) => {
    setcart([...cart,product]);
  };

  return (
    <>
      <div className='min-h-screen bg-gray-100'>

        {/* Navbar */}

        <nav className='bg-white shadow p-4 flex justify-between items-center'>
          <h1 className='text-2xl font-bold'>E-Commerce</h1>
          <div>
            <Button variant='contained'>Home </Button>
            --
            <Button variant='contained'>Cart ({cart.length})</Button>
          </div>
        </nav>

        {/* Hero Section */}

        <header className='bg-blue-500 text-white text-center py-20'>
          <h1 className='text-4xl font-bold'>Welcome to Our Store</h1>
          <p className='text-lg mt-2'>Best Deals on tech Products</p>
        </header>

        {/* Product List */}

        <div className='p-6'>
          <h2 className='text-3xl font-bold text-center mb-6'>Featured Products</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {product.map((product)=>(
              <Card key={product.id} className='p-4 bg-white shadow rounded-xl'>
                <CardContent>
                  <h2 className='text-xl font-semibold'>{product.name}</h2>
                  <p className='text-gray-700'>{product.price}</p>
                  <Button variant="contained" onClick={() => addToCart(product)} className='mt-4 w-full'>Add to Cart</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Cart Section */}

        <div className='mt-8 p-6 bg-white shadow rounded-xl mx-6'>
          <h2 className='text-2xl font-semibold'>Cart</h2>
          {cart.length > 0 ? (
            <ul>
              {cart.map((item,index) => (
                <li key={index} className='text-gray-700'>{item.name} - {item.price}</li>
              ))}
            </ul>
          ): (
            <p className='text-gray-500'>Your cart is empty</p>
          )}
        </div>

        {/* footer */}
        <footer className='bg-gray-800 text-white text-center p-4 mt-10'>
          <p>&copy; 2025 E-commerce. All rights reserved.</p>
          <p> made with ❤️ by divyansh </p>
        </footer>
      </div>
    </>
  )
}

export default App
