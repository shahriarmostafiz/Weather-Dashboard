import { useContext } from 'react';
import { FavouriteContext, LocationContext } from '../../context';

const FavouriteListModal = () => {
    const { favourites } = useContext(FavouriteContext)
    const { setSelectedLocation } = useContext(LocationContext)
    const handleClick = place => {
        setSelectedLocation({ ...place })
    }
    return (
        <div className="max-w-xs py-4 bg-white rounded-md border-gray-500 absolute right-0 top-16 text-black shadow-lg ">
            <h3 className="text-lg font-bold px-4">Favourite Locations</h3>
            <ul className="space-y-2 mt-4 *:py-2 *:px-4 *:cursor-pointer">
                {
                    favourites.length ?
                        favourites.map(place => (<li key={place?.location} className="hover:bg-gray-200">

                            <a className='w-full' onClick={() => handleClick(place)} >
                                {place.location}

                            </a>
                        </li>)
                        )
                        : <p>No Place is added to the Favourit list </p>
                }
                {/* <li className="hover:bg-gray-200">Rangpur</li> */}
                {/* <li className="hover:bg-gray-200">Europe</li> */}
            </ul>
        </div>
    );
};

export default FavouriteListModal;