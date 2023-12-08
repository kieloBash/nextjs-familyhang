"use client";
import React, { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";
import { Pause, Play } from "lucide-react";

// Assuming that /assets/sound.wav is a valid path to your audio file
const audioPath = "/assets/sound.wav";

const SongMPThree: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }

      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.autoplay = true;
    }
  }, []);

  return (
    <>
      <div className="hidden">
        <audio ref={audioRef} src={audioPath} autoPlay={false} />
      </div>
      <Button
        type="button"
        className="mt-10 cursor-pointer fixed bottom-4 left-4 z-[100]"
        onClick={togglePlay}
      >
        {isPlaying ? <Pause /> : <Play />}
      </Button>
    </>
  );
};

export default SongMPThree;
