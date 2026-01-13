import React from "react";

function BuggyComponent() {
  // ❌ Undefined variable
  const user: any = undefined;

  return (
    <div>
      <h2>User Name: {user.name}</h2>
    </div>
  );
}

export default BuggyComponent;