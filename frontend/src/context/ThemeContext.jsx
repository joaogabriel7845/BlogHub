import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);

  const theme = {
    bg: isDark ? "bg-[#252524]" : "bg-white",
    bgHeader: isDark ? "bg-[#1F1F1E]" : "bg-[#597864]",
    bgHover: isDark ? "hover:bg-[#3a3a39]" : "hover:bg-gray-200",
    borderHeader: isDark ? "border-b border-white/10" : "border-0",
    filterBgActive: isDark ? "bg-gray-200" : "bg-slate-800",
    text: isDark ? "text-white" : "text-black",
    divider: isDark ? "divide-white/20" : "divide-black/20",
    border: isDark ? "border-white/10" : "border-black/10",
    borderDetailPost: isDark ? "border-white/20" : "border-black/20",
  };

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark, theme }}>
      {children}
    </ThemeContext.Provider>
  );
}
