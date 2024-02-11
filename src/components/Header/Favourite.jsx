import React from 'react';
import heart from "../../assets/heart.svg"

const Favourite = ({ handleClick }) => {
    return (
        <div
            onClick={handleClick}
            className="p-2 bg-black/5  hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all">
            <img src={heart} alt="" />
            <span className='text-white '>Favourite Locations</span>
        </div>
    );
};

export default Favourite;