import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import App from "../pages/_app";

const theme = extendTheme({
  colors: {
    brand: {
      50: "#FF4B3E",
      100: "#FF4B3E",
      200: "#FF4B3E",
      300: "#FF4B3E",
      400: "#FF4B3E",
      500: "#FF4B3E", // you need this
      600: "#FF4B3E",
      700: "#FF4B3E",
      800: "#FF4B3E",
      900: "#FF4B3E",
    }
  }
});

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  rootElement
);