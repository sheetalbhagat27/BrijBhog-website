import { useState } from "react";
import Video from "../assets/Flow_delpmaspu_ (2).mp4"
const Loader = ({ onComplete }: { onComplete: () => void }) => {
  return (
    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">
      <video
        src={Video}   // 👈 apna video ka naam yahan likho
        autoPlay
        muted
        playsInline
        onEnded={onComplete}           // video khatam hote hi gayab ho jaayega
        className="w-full h-full object-cover"
      />

      {/* Optional: Skip button */}
      <button
        onClick={onComplete}
        className="absolute bottom-8 right-8 text-white border border-white px-4 py-2 rounded text-sm hover:bg-white hover:text-black transition"
      >
        Skip →
      </button>
    </div>
  );
};

export default Loader;