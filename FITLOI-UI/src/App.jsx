import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import React from 'react'
import './App.css'
import Homepage from './Components/Homepage/Homepage';
import Footer from './Components/Homepage/Footer/Footer';

function App() {

  return (
    <>
      <BrowserRouter>
        <div className="container">
          <div className="content">
            {/* <Header/> */}
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
