
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
    // const loggedInUser = localStorage.getItem("loggedInUser") || "";
    // if(email == 'admin@me.com' && password == 123){
    //   setUser("admin")
    //   localStorage.setItem("loggedInUser", JSON.stringify({role : "admin"}))
    // }

    // if(authData){
    //   const admin = authData.employees.find((e) =>email == e.email && password == e.password)
      
    //   if(admin) {
    //     setUser("admin")
    //     setLoggedInUserData(admin)
    //     localStorage.setItem("loggedInUser", JSON.stringify({role : "admin", data: admin}))
    //   }
    // }
    if (authData) {
      const employees = authData.employees.find((e) =>email == e.email && password == e.password)
      const admin = authData.admin.find((e) =>email == e.email && password == e.password)
      if(employees) {
        setUser("employees")
        setLoggedInUserData(employees)
        localStorage.setItem("loggedInUser", JSON.stringify({role : "employees", data: employees}))
      }
      else if(admin) {
        setUser("admin")
        setLoggedInUserData(admin)
        localStorage.setItem("loggedInUser", JSON.stringify({role : "admin", data: admin}))
      }
      else {
        alert("Invalid Credentials..")
      }
    }
  } 

  return (
    <>
    {!user ? <SignInPage handleLogIn={handleLogIn}/>: ''}
    {user === "admin" && <AdminDashboard data={loggedInUserData} />}
    {user === "employees" && <EmployeeDashboard data={loggedInUserData} />}
    </>
  )
}

export default App
