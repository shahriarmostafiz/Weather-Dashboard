import React, { useContext, useState } from 'react';
import searchImg from "../../assets/search.svg"
import { LocationContext } from '../../context';
import { getLocationByName } from '../../data/location-data';
import { useDebounce } from '../../hooks';
const Search = () => {
    const [searchTerm, setSearchTerm] = useState("")

    const { setSelectedLocation } = useContext(LocationContext)

    const doSearch = useDebounce((value) => {
        const fetchedLocation = getLocationByName(value)
        console.log("found location", fetchedLocation);

        setSelectedLocation({ ...fetchedLocation })
    }, 800)

    const handleChange = e => {
        // e.preventDefault()
        const value = e.target.value
        // setSearchTerm(value)
        doSearch(value)
    }


    return (
        <form>
            <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
                <input
                    onChange={handleChange}
                    className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
                    type="search"
                    placeholder="Search Location" required />
                <button className='hover:bg-stone-300 hover:bg-opacity-25 hover:rounded'>
                    <img src={searchImg} />
                </button>
            </div>
        </form>
    );
};

export default Search;