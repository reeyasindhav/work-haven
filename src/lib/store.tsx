import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { SEED_BOOKINGS, type Booking } from "./data";

export interface User {
  name: string;
  email: string;
  plan: string;
  avatar: string;
}

interface Store {
  user: User | null;
  ready: boolean;
  login: (email: string, name?: string) => void;
  logout: () => void;
  bookings: Booking[];
  addBooking: (b: Booking) => void;
  cancelBooking: (id: string) => void;
  favorites: string[];
  toggleFavorite: (id: string) => void;
}

const StoreContext = createContext<Store | null>(null);

const KEY = "treehouse.state.v1";

export function StoreProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [bookings, setBookings] = useState<Booking[]>(SEED_BOOKINGS);
  const [favorites, setFavorites] = useState<string[]>(["heden-graca", "outpost-ubud"]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed.user) setUser(parsed.user);
        if (parsed.bookings) setBookings(parsed.bookings);
        if (parsed.favorites) setFavorites(parsed.favorites);
      }
    } catch {
      /* ignore */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(KEY, JSON.stringify({ user, bookings, favorites }));
  }, [user, bookings, favorites, ready]);

  const login = useCallback((email: string, name?: string) => {
    setUser({
      name: name || email.split("@")[0].replace(/[._]/g, " ") || "Nomad",
      email,
      plan: "Explorer",
      avatar: "https://i.pravatar.cc/160?img=15",
    });
  }, []);

  const logout = useCallback(() => setUser(null), []);

  const addBooking = useCallback((b: Booking) => setBookings((prev) => [b, ...prev]), []);

  const cancelBooking = useCallback(
    (id: string) =>
      setBookings((prev) =>
        prev.map((b) => (b.id === id ? { ...b, status: "Cancelled" as const } : b)),
      ),
    [],
  );

  const toggleFavorite = useCallback(
    (id: string) =>
      setFavorites((prev) => (prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id])),
    [],
  );

  const value = useMemo(
    () => ({
      user,
      ready,
      login,
      logout,
      bookings,
      addBooking,
      cancelBooking,
      favorites,
      toggleFavorite,
    }),
    [user, ready, login, logout, bookings, addBooking, cancelBooking, favorites, toggleFavorite],
  );

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used inside StoreProvider");
  return ctx;
}
