import React from "react";

const SearchBox = ({ searchField, onSearchChange }) => {
    return (
        <>
            <div>
                <input className="pa3 ba b--green bg-lightest-blue"
                    type='search'
                    placeholder="search robot"
                    onChange={onSearchChange}
                />
            </div>

        </>

    )
}

export default SearchBox;