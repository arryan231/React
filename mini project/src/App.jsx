import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './componenets/Login'
import Profile from './componenets/Profile'

function App() {

  console.log("APP jsx")
  return (
    <UserContextProvider>
      <h1>Wellcome Home</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
