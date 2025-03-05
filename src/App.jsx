
import { useContext, useEffect, useState } from 'react'
import './App.css'
import AdminDashboard from './Components/Dashboad/AdminDashboard'
import EmployeeDashboard from './Components/Dashboad/EmployeeDashboard'
import SignInPage from './Components/SignInPage'
import { AuthContext } from './context/AuthProvider'

function App() {

  const [user, setUser] = useState(null);

  const [loggedInUserData, setLoggedInUserData] = useState(null);
  

  const authData = useContext(AuthContext)

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser") || "";
    if(loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  },[])
  

  const handleLogIn = (email,password) => {
    const loggedInUser = localStorage.getItem("loggedInUser") || "";
    if(email == 'admin@me.com' && password == 123){
      setUser("admin")
      localStorage.setItem("loggedInUser", JSON.stringify({role : "admin"}))
    }
    else if (authData) {
      const employee = authData.employees.find((e) =>email == e.email && password == e.password)
      if(employee) {
        setUser("employee")
        setLoggedInUserData(employee)
        localStorage.setItem("loggedInUser", JSON.stringify({role : "employees", data: employee}))
      }
    }

    if(!loggedInUser){
      return alert("invalid credentials..!!!");
    }
  } 

  return (
    <>
    {!user ? <SignInPage handleLogIn={handleLogIn}/>: ''}

    {/* {user == "admin" ? <AdminDashboard/> : (user == "employee" ? <EmployeeDashboard data={loggedInUserData} /> : null)} */}
    {user == "admin" && <AdminDashboard />}
    {user == "employees" && <EmployeeDashboard data={loggedInUserData} />}
    </>
  )
}

export default App
