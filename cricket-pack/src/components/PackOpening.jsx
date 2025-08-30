import { useEffect } from "react";
import { motion } from "framer-motion";
import Card from "./Card";
import confetti from "canvas-confetti";

export default function PackOpening({ cards, onDone }) {
  useEffect(() => {
    // Confetti
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });

    // Audio
    const audio = new Audio("/assets/open-pack.mp3");
    audio.play();

    // Stop audio after short duration 
    const timer = setTimeout(() => {
      audio.pause();
      audio.currentTime = 0;
    }, 2500);

    // Cleanup on unmount
    return () => {
      clearTimeout(timer);
      audio.pause();
      audio.currentTime = 0;
    };
  }, []); 

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <motion.div
        className="w-40 h-60 bg-yellow-500 rounded-lg flex items-center justify-center text-white text-xl font-bold"
        initial={{ scale: 0.9 }}
        animate={{ scale: [1, 1.1, 1], rotate: [0, -5, 5, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        Pack!
      </motion.div>

      <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-4">
        {cards.map((c, i) => (
          <motion.div
            key={c.id || i}
            initial={{ opacity: 0, rotateY: 180 }}
            animate={{ opacity: 1, rotateY: 0 }}
            transition={{ delay: i * 0.4 }}
          >
            <Card player={c} />
          </motion.div>
        ))}
      </div>

      <button
        className="mt-6 px-6 py-2 bg-green-400 rounded-xl"
        onClick={onDone}
      >
        Done
      </button>
    </div>
  );
}
