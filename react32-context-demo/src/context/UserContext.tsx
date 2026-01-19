import React from "react";

type UserContextType = {
    username: string;
};

export const UserContext = React.createContext<UserContextType>({
    username:"",
});

type UserProviderProps = {
    children: React.ReactNode;

};

export const UserProvider = ({ children }: UserProviderProps) => {
    return (
        <UserContext.Provider value={{ username: "John" }}>
            {children }
        </UserContext.Provider>
    );
};



