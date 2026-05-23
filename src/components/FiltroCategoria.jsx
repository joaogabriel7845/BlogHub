import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function FiltroCategoria({ category, categoryActive, setCategoryActive }) {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      className={`w-fit border ${category === categoryActive ? "border-green-500 font-medium" : theme.border} p-2 rounded-4xl ${theme.bg} ${theme.filterBgHover} transition-all cursor-pointer text-center ${theme.text} font-[Montserrat]`}
      onClick={() => {
        setCategoryActive(category === categoryActive ? null : category);
      }}
    >
      {category}
    </button>
  );
}

export default FiltroCategoria;
