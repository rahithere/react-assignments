import React from 'react'

function Category({ categories, setSelectedCategory }) {

    return (
        <select className="h-10 rounded-lg border border-gray-200 px-3 text-sm outline-none"
            onChange={(e) => (setSelectedCategory(e.target.value))}
        >
            {categories.map((category, index) => {
                return <option key={index} value={category}>{category}</option>
            })}
        </select>
    )
}

export default Category