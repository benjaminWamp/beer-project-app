import React, { createContext, useContext, useEffect, useState } from "react";
import { loginUser, loginUserTest } from "../utils/services/AuthService";

type UserContextType = {
    isLogged: boolean;
    setIsLogged: (_: boolean) => void;
    token: string | null;
    setToken: (_: string) => void;
    userId: string | null;
    setUserId: (_: string) => void;
    logOut: () => void;
    logIn: (_: any) => Promise<void>;
    url: string;
};
// Create a context
const UserContext = createContext<UserContextType>({
    isLogged: false,
    setIsLogged: (_: boolean) => {},
    token: null,
    setToken: (_: string) => {},
    userId: null,
    setUserId: (_: string) => {},
    logOut: () => {},
    logIn: async (userInfo: any) => {},
    url: "http://127.0.0.1:8000",
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
    const [token, setToken] = useState<string | null>(null);
    const [userId, setUserId] = useState<string | null>(null);
    const [isLogged, setIsLogged] = useState(false);
    const url = "http://127.0.0.1:8000";

    useEffect(() => {
        const localToken = localStorage.getItem("token");
        const localUser = localStorage.getItem("user_id");

        if (localToken && localUser && !isLogged) {
            setToken(localToken);
            setUserId(localUser);
            setIsLogged(true);
        }
    }, [token]);

    const logOut = () => {
        setIsLogged(false);
        localStorage.removeItem("token");
        localStorage.removeItem("user_id");
        setToken(null);
        setUserId(null);
    };

    const logIn = async (userInfo) => {
        await loginUserTest(userInfo);
        try {
            const tokenData = await loginUserTest(userInfo);

            setToken(tokenData.token);

            localStorage.setItem("token", tokenData.token);
            localStorage.setItem("user_id", tokenData.user);
        } catch (error) {
            console.log("error");
            //TODO Alert
        }
    };

    return (
        <UserContext.Provider
            value={{
                token,
                setToken,
                isLogged,
                setIsLogged,
                userId,
                setUserId,
                logOut,
                url,
                logIn,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
