import React, { useContext, useState } from 'react';
import searchImg from "../../assets/search.svg"
import { LocationContext } from '../../context';
import { getLocationByName } from '../../data/location-data';
const Search = () => {
    const [searchTerm, setSearchTerm] = useState("")

    const { setSelectedLocation } = useContext(LocationContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("searched term ", searchTerm);
        const fetchedLocation = getLocationByName(searchTerm)
        console.log("found location", fetchedLocation);

        setSelectedLocation({ ...fetchedLocation })

    }

    return (
        <form action="#" onSubmit={handleSubmit}>
            <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
                <input
                    onChange={e => setSearchTerm(e.target.value)}
                    className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
                    value={searchTerm}
                    type="search"
                    placeholder="Search Location" required />
                <button type="submit" className='hover:bg-stone-300 hover:bg-opacity-25 hover:rounded'>
                    <img src={searchImg} />
                </button>
            </div>
        </form>
    );
};

export default Search;