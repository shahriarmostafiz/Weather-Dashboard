import React, { useContext, useEffect, useState } from 'react';
import heart from "../../../assets/heart.svg"
import heartRed from "../../../assets/heart-red.svg"
import { FavouriteContext, WeatherContext } from '../../../context';
const AddToFavourites = () => {

    const { addToFavourites, removeFromFavourites, favourites } = useContext(FavouriteContext)
    const { weatherData } = useContext(WeatherContext)

    const { latitude, longitude, location } = weatherData
    const [isFavourite, setIsFavourite] = useState(false)

    useEffect(() => {
        const found = favourites?.find(fav => fav.location === location)
        if (found) {
            setIsFavourite(true)
        }

    }, [])

    const handleFavourite = () => {
        const found = favourites?.find(fav => fav.location === location)
        if (!found) {
            addToFavourites(
                latitude, longitude, location
            )
        }
        else {
            removeFromFavourites(location)
        }
        setIsFavourite(!isFavourite)
    }
    return (
        <div className="md:col-span-2">
            <div className="flex items-center justify-end space-x-6">
                <button
                    onClick={handleFavourite}
                    className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D] hover:bg-gray-400 transition duration-100">
                    {
                        isFavourite ? <>
                            <span>Remove Favourite </span>
                            <img src={heartRed} alt="" />
                        </> : <>
                            <span>Add to Favourite</span>
                            <img src={heart} alt="" />
                        </>
                    }
                </button>

            </div>
        </div>
    );
};

export default AddToFavourites;