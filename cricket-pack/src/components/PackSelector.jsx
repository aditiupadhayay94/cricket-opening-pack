import useStore from "../context/store";

const packs = [
  { name: "Bronze", price: 100, odds: "70/25/4.5/0.5", colors: "from-green-600 to-emerald-800 border-green-400" },
  { name: "Silver", price: 250, odds: "40/45/13/2", colors: "from-sky-500 to-blue-700 border-blue-400" },
  { name: "Gold", price: 500, odds: "20/50/25/5", colors: "from-cyan-400 to-teal-600 border-cyan-300" }
];

export default function PackSelector({ onOpen }) {
  const { coins } = useStore();

  return (
    <div className="flex justify-center items-center p-4 md:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 max-w-7xl w-full">
        {packs.map((p) => (
          <div
            key={p.name}
            className={`relative w-full sm:w-80 p-6 rounded-2xl bg-gradient-to-br ${p.colors} text-white shadow-2xl border-4 transition-transform transform hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,200,0.8)]`}
          >
            <h2 className="text-xl font-extrabold text-center tracking-wide drop-shadow-md">
              {p.name} Pack
            </h2>
            <p className="mt-2 text-center text-base font-medium">
              Price: {p.price} coins
            </p>
            <p className="text-xs opacity-90 text-center">Odds: {p.odds}</p>
            <div className="flex justify-center">
              <button
                disabled={coins < p.price}
                onClick={() => onOpen(p)}
                className="mt-4 px-4 py-2 bg-black/70 text-cyan-200 font-semibold rounded-lg hover:bg-black/90 disabled:opacity-50 shadow-md hover:shadow-cyan-400/50 transition-all"
              >
                Open Pack
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
