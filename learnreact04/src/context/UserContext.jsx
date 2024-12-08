import React from 'react'
import { createContext } from 'react'

export const DataContext = createContext()

const UserContext = ({children}) => {
    
    const username = "divyansh"

  return (
    <div>
        {/* <h1>usercontext</h1> */}
        <DataContext.Provider value={username}>
            {children}
        </DataContext.Provider>
        
    </div>
  )
}

export default UserContext