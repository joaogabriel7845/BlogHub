import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailPost from "./pages/DetailPost.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/post/:id" element={<DetailPost />} />
      </Routes>
    </ThemeProvider>
  </BrowserRouter>,
);
