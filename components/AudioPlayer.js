// src/components/AudioPlayer.js
import React, { useState } from 'react';
import ReactPlayer from 'react-player';

const AudioPlayer = () => {
    const [playing, setPlaying] = useState(true);

    const handlePlayPause = () => {
        setPlaying(!playing);
    };

    return (
        <div>
            <button onClick={handlePlayPause}>
                {playing ? 'Pause' : 'Play'} Music
            </button>
            <ReactPlayer
                url='https://youtube.com/shorts/frJpybfc8so'
                playing={playing}
                controls
                loop
                width="100%"
                height="50px" // You can adjust the size as needed
            />
        </div>
    );
};

export default AudioPlayer;
