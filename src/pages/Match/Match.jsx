import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";

import "./Match.css";

function Match(props) {
    const ref = useRef();
    const [playing, setPlaying] = useState(false);

    const playVideo = () => {
        setPlaying(true);
    };

    const pauseVideo = () => {
        setPlaying(false);
    };

    const forwardVideo = () => {
        ref.current.seekTo(ref.current.getCurrentTime() + 5);
        setPlaying(true);
    };

    const backwardVideo = () => {
        ref.current.seekTo(ref.current.getCurrentTime() - 5);
        setPlaying(true);
    };

    return (
        <div className="page match">
            <h1>Video Analytics</h1>
            <ReactPlayer
                ref={ref}
                playing={playing}
                className="react-player"
                style={{ margin: "auto" }}
                url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                width="800px"
                height="500px"
                controls={true}
            />
            <div>
                <button onClick={playVideo}>Play</button>
                <button onClick={pauseVideo}>Pause</button>
                <button onClick={forwardVideo}>Forward</button>
                <button onClick={backwardVideo}>Backward</button>
            </div>
        </div>
    );
}

export default Match;
