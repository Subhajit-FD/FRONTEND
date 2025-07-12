const Read = (props) => {
  const users = props.users
  console.log(users)
  const renderUsers = users.map((user, index) => {
    return <li key={index}>Name: {user.name}</li>;
  });

  return (
    <div>
      <h1>User Data</h1>
      <ol>{renderUsers}</ol>
    </div>
  );
};

export default Read;
