import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import { ChakraProvider } from '@chakra-ui/react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { Search } from './components/Search/Search';
import { Nav } from './components/nav/Nav';

const router = createBrowserRouter([
  {
    path: "/search",
    element: <App/>,
  },
  {
    path: "/",
    element: <><Nav></Nav> <App/></>,
  },
  {
    path: "/search/:query",
    element: <><Nav></Nav> <Search/></>,
  },
  {
    path: "*",
    element: <><h1>Not found</h1></>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />  
    </ChakraProvider>
  </React.StrictMode>,
)
