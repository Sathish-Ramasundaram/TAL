import React from "react";
import { UserContext } from "../context/UserContext";

const UserInfo = () => {
    const {username} = React.useContext(UserContext);
    return (
        <div>
            <h4>User Info</h4>
            <p>Username: {username}</p>
        </div>
    );
};  
export default UserInfo;
