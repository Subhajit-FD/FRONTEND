import { useState } from "react";

const Create = (props) => {
  const [name, setname] = useState("");
  const [age, setage] = useState(18);
  const setusers = props.setusers
  const users = props.users


  const submitHandler = (e) => {
    e.preventDefault();
    const newUser = { name, age };
    setusers([...users, newUser])
  };

  
  return (
    <div>
      <h1>Register User</h1>
      <form onSubmit={submitHandler}>
        <input
          onChange={(e) => setname(e.target.value)}
          value={name}
          type="text"
          placeholder="Full Name"
        />
        <input
          onChange={(e) => setage(e.target.value)}
          value={age}
          type="number"
          placeholder="Age"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Create;
