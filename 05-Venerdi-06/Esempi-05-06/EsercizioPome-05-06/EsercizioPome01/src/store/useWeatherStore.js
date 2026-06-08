import { create } from "zustand";
import axios from "axios";

const traduciCodiceMeteo = (codice) => {
  if (codice === 0) return "☀️ Cielo Sereno";
  if (codice >= 1 && codice <= 3) return "☁️ Nuvoloso";
  if (codice >= 45 && codice <= 48) return "🌫️ Nebbia";
  if (codice >= 51 && codice <= 67) return "🌧️ Pioggia";
  if (codice >= 71 && codice <= 77) return "❄️ Neve";
  if (codice >= 95) return "⛈️ Temporale";
  return "🌍 Variabile";
};

export const useWeatherStore = create((set) => ({
  meteo: null,
  caricamento: true,
  errore: false,

  fetchMeteo: async (nomeCitta) => {
    set({ caricamento: true, errore: false, meteo: null });

    try {
      const geoResponse = await axios.get(
        `https://geocoding-api.open-meteo.com/v1/search?name=${nomeCitta}&count=1&language=it&format=json`,
      );

      if (!geoResponse.data.results) {
        throw new Error("Città non trovata");
      }

      const { latitude, longitude, name, country } =
        geoResponse.data.results[0];

      const weatherResponse = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code`,
      );

      const datiAttuali = weatherResponse.data.current;

      set({
        meteo: {
          nome: name,
          nazione: country,
          temperatura: datiAttuali.temperature_2m,
          umidita: datiAttuali.relative_humidity_2m,
          vento: datiAttuali.wind_speed_10m,
          descrizione: traduciCodiceMeteo(datiAttuali.weather_code),
        },
        caricamento: false,
      });
    } catch (error) {
      console.error("Errore API Open-Meteo:", error);
      set({ errore: true, caricamento: false });
    }
  },

  resetMeteo: () => set({ meteo: null, caricamento: true, errore: false }),
}));
