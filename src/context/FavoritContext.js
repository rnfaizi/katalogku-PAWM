import { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FavoritContext = createContext(null);
const STORAGE_KEY = 'katalogku:favorit';

export function FavoritProvider({ children }) {
  const [favorit, setFavorit] = useState([]); // daftar produk
  const [loaded, setLoaded] = useState(false); // sudah dibaca dari penyimpanan?

  // Tantangan: baca favorit tersimpan saat Provider pertama kali dibuka
  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY)
      .then((json) => {
        if (json) setFavorit(JSON.parse(json));
      })
      .catch(() => {}) // data rusak/tidak terbaca: mulai dari daftar kosong
      .finally(() => setLoaded(true));
  }, []);

  // Simpan setiap kali favorit berubah. Tunggu loaded agar data lama
  // tidak tertimpa array kosong sebelum selesai dibaca.
  useEffect(() => {
    if (loaded) AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(favorit));
  }, [favorit, loaded]);

  const isFavorit = (id) => favorit.some((p) => p.id === id);

  const toggleFavorit = (produk) => {
    setFavorit((prev) =>
      prev.some((p) => p.id === produk.id)
        ? prev.filter((p) => p.id !== produk.id) // hapus
        : [...prev, produk]);                     // tambah
  };

  const value = { favorit, isFavorit, toggleFavorit, loaded };

  return (
    <FavoritContext.Provider value={value}>
      {children}
    </FavoritContext.Provider>
  );
}

// Custom hook agar screen cukup memanggil useFavorit()
export function useFavorit() {
  return useContext(FavoritContext);
}
