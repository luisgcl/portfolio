import React, { useEffect, useState, useRef } from "react";
import ReactPlayer from "react-player";
import player from "../audio/impossible.mp3";
import ReactAudioPlayer from "react-audio-player";
import YouTube from "react-youtube";
import LiteYouTubeEmbed from "react-lite-youtube-embed";

const Player = () => {
  const audioRef = useRef(null);

  const playAudio = () => {
    audioRef.current.play();
  };

  useEffect(() => {
    playAudio();
  }, []);
  return (
    <div>
      {/* <ReactPlayer
        url="https://www.youtube.com/watch?v=pbVA3TsqGiA"
        playing={true}
        // onPlay={true}
        allow="autoplay"
        controls
        muted={false}
        // onReady
        onStart
        onPlay
        unstarted
      /> */}

      <button onClick={playAudio}>Reproducir</button>
      <audio ref={audioRef} src={player} loop />

      {/* <ReactPlayer
        ref={playerRef}
        url="https://www.youtube.com/watch?v=pbVA3TsqGiA"
        playing
        controls
        config={{
          file: {
            attributes: {
              autoplay: true,
              muted: false,
              playsinline: true,
            },
          },
        }}
        onLoadedMetadata={handleLoadedMetadata}
      /> */}
      {/* <ReactAudioPlayer ref={audioRef} src={player} autoPlay={true} controls /> */}
    </div>
  );
};

export default Player;
