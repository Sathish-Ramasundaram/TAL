import React, { useState, useEffect, useRef } from "react";

function VideoPlayer() {
  // 1️⃣ State: should video play or not?
  const [isPlaying, setIsPlaying] = useState(false);

  // 2️⃣ Reference to the video element
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // 3️⃣ Effect: play/pause video when state changes
  useEffect(() => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.play();
      console.log("Video playing 🎥");
    } else {
      videoRef.current.pause();
      console.log("Video paused ⏸️");
    }
  }, [isPlaying]);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Video Player Demo</h2>

      <video
        ref={videoRef}
        width="400"
        controls
        style={{ border: "2px solid black" }}
      >
        <source src="/sample.mp4" type="video/mp4" />
        Your browser does not support video.
      </video>

      <br /><br />

      <button
        onClick={() => setIsPlaying(!isPlaying)}
        style={{ padding: "10px", fontSize: "16px" }}
      >
        {isPlaying ? "Pause Video" : "Play Video"}
      </button>
    </div>
  );
}

export default VideoPlayer;
