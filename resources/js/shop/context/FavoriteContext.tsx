import React, { createContext, useContext, useEffect, useState } from "react";
import { loginUser } from "../utils/services/AuthService";
import { Favorite } from "../types/favorite.types";
import {
    addToFavorites,
    deleteFavorites,
    fetchUserFavorite,
} from "../utils/services/FavoriteService";
import UserContext from "./UserContext";

type FavoriteContextType = {
    userAllFavorites: Favorite[] | undefined;
    setUserAllFavorites: (userFavorites: Favorite[] | undefined) => void;
    handleAddToFavorite: (productId: number) => void;
    handleDeleteFavorite: (productId: number) => void;
    getUserFavorites: (
        currentPage: number,
        pagination: boolean
    ) => Promise<any>;
};
// Create a context
const FavoriteContext = createContext<FavoriteContextType>({
    userAllFavorites: undefined,
    setUserAllFavorites: (_: Favorite[] | undefined) => {},
    handleAddToFavorite: (productId: number) => {},
    handleDeleteFavorite: (productId: number) => {},
    getUserFavorites: (currentPage, pagination: boolean) => {
        return Promise.resolve();
    },
});

export default FavoriteContext;

interface FavoriteContextProps {
    children: React.ReactElement;
}

export function useFavorite() {
    const context = useContext(FavoriteContext);
    if (!context) {
        throw new Error("useFavorite must be used within a FavoriteProvider");
    }
    return context;
}

export const FavoriteContextProvider = (props: FavoriteContextProps) => {
    const { children } = props;
    const [userAllFavorites, setUserAllFavorites] = useState<
        Favorite[] | undefined
    >(undefined);
    const { token } = useContext(UserContext);
    const [toLoad, setToLoad] = useState(false);

    const handleDeleteFavorite = async (productId: number) => {
        if (token) {
            await deleteFavorites(token, productId);
        }
        setToLoad(true);
    };

    const handleAddToFavorite = async (productId: number) => {
        if (token) {
            await addToFavorites(token, productId);
        }
        setToLoad(true);
    };

    const getUserFavorites = async (
        currentPage: number,
        pagination: boolean
    ) => {
        if (token) {
            return await fetchUserFavorite(token, currentPage, pagination);
        }
    };

    const getAllUserFavorites = async () => {
        if (token) {
            const favoritesData = await fetchUserFavorite(token, 0, false);
            setUserAllFavorites(favoritesData);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            await getAllUserFavorites();
            setToLoad(false);
        };
        fetchData();
    }, [token, toLoad]);

    return (
        <FavoriteContext.Provider
            value={{
                userAllFavorites,
                setUserAllFavorites,
                handleAddToFavorite,
                handleDeleteFavorite,
                getUserFavorites,
            }}
        >
            {children}
        </FavoriteContext.Provider>
    );
};
