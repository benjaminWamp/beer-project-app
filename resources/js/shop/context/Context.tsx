import React, { createContext, useContext, useEffect, useState } from "react";

type UserContextType = {
    isLogged: boolean;
    setIsLogged: (_: boolean) => void;
    token: string;
    setToken: (_: string) => void;
};
// Create a context
const UserContext = createContext<UserContextType>({
    isLogged: false,
    setIsLogged: (_: boolean) => {},
    token: "",
    setToken: (_: string) => {},
});

export default UserContext;

interface UserContextProps {
    children: React.ReactElement;
}

export function useUser() {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
}

export const UserContextProvider = (props: UserContextProps) => {
    const { children } = props;
    const [token, setToken] = useState<string>("");
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token && !isLogged) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            setToken(token);
            setIsLogged(true);
        }
    }, [token]);

    return (
        <UserContext.Provider
            value={{ token, setToken, isLogged, setIsLogged }}
        >
            {children}
        </UserContext.Provider>
    );
};
