import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  themes: {
    lightDarkTheme: false,
    paletteTheme: "modern"
  },
  changeLightDarkTheme: ()=> {},
  changePaletteTheme: ()=> {}
})

export const useTheme = ()=> {
  return useContext(ThemeContext)
}

export const ThemeProvider = ThemeContext.Provider


// This makes your code more modular, scalable, and easier to maintain. Any developer can quickly understand how to get and set the theme without needing to know the low-level details of the context implementation