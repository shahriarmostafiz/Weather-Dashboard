import React, { useEffect, useRef } from 'react';

const useDebounce = (callback, delay) => {

    const timeOutId = useRef(null);
    useEffect(() => {
        if (timeOutId.current) {
            return () => clearTimeout(timeOutId.current)
        }
    }, [])

    const debouncedCallBack = (...args) => {

        if (timeOutId.current) {
            clearTimeout(timeOutId.current)
        }
        timeOutId.current = setTimeout(() => {
            callback(...args)
        }, delay)
    }
    return debouncedCallBack

};

export default useDebounce;