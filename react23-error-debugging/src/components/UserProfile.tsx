import React, { useState } from "react";

function UserProfile() {
  const [user, setUser] = useState<any>(null);

  console.log("User value:", user); // Newly added log statement

  const loadUser = () => {
    // Simulating API response
    setUser({
      name: "Sathish",
      age: 25,
    });
  };

  return (
    <div>
      <button onClick={loadUser}>Load User</button>

      {/* ❌ ERROR: user is null initially */}
      {/* <h2>User Name: {user.name}</h2> */}
      {user && <h2>User Name: {user.name}</h2>}
      {!user && <h2>No user available yet</h2>}
      {/* {user && <h2>User Age: {user.age}</h2>}  */}
    </div>
  );
}

export default UserProfile;