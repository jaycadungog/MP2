import React from 'react'
import './index.css'
import Home from "./routes/Home"
import About from "./routes/About"
import Project from "./routes/Project"
import Contact from "./routes/Contact"
import Movie from "./routes/Movie"
import { Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/About" element={<About/>} />
      <Route path="/Project" element={<Project/>} />
      <Route path="/Contact" element={<Contact/>} />
      <Route path="/Movie" element={<Movie/>} />
    </Routes>
    </>
  )
}

export default App
