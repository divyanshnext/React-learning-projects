import React from 'react'
import Header from './components/Header'
import Section from './components/Section'
import Footer from './components/Footer'
import { useConst } from '@chakra-ui/react'
import { useContext } from 'react'
import { DataContext } from './context/UserContext'

const App = () => {

  const data = useContext(DataContext)
  console.log(data)

  return (
    <div>
      <h1>this is App.jsx {data}</h1>
      <Header/>
      <Section/>
      <Footer/>
    </div>
  )
}

export default App