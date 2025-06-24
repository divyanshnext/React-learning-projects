import React, { createContext, useState ,useEffect} from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

//yha pe ek Authcontext bnana hai 
export const AuthContext = createContext()

const AuthProvider = ({children}) => {

  const [userData, setuserData] = useState(null)

  // mera data bar bar localStorage se hoke aaye aur ye side me chlata rhe isiliye useEffect use kiya
  useEffect(() => {
    setLocalStorage()
    const {employees,admin} = getLocalStorage()
    setuserData({employees,admin})
  }, [])
  


  return (
    <div>
      <AuthContext.Provider value={userData}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider;