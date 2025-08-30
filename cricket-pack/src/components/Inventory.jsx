import { useState } from "react";
import useStore from "../context/store";

const Inventory = () => {
  const collection = useStore((s) => s.collection);
  const [filter, setFilter] = useState("ALL");

  const filtered = filter === "ALL"
    ? collection
    : collection.filter((p) => p.role === filter);

  return (
    <div className="p-2 sm:p-4">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center sm:text-left">Your Collection</h2>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-4">
        {["ALL", "BAT", "BOWL", "AR", "WK"].map((role) => (
          <button
            key={role}
            onClick={() => setFilter(role)}
            className={`px-2 sm:px-3 py-1 rounded text-sm sm:text-base whitespace-nowrap ${
              filter === role ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
            }`}
          >
            {role}
          </button>
        ))}
      </div>

      {/* Collection Grid */}
      {filtered.length === 0 ? (
        <p className="text-gray-500 text-center">No players yet. Open some packs!</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-4">
          {filtered.map((player, i) => (
            <div key={i} className="bg-gray-800 text-white p-2 rounded flex flex-col items-center">
              <img src={player.photo} alt={player.name} className="h-16 sm:h-20 mx-auto" />
              <h3 className="font-bold text-sm sm:text-base">{player.name}</h3>
              <p className="text-xs sm:text-sm">{player.role}</p>
              <p className="text-xs sm:text-sm">Rating: {player.rating}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Inventory;
