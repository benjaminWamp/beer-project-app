import React, { createContext, useContext, useEffect, useState } from "react";
import { loginUser } from "../utils/services/AuthService";
import { Favorite } from "../types/favorite.types";
import {
    addToFavorites,
    deleteFavorites,
    fetchUserFavorite,
} from "../utils/services/FavoriteService";
import UserContext from "./UserContext";
import AlertContext from "./AlertContext";

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
    const { addAlert } = useContext(AlertContext);
    const [toLoad, setToLoad] = useState(false);

    const handleDeleteFavorite = async (productId: number) => {
        if (token) {
            try {
                await deleteFavorites(token, productId);
                setToLoad(true);
            } catch (err) {
                addAlert("error", err);
            }
        } else {
            addAlert(
                "warning",
                "Veuillez vous connecter pour effectuer cette action"
            );
        }
    };

    const handleAddToFavorite = async (productId: number) => {
        if (token) {
            try {
                await addToFavorites(token, productId);
                setToLoad(true);
            } catch (err) {
                addAlert("failure", err);
            }
        } else {
            addAlert(
                "warning",
                "Veuillez vous connecter pour effectuer cette action"
            );
        }
    };

    const getUserFavorites = async (
        currentPage: number,
        pagination: boolean
    ) => {
        if (token) {
            try {
                return await fetchUserFavorite(token, currentPage, pagination);
            } catch (err) {
                addAlert("error", err);
            }
        }
    };

    const getAllUserFavorites = async () => {
        if (token) {
            try {
                const favoritesData = await fetchUserFavorite(token, 0, false);
                setUserAllFavorites(favoritesData);
            } catch (err) {
                addAlert("error", err);
            }
        } else {
            setUserAllFavorites(undefined);
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
