import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './layout'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import User from './components/User/User'
import Github from './components/Github/Github'
import { GithubInfoLoader } from './components/Github/Github'




const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout />,
    children : [
      {
        path:"",
        element:<Home />
      },
      {
        path:"about",
        element :<About />
      },
      {
        path:"contact",
        element :<Contact />
      },
      {
        path:"user/:userId",
        element :<User />
      },
      {
        loader:() => GithubInfoLoader(),
        path:"github",
        element:<Github />
      }
    ]
  }
])

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={Layout}>
//           <Route path='' element={<Home />} />
//           <Route path='about' element={<About />} />
//           <Route path='contact' element={<Contact />} />
//     </Route>
//   )
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
