async function getUsers() {
  const res = await fetch("http://localhost:3000/api/users");
  return res.json();
}

export default async function Blog() {
  const users = await getUsers();

  return (
    <div style={{textAlign:"center"}}>
      <h1>Users List</h1>

      {users.map(user => (
        <p key={user.id}>
          {user.name} - {user.role}
        </p>
      ))}
    </div>
  );
}