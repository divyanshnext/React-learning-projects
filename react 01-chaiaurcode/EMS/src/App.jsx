import React, { useState,useEffect, useContext } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import AuthProvider, { AuthContext } from './context/AuthProvider'

const App = () => {
  
  const [user, setUser] = useState(null)
  const [loggedInUserData, setloggedInUserData] = useState(null)

  // ye authprovider se data lene ke liye useContext ka pryog kiya hai 
  const authData = useContext(AuthContext)
  // console.log(authData.employees)

  // kon login hai ye bhi toh check krna hai
  // useEffect(() => {
  //   if(authData){
  //     const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))
  //     if(loggedInUser){
  //       setUser(loggedInUser.role)
  //     }
  //   }
  // }, [authData]);
  

  const handleLogin = (email,password) => {
    if(email == 'admin@me.com' && password == '123'){
      setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
      // check kro ki authData ke employees me jo email hai wo iske email se match kr rha hai kya agar ha
    }else if(authData){
      const employee = authData.employees.find((e)=>email == e.email && e.password == password)
      if(employee){
        setUser('employee')
        setloggedInUserData(employee) 
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee'}));
      }
    }
    else{
      alert('Invalid user');
    }
  }

  // useEffect(() => {
  //   console.log("Updated user:", user);
  // }, [user]); // runs only when user changes

  
  

  return (
    <>
    {!user ? <Login handleLogin={handleLogin} /> : ''}
    {user == 'admin' ? <AdminDashboard/> : (user == 'employee' ? <EmployeeDashboard data={loggedInUserData}/> : null)}
    </>
  )
}

export default App