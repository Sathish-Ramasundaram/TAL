import React from "react";
import UserInfo from "./UserInfo";

type ProfileProps = {
    username: string;
};

const Profile = ({username} : ProfileProps) => {
    return (
        <div>
            <h3>Profile</h3>
            <UserInfo username={username} />
        </div>
    );
};

export default Profile;