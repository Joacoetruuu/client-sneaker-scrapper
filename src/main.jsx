import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Search } from "./components/Search/Search";
import { Nav } from "./components/nav/Nav";
import { Error404 } from "./components/404/404";
import { Footer } from "./components/Footer/Footer";
import { Product } from "./components/Product/grid/ProductGrid";
import { ProductMoov } from "./components/Product/moov/ProductMoov";
import { ProductDigitalSport } from "./components/Product/digitalSport/ProductDigitalSport";
import { ProductDexter } from "./components/Product/dexter/ProductDexter";
import { DropsProduct } from "./components/Product/drops/DropsProduct";
import { ProductNewBalance } from "./components/Product/newBalance/ProductNewBalance";
import AlertError from "./components/Alerts/Alert";

const router = createBrowserRouter([
  {
    path: "/search",
    element: (
      <>
        <App />{" "}
      </>
    ),
  },
  {
    path: "/",
    element: (
      <>
        <AlertError/>
        <Nav></Nav> <App />
      </>
    ),
  },
  {
    path: "/product/grid/:query/*",
    element: (
      <>
        <Nav></Nav>{" "}
        <Box
          width={"100%"}
          height="5px"
          bgGradient="linear(to-l, #3182ce, #0064fa)"
          marginTop={"10px"}
        />{" "}
        <Product />
      </>
    ),
  },
  {
    path: "/product/moov/:query/:query",
    element: (
      <>
        <Nav></Nav>
        <Box
          width={"100%"}
          height="5px"
          bgGradient="linear(to-l, #3182ce, #0064fa)"
          marginTop={"10px"}
        />{" "}
        <ProductMoov />
      </>
    ),
  },
  {
    path: "/product/dexter/:query/:query",
    element: (
      <>
        <Nav></Nav>{" "}
        <Box
          width={"100%"}
          height="5px"
          bgGradient="linear(to-l, #3182ce, #0064fa)"
          marginTop={"10px"}
        />
        <ProductDexter />
      </>
    ),
  },
  {
    path: "/product/digitalsport/:query/:query/:query",
    element: (
      <>
        <Nav></Nav>{" "}
        <Box
          width={"100%"}
          height="5px"
          bgGradient="linear(to-l, #3182ce, #0064fa)"
          marginTop={"10px"}
        />{" "}
        <ProductDigitalSport />
      </>
    ),
  },

  {
    path: "/product/drops/:query",
    element: (
      <>
        <Nav></Nav>{" "}
        <Box
          width={"100%"}
          height="5px"
          bgGradient="linear(to-l, #3182ce, #0064fa)"
          marginTop={"10px"}
        />{" "}
        <DropsProduct />
      </>
    ),
  },

  {
    path: "/product/newbalance/:query",
    element: (
      <>
        <Nav></Nav>{" "}
        <Box
          width={"100%"}
          height="5px"
          bgGradient="linear(to-l, #3182ce, #0064fa)"
          marginTop={"10px"}
        />{" "}
        <ProductNewBalance />
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
