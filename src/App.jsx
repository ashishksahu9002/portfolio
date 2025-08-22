import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  const [themes, setThemes] = useState({
    lightDarkTheme: false,
    paletteTheme: "modern",
  });

  const changeLightDarkTheme = (darkMode) => {
    setThemes((prevThemes) => ({
      ...prevThemes,
      lightDarkTheme: darkMode,
    }));
  };
  const changePaletteTheme = (newPaletteTheme) => {
    setThemes((prevThemes) => ({
      ...prevThemes,
      paletteTheme: newPaletteTheme,
    }));
  };

  const contextValue = {
    themes,
    changeLightDarkTheme,
    changePaletteTheme,
  };

  return (
    <>
      <ThemeProvider value={contextValue}>
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
