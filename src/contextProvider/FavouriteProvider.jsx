import React from 'react';
import { FavouriteContext } from '../context';
import { useLocalStorage } from '../hooks';

const FavouriteProvider = ({ children }) => {
    const [favourites, setFavourites] = useLocalStorage("favourites", [])
    const addToFavourites = (lat, long, location) => {
        setFavourites(
            ...favourites,
            {
                latitude: lat,
                longitude: long,
                location
            }
        )
    }
    const removeFromFavourites = (location) => {
        const restFav = favourites.filter(fav => fav.location !== location)
        setFavourites(restFav)
    }
    const value = { addToFavourites, removeFromFavourites, favourites }
    return (
        <FavouriteContext.Provider value={value}>
            {children}
        </FavouriteContext.Provider>
    );
};

export default FavouriteProvider;