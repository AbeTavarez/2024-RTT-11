import './App.css'
import NavBar from './components/Navbar/Navbar';

function App() {

  const user = {
    age: 18,
    isLoggedIn: true,
    isAdmin: true,
    darkMode: true 
  }

  // if (user.isLoggedIn) {
  //   return <h1>Welcome</h1>
  // } else {
  //   return <h1>Please log in!</h1>
  // }

  if (!user.isLoggedIn) {
    return <h1>Please log in!</h1>
  }

  // ====
  const getAdminData = () => {
    // fetching data...
    return (
      <div>
        <h3>Show the Admin Data</h3>
      </div>
    )
  }
  const getData = () => {
    // fetching data...
    return (
      <div>
        <h3>Show Data for Regular user</h3>
      </div>
    )
  }



  return (
    <div className={user.darkMode ? 'darkMode': 'lightMode'}>
      
      <NavBar userData={user} />


     <h1 style={{display: user.isAdmin ? 'block': 'none'}} >React Conditionals</h1>

     {user.age >= 18 ? <h3>Register to vote</h3> : <h3>See more details</h3>}

     {user.isAdmin ? getAdminData(): getData()}
    </div>
  )
}

export default App
