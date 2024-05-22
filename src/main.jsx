import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Theame.js";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={darkTheme}>
    <ChakraProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ChakraProvider>
  </ThemeProvider>
);
