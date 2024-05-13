// AlertContext.js
import React, { createContext, useContext, useState } from "react";
import { Alert } from "flowbite-react";

type AlertContextType = {
    addAlert: (type: string, message: string) => void;
};

type AlertType = {
    type: string;
    message: string;
};

const AlertContext = createContext<AlertContextType>({
    addAlert: () => {},
});

export default AlertContext;

interface AlertContextProps {
    children: React.ReactElement;
}

export const useAlert = () => {
    const context = useContext(AlertContext);
    if (!context) {
        throw new Error("useContext must be used within a FavoriteProvider");
    }
    return context;
};

export const AlertContextProvider = (props: AlertContextProps) => {
    const { children } = props;
    const [type, setType] = useState<string>();
    const [message, setMessage] = useState<string>();
    const [open, setOpen] = useState<boolean>(false);

    const addAlert = (type, message) => {
        setType(type);
        setMessage(message);
        setOpen(true);
        setTimeout(() => {
            setOpen(false);
        }, 10000);
    };

    return (
        <AlertContext.Provider value={{ addAlert }}>
            {children}
            {open && (
                <Alert
                    color={type}
                    style={{
                        position: "fixed",
                        bottom: "20px",
                        right: "20px",
                        zIndex: 11,
                    }}
                >
                    {message}
                    <button
                        type="button"
                        className="ms-auto -mx-1.5 -my-1.5 bg-dark-50 text-dark-500 rounded-lg focus:ring-2 focus:ring-dark-400 p-1.5 hover:bg-dark-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-dark-400 dark:hover:bg-gray-700"
                        onClick={() => setOpen(false)}
                    >
                        <span className="sr-only">Close</span>
                        <svg
                            className="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 14"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                            />
                        </svg>
                    </button>
                </Alert>
            )}
        </AlertContext.Provider>
    );
};
