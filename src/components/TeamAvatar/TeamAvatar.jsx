import React from "react";
import "./TeamAvatar.css";

function TeamAvatar({ img, name, winner }) {
    return (
        <div className={"team-avatar"}>
            {winner && (
                <img
                    className={"crown"}
                    src={
                        "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/08f830ae-ce65-42f5-b243-b7a3f8a15b5f/crown.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221128T163818Z&X-Amz-Expires=86400&X-Amz-Signature=5ab371af8d90a4ee522443749b0e813d18dbbd26ff987675c8c808e965f204e5&X-Amz-SignedHeaders=host&x-id=GetObject"
                    }
                    alt="crown-img"
                />
            )}
            <div className="img-wrapper">
                <img className={"avatar-img"} src={img} alt="team-avatar-img" />
            </div>
            <p>{name}</p>
        </div>
    );
}

export default TeamAvatar;
