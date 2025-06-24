import React from 'react'
import { useContext } from 'react'
import { DataContext } from '../context/UserContext'

const Footer = () => {
    const username = useContext(DataContext)
  return (
    <div>
        <h1>Footer of {username}</h1>
    </div>
  )
}

export default Footer