import { FaPlay, FaPause } from "react-icons/fa";
import { useRef } from "react";
import { useState } from "react";
export default function AboutVideo() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const handlePlayPause = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };
  return (
    <div className="relative h-[300px] rounded-2xl overflow-hidden">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        poster="/muscle.png"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src="/fitness-video.mp4" type="video/mp4" />
      </video>

      <button
        onClick={handlePlayPause}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="w-15 h-15 rounded-full bg-[#B7F10A] hover:scale-110 transition-all duration-300 shadow-xl flex items-center justify-center">
          {isPlaying ? (
            <FaPause className="text-black text-lg" />
          ) : (
            <FaPlay className="text-black text-lg ml-1" />
          )}
        </div>
      </button>
    </div>
  );
}
