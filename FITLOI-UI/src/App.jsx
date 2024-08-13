import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import React from 'react'
import './App.css'
import Homepage from './Components/Homepage/Homepage';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

function App() {

  return (
    <>
      <BrowserRouter>
        <div className="container">
            <Header/>
          <div className="content">
            <Routes>
              <Route path="/" element={<Homepage/>}/>
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
