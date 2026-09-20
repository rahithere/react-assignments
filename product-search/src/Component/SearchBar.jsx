import React from 'react'

function SearchBar() {
    return (
        <div className="w-[280px] h-[38px] bg-white rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.12)] flex items-center px-3">
            <span className="text-gray-400 text-sm mr-2">⌕</span>

            <input
                type="text"
                placeholder="Search products..."
                className="w-full outline-none border-none text-sm text-gray-700 placeholder:text-gray-400 bg-transparent"
            />
        </div>
    )
}

export default SearchBar