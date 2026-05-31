import { Moon, Sun } from "lucide-react";
import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Header() {
  const { isDark, setIsDark, theme } = useContext(ThemeContext);

  return (
    <div
      className={`flex flex-col gap-2 p-11 ${theme.bgHeader} ${theme.borderHeader} font-[Merriweather] text-center text-white relative`}
    >
      <h1 className="text-3xl">BlogHub</h1>
      <p>| Ideias e Aprendizados |</p>

      <button
        onClick={() => {
          isDark === false ? setIsDark(true) : setIsDark(false);
        }}
        className="absolute top-4 right-4 rounded-4xl hover:bg-black/20 p-2"
      >
        {isDark === false ? <Moon /> : <Sun />}
      </button>
    </div>
  );
}

export default Header;
