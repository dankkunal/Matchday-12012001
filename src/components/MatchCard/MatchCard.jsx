import React from "react";
import TeamAvatar from "../TeamAvatar/TeamAvatar";
import { useNavigate } from "react-router-dom";

import "./MatchCard.css";

function MatchCard({
    heading,
    subHeading,
    logo,
    a1,
    a2,
    a3,
    b1,
    b2,
    b3,
    team1Name,
    team2Name,
    winner,
}) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/match");
    };

    return (
        <div className={"match-card"} onClick={handleClick}>
            <h2>{heading}</h2>
            <h4>{subHeading}</h4>
            <div className="match-sub-card">
                <TeamAvatar
                    winner={winner === 0}
                    img={
                        "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg"
                    }
                    name={team1Name}
                />
                <div className="match-details">
                    <p className={"match-type"}>v/s</p>
                    <p
                        className={"match-rounds"}
                    >{`${a1}-${b1} , ${a2}-${b2} , ${a3}-${b3}`}</p>
                    <img className={"match-logo"} src={logo} alt="logo-img" />
                </div>
                <TeamAvatar
                    winner={winner === 1}
                    img={
                        "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg"
                    }
                    name={team2Name}
                />
            </div>
        </div>
    );
}

export default MatchCard;
