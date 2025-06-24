import React from 'react'
import Count from './components/Count'

const App = () => {
  return (
    <div className='app'>
    <button>increment</button>
    <Count/>
    <button>decrement</button>
    </div>
  )
}

export default App