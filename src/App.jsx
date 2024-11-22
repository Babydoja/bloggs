import { useState } from 'react'
import './App.css'
import AddBlog from './pages/AddBlog'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'primeicons/primeicons.css';
import EditBlog from './pages/EditBlog'
import SingleBlog from './pages/SingleBlog'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
    <ToastContainer />
    <BrowserRouter>
      <Routes>
        <Route path="/"element={ <Home/>} />
        <Route path="/addblog"  element={<AddBlog/>} />
        <Route path="/editblog/:id"  element={<EditBlog/>} />
        <Route path="/singleblog/:id"  element={<SingleBlog/>} />
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
