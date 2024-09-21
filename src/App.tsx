import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/Theme/Default";
import { GlobalStyles } from "./styles/global";

export function App() {
  return (
    <BrowserRouter>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
    <Router />
    </ThemeProvider>
    </BrowserRouter>
  )
}