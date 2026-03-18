

import { useEffect } from "react";
import Video from "../assets/Flow_delpmaspu_ (2).mp4";

const Loader = ({ onComplete }) => {

  useEffect(() => {
    // fallback: agar video fail ho jaye to bhi hide ho jaye
    const timer = setTimeout(() => {
      onComplete();
    }, 9000); // 4 sec loader

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
      <video
        src={Video}
        autoPlay
        muted
        playsInline
        onEnded={onComplete} // ✅ video khatam hote hi hide
        className="w-full h-full object-contain"
      />

      <button
        onClick={onComplete} // ✅ skip button
        className="absolute bottom-4 right-4 text-white border border-white px-3 py-2 text-sm rounded hover:bg-white hover:text-black transition"
      >
        Skip →
      </button>
    </div>
  );
};

export default Loader;