import { useState } from "react";
import Create from "./components/Create";
import Read from "./components/Read";

const App = () => {
  const [users, setusers] = useState([
    {
      name: "John",
      age: 30,
    },
    {
      name: "Jane",
      age: 25,
    },
  ]);

  return (
    <div className="bg-zinc-900 text-white w-screen h-screen p-5">
      <Create users={users} setusers={setusers} />
      <hr />
      <Read users={users} setusers={setusers}/>
    </div>
  );
};

export default App;
