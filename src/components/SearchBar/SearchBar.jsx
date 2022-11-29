import React from "react";
import { FaSearch } from "react-icons/fa";

import "./SearchBar.css";

function SearchBar({ placeholder, searchVal, setSearchVal }) {
    const handleChange = (e) => {
        setSearchVal(e.target.value);
    };

    return (
        <div className={"search-container"}>
            <FaSearch />
            <input
                type="text"
                placeholder={placeholder}
                value={searchVal}
                onChange={handleChange}
            />
        </div>
    );
}

export default SearchBar;
