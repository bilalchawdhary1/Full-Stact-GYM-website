import "./App.css"
import {BrowserRouter as Router } from "react-router-dom"
import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import WorkoutSessions from "./components/WorkoutSessions"
import Gallery from "./components/Gallery"
import Pricing from "./components/Pricing"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { ToastContainer } from "react-toastify"

const App = () => {
  return (
    <Router>
      <Navbar/>
      <HeroSection/>
      <WorkoutSessions/>
      <Gallery/>
      <Pricing/>
      <Contact/>
      <ToastContainer/>
      <Footer/>
    </Router>
  )
}

export default App
