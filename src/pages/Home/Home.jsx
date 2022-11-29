import React, { useState } from "react";
import MatchList from "./MatchList";

import "./Home.css";
import SearchBar from "../../components/SearchBar/SearchBar";

function Home(props) {
    const [searchVal, setSearchVal] = useState("");

    return (
        <div className={"page home"}>
            <h1>International Matches</h1>
            <SearchBar
                placeholder={"Search for Matches"}
                searchVal={searchVal}
                setSearchVal={setSearchVal}
            />
            <MatchList searchVal={searchVal} />
        </div>
    );
}

export default Home;
