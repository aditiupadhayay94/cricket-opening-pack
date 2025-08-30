import { useState, useEffect } from "react";
import PackSelector from "./components/PackSelector";
import PackOpening from "./components/PackOpening";
import Inventory from "./components/Inventory";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import useStore from "./context/store";
import players from "./data/players.json";

export default function App() {
  const [stage, setStage] = useState("menu");
  const [cards, setCards] = useState([]);
  const { addToCollection, spendCoins } = useStore();

  const generateCards = (pack) => {
    const drawn = players.sort(() => 0.5 - Math.random()).slice(0, 5);
    spendCoins(pack.price);
    setCards(drawn);
    setStage("opening");
    addToCollection(drawn);
  };

  // ✅ Slider logic
  const slides = [
    "/assets/slider1.jpg",
    "/assets/slider2.png",
    "/assets/slider3.png",
  ];
  const [current, setCurrent] = useState(0);

  useEffect(() => { 
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white flex">
      {/* Left Sidebar Navbar */}
      <Navbar setStage={setStage} />

      {/* Main Content Area */}
      <main className="flex-1 p-6 ml-48">
        <h1 className="text-center text-4xl font-bold p-6">
          Cricket Pack Opening
        </h1>

        {/* Slider + PackSelector */}
        {stage === "menu" && (
          <>
            <div className="relative w-full h-[500px] overflow-hidden rounded-2xl mb-6 shadow-lg
                            border-4 border-blue-400
                            ring-4 ring-blue-500 ring-opacity-50
                            hover:ring-opacity-100 transition-all duration-500">
              {slides.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`slide-${index}`}
                  className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${
                    current === index ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>

            <PackSelector onOpen={generateCards} />
          </>
        )}

        {stage === "opening" && (
          <PackOpening cards={cards} onDone={() => setStage("menu")} />
        )}
        {stage === "inventory" && <Inventory />}
        {stage === "profile" && <Profile />}
      </main>
    </div>
  );
}
