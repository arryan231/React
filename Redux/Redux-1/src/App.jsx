import { useState } from 'react'
import AddTodos from './components/AddTodo'
import Todos from './components/Todo'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1> Hello Welcome Redux  </h1>
      <AddTodos />
      <Todos />
    </>
  )
}

export default App
