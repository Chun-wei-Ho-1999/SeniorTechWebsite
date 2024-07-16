import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import OurStoriesPage from './OurStoriesPage'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/SeniorTechWebsite/OurStories",
    element: <OurStoriesPage/>,
  },
  {
    path: "/SeniorTechWebsite",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
