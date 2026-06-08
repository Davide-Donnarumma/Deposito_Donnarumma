import { create } from "zustand";
import axios from "axios";

export const useGameStore = create((set, get) => ({
  giveaways: [],
  selectedGame: null,
  loading: false,
  error: null,

  fetchGiveaways: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(
        "https://www.gamerpower.com/api/giveaways",
      );
      set({ giveaways: response.data.slice(0, 12), loading: false });
    } catch {
      set({
        error: "Errore di connessione al database centrale GamerPower.",
        loading: false,
      });
    }
  },

  fetchGameById: (id) => {
    const { giveaways } = get();
    const game = giveaways.find((g) => g.id === Number(id));
    set({ selectedGame: game || null });
  },

  addGiveaway: (newGame) => {
    const gameConId = {
      ...newGame,
      id: Date.now(),
      thumbnail:
        "https://via.placeholder.com/400x200/000000/00ffcc?text=NEW+UPLOAD",
    };
    set((state) => ({ giveaways: [gameConId, ...state.giveaways] }));
  },

  deleteGiveaway: (id) => {
    set((state) => ({
      giveaways: state.giveaways.filter((g) => g.id !== id),
    }));
  },
}));
