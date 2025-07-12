import { useState } from "react"
import { nanoid } from 'nanoid'
import Create from "./components/Create"
import Read from "./components/Read"

const App = () => {
  
  const [todos, setTodos] = useState([{
    id: 1, title: "Test"
  }])



  

  return (
    <div className="w-screen h-screen bg-zinc-950 text-white px-4 py-3">
     <Create todos={todos} setTodos={setTodos}/>
      <hr />
      <Read todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default App