import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Search } from "./components/Search/Search";
import { Nav } from "./components/nav/Nav";
import { Error404 } from "./components/404/404";
import { Footer } from "./components/Footer/Footer";
const router = createBrowserRouter([
  {
    path: "/search",
    element: <><App /> </>,
  },
  {
    path: "/",
    element: (
      <>
        <Nav></Nav> <App /> 
      </>
    ),
  },
  {
    path: "/search/:query",
    element: (
      <>
        <Nav></Nav> <Search />
      </>
    ),
  },
  {
    path: "*",
    element: (
      <>
        <Nav></Nav>{" "}
        <Box
          width={"100%"}
          height="5px"
          bgGradient="linear(to-l, #3182ce, #0064fa)"
          marginTop={"10px"}
        />
        <Error404></Error404>
        
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
