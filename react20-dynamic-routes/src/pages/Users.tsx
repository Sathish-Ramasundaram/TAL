import React from "react";
import { Link } from "react-router-dom";

function Users() {
  return (
    <div>
      <h2>👥 Users List</h2>

      <ul>
        <li><Link to="/user/1">1</Link></li>
        <li><Link to="/user/2">2</Link></li>
        <li><Link to="/user/3">3</Link></li>
        <li><Link to="/user/4">Sathish</Link></li>
        <li><Link to="/user/5">Ram</Link></li>
        <li><Link to="/user/6">Mahesh</Link></li>
      </ul>
    </div>
  );
}

export default Users;