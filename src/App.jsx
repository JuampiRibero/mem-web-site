// import './App.css'
// import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';

const App = () => {
  return (
    <>
      <NavBar />
      <Home />
      <Footer /> 
    </>
  )
}

export default App
