import { useState } from "react";

const UserObj = () => {
  const [user, setUser] = useState({
    name: "John  Doe",
    age: 30,
    city: "Nakuru",
  });

  function handleChange(e) {
    console.log(e.target.name);
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  }

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>City: {user.city}</p>

      <h3>Update user Name</h3>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleChange}
      />
      <h3>Update user Age</h3>
      <input
        type="number"
        name="age"
        value={user.age}
        onChange={handleChange}
      />
      <h3>Update user City</h3>
      <input
        type="text"
        name="city"
        value={user.city}
        onChange={handleChange}
      />
    </div>
  );
};

export default UserObj;
