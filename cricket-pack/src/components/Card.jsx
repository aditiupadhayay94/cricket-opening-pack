export default function Card({ player }) {
  const tierColors = {
    Common: "from-gray-200 to-gray-400",
    Rare: "from-blue-400 to-blue-600",
    Epic: "from-purple-500 to-purple-700",
    Legend: "from-yellow-400 to-yellow-600"
  };

  const borderColors = {
    Common: "border-gray-400 shadow-gray-300",
    Rare: "border-blue-400 shadow-blue-400",
    Epic: "border-purple-500 shadow-purple-500",
    Legend: "border-yellow-400 shadow-yellow-400"
  };

  return (
    <div
      className={`relative w-28 h-40 sm:w-32 sm:h-48 rounded-xl p-2 text-center 
      bg-gradient-to-br ${tierColors[player.tier]} 
      border-4 ${borderColors[player.tier]} shadow-lg 
      transition-all duration-300 hover:shadow-[0_0_20px_var(--tw-shadow-color)]`}
    >
      {/* Shiny glowing effect layer */}
      <div className="absolute inset-0 rounded-xl border-4 border-white/50 animate-pulse pointer-events-none"></div>

      <img 
        src={player.photo} 
        alt={player.name} 
        className="h-12 sm:h-16 mx-auto relative z-10" 
      />
      <h3 className="font-bold text-sm sm:text-base relative z-10">{player.name}</h3>
      <p className="text-xs sm:text-sm relative z-10">{player.role}</p>
      <p className="text-xs sm:text-sm relative z-10">Rating: {player.rating}</p>
    </div>
  );
}
