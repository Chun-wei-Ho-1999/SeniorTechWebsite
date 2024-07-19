import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import AboutUsPage from './AboutUsPage'
import ContactUsPage from './ContactUsPage'
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
    path: "/AboutUs",
    element: <AboutUsPage/>,
  },
  {
    path: "/ContactUs",
    element: <ContactUsPage/>,
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
