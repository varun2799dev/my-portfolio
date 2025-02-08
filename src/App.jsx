import Navbar from './components/Navbar'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'


function App() {
const router = createBrowserRouter([
  {
    path : '/',
    element : <><Navbar/><Home/></>

  },
  {
    path: '/about',
    element : <><Navbar/><About/></>
  },
  {
    path : '/contact',
    element : <><Navbar/><Contact/></>
  }
])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
