import { create } from "zustand";
import players from "../data/players.json";

const useStore = create((set, get) => ({
  coins: 1000,
  collection: [],

  addCoins: (amount) => set((s) => ({ coins: s.coins + amount })),
  spendCoins: (amount) => set((s) => ({ coins: s.coins - amount })),

  addToCollection: (cards) =>
    set((s) => ({ collection: [...s.collection, ...cards] })),

  // Pack opening logic
  openPack: (pack) => {
    const odds = pack.odds.split("/").map(Number);
    const total = odds.reduce((a, b) => a + b, 0);

    const getTier = () => {
      const r = Math.random() * total;
      if (r < odds[0]) return "Common";
      if (r < odds[0] + odds[1]) return "Rare";
      if (r < odds[0] + odds[1] + odds[2]) return "Epic";
      return "Legend";
    };

    const pool = players;
    const pulled = Array.from({ length: 5 }).map(() => {
      const tier = getTier();
      const available = pool.filter((p) => p.tier === tier);
      return available[Math.floor(Math.random() * available.length)];
    });

    get().spendCoins(pack.price);
    get().addToCollection(pulled);
    return pulled;
  },
}));

export default useStore;
