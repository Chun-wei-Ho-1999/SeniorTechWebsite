import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import OurStoriesPage from './OurStoriesPage'
import './index.css'

import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

const router = createHashRouter([
  {
    path: "/OurStories",
    element: <OurStoriesPage/>,
  },
  {
    path: "/",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
