import React from "react";
import Profile from "./Profile";

type DashboardProps = {
    username: string;
};

const Dashboard = ({username} : DashboardProps) => {
    return (
        <div>
            <h2>Dashboard</h2>
            <Profile username={username} />
        </div>
    );
};

export default Dashboard;