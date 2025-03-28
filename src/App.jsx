import { useState } from 'react'
import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import Dashboard from './components/Dashboard'
import Budget from './components/Budget'

function App() {
  const router = createBrowserRouter([{
    path:"/",
    element:<Home/>
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/signup",
    element:<Signup/>
  },
  {
    path:"/dashboard",
    element:<Dashboard/>
  },
  {
    path:"/budget_tracker",
    element:<Budget/>
  }
])
  return (
    <>
    <RouterProvider router = {router}/>
    </>
  )
}

export default App
