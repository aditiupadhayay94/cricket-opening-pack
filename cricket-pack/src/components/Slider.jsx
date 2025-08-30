import { useEffect, useState } from "react";

const images = [
  "/assets/slider1.jpg",
  "/assets/slider2.png",
  "/assets/slider3.png",
];

export default function Slider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto overflow-hidden rounded-xl shadow-lg mb-6 aspect-[16/9] sm:aspect-[4/3]">
      <div
        className="flex transition-transform duration-700 h-full"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`slide-${i}`}
            className="flex-shrink-0 w-full h-full object-cover"
          />
        ))}
      </div>
    </div>
  );
}
