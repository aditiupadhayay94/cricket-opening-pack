import useStore from "../context/store";

export default function Profile() {
  const { coins, xp, level } = useStore();

  // XP progress calculate
  const xpPercent = Math.min((xp / 100) * 100, 100);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      {/* Avatar */}
      <div className="w-24 h-24 rounded-full bg-blue-500 flex items-center justify-center text-3xl font-bold mb-4">
        🏏
      </div>

      <h2 className="text-3xl font-bold mb-6">My Profile</h2>

      {/* Level */}
      <p className="text-lg mb-2">Level: <span className="font-semibold">{level}</span></p>

      {/* XP with progress bar */}
      <div className="w-64 bg-gray-700 rounded-full h-4 mb-4 overflow-hidden">
        <div
          className="bg-green-500 h-4"
          style={{ width: `${xpPercent}%` }}
        ></div>
      </div>
      <p className="mb-6">XP: {xp}/100</p>

      {/* Coins */}
      <p className="text-lg">
        Coins: <span className="font-semibold text-yellow-400">{coins}</span>
      </p>
    </div>
  );
}
