import React from "react";
import FunctionContext from "./components/FunctionContext";
import { ThemeProvider } from "./ThemeContext";

export const ThemeContext = React.createContext();

export default function App() {
  return (
    <>
      <ThemeProvider>
        <FunctionContext />
      </ThemeProvider>
    </>
  );
}
