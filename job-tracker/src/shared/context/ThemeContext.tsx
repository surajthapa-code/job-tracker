import { createContext, useContext, useState, type ReactNode } from "react";
type Theme = "dark" | "light";
interface themeContextType {
  theme: Theme;
  toggleTheme: () => void;
}
const ThemeContext = createContext<themeContextType | null>(null);
export function Themeprovider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  function toggleTheme() {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }
  return context;
}
