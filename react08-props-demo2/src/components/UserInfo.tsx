import React from "react";

type UserInfoProps = {
    username: string;
};

const UserInfo = ({username} : UserInfoProps) => {
    return (
        <div>   
            <h4>User Info</h4>
            <p>Username: {username}</p>
        </div>
    );
};

export default UserInfo;