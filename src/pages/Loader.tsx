// // // // import { useState } from "react";
// // // // import Video from "../assets/Flow_delpmaspu_ (2).mp4"
// // // // const Loader = ({ onComplete }: { onComplete: () => void }) => {
// // // //   return (
// // // //     <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">
// // // //       <video
// // // //         src={Video}   // 👈 apna video ka naam yahan likho
// // // //         autoPlay
// // // //         muted
// // // //         playsInline
// // // //         onEnded={onComplete}           // video khatam hote hi gayab ho jaayega
// // // //         className="w-full h-full object-cover"
// // // //       />

// // // //       {/* Optional: Skip button */}
// // // //       <button
// // // //         onClick={onComplete}
// // // //         className="absolute bottom-8 right-8 text-white border border-white px-4 py-2 rounded text-sm hover:bg-white hover:text-black transition"
// // // //       >
// // // //         Skip →
// // // //       </button>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Loader;

// // // import { useEffect, useRef } from "react";
// // // import Video from "../assets/Flow_delpmaspu_ (2).mp4";

// // // const Loader = ({ onComplete }: { onComplete: () => void }) => {
// // //   const videoRef = useRef<HTMLVideoElement>(null);

// // //   useEffect(() => {
// // //     if (videoRef.current) {
// // //       videoRef.current.playbackRate = 2; // 👈 2x speed — aur fast chahiye toh 3 ya 4 karo
// // //     }
// // //   }, []);

// // //   return (
// // //     <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">
// // //       <video
// // //         ref={videoRef}              // 👈 ref attach kiya
// // //         src={Video}
// // //         autoPlay
// // //         muted
// // //         playsInline
// // //         onEnded={onComplete}
// // //         className="w-full h-full object-cover"
// // //       />

// // //       {/* Skip button */}
// // //       <button
// // //         onClick={onComplete}
// // //         className="absolute bottom-8 right-8 text-white border border-white px-4 py-2 rounded text-sm hover:bg-white hover:text-black transition"
// // //       >
// // //         Skip →
// // //       </button>
// // //     </div>
// // //   );
// // // };

// // // export default Loader;

// // import { useEffect, useRef } from "react";
// // import Video from "../assets/Flow_delpmaspu_ (2).mp4";

// // const Loader = ({ onComplete }: { onComplete: () => void }) => {
// //   const videoRef = useRef<HTMLVideoElement>(null);

// //   useEffect(() => {
// //     if (videoRef.current) {
// //       videoRef.current.playbackRate = 2;
// //     }
// //   }, []);

// //   return (
// //     <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden">
      
// //       {/* Video */}
// //       <video
// //         ref={videoRef}
// //         src={Video}
// //         autoPlay
// //         muted
// //         playsInline
// //         onEnded={onComplete}
// //         className="
// //           w-full h-full object-cover
// //           sm:object-cover
// //           md:object-cover
// //         "
// //       />

// //       {/* Overlay (optional for better visibility) */}
// //       <div className="absolute inset-0 bg-black/20" />

// //       {/* Skip Button */}
// //       <button
// //         onClick={onComplete}
// //         className="
// //           absolute 
// //           bottom-4 right-4 
// //           sm:bottom-6 sm:right-6 
// //           md:bottom-8 md:right-8
          
// //           text-white 
// //           border border-white 
// //           px-3 py-1.5 
// //           sm:px-4 sm:py-2 
          
// //           text-xs sm:text-sm md:text-base
          
// //           rounded 
// //           hover:bg-white hover:text-black 
// //           transition
// //         "
// //       >
// //         Skip →
// //       </button>
// //     </div>
// //   );
// // };

// // export default Loader;

// import { useEffect, useRef } from "react";
// import Video from "../assets/Flow_delpmaspu_ (2).mp4";

// const Loader = ({ onComplete }: { onComplete: () => void }) => {
//   const videoRef = useRef<HTMLVideoElement>(null);

//   useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.playbackRate = 2;
//     }
//   }, []);

//   return (
//     <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      
//       {/* Video */}
//       <video
//         ref={videoRef}
//         src={Video}
//         autoPlay
//         muted
//         playsInline
//         onEnded={onComplete}
//         className="w-full h-full object-contain"   // 🔥 yahi main fix hai
//       />

//       {/* Skip Button */}
//       <button
//         onClick={onComplete}
//         className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 text-white border border-white px-3 py-2 text-sm rounded hover:bg-white hover:text-black transition"
//       >
//         Skip →
//       </button>
//     </div>
//   );
// };

// export default Loader;


import { useEffect, useRef, useState } from "react";
import Video from "../assets/Flow_delpmaspu_ (2).mp4";

const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isReady, setIsReady] = useState(false); // 👈 NEW

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2;
    }
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden">
      
      {/* 👇 Jab tak video ready nahi tab tak black screen */}
      {!isReady && (
        <div className="absolute inset-0 bg-black z-10" />
      )}

      {/* Video */}
      <video
        ref={videoRef}
        src={Video}
        autoPlay
        muted
        playsInline
        preload="auto"                    // 👈 faster load
        poster="/loader-preview.jpg"      // 👈 optional (add image in public folder)
        onCanPlay={() => setIsReady(true)} // 👈 KEY FIX
        onEnded={onComplete}
        className="w-full h-full object-contain"
      />

      {/* Skip Button */}
      <button
        onClick={onComplete}
        className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 text-white border border-white px-3 py-2 text-sm rounded hover:bg-white hover:text-black transition z-20"
      >
        Skip →
      </button>
    </div>
  );
};

export default Loader;