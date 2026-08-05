import { create } from "zustand";

export const useUserStore = create((set) => ({
  username: "Ospite",
  role: "Visitatore",
  isLoggedIn: false,

  // Azione per cambiare l'utente (muta solo i campi indicati)
  login: (name, userRole) =>
    set({
      username: name,
      role: userRole,
      isLoggedIn: true,
    }),

  // Azione per azzerare i dati utente
  logout: () =>
    set({
      username: "Ospite",
      role: "Visitatore",
      isLoggedIn: false,
    }),
}));
