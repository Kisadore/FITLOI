import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import React from 'react'
import './App.css'
import Homepage from './Components/Homepage/Homepage';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Discover from './Components/Discover/Discover';
import Feed from './Components/Feed/Feed';
import Log from './Components/Log/Log';
import Login from "./Components/Login/Login";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

function App() {

  return (
    <>
      <BrowserRouter>
        <div className="container">
            <Header/>
          <div className="content">
            <Routes>
              <Route path="/" element={<Homepage/>}/>
              <Route path="/log" element={<Log/>}/>
              <Route path="/discover" element={<Discover/>}/>
              <Route path="/feed" element={<Feed/>}/>
              {/* <Route path="/login" element={<Login/>}/> */}
              {/* <Route path="/register" element={<Register/>}/> */}
              {/* <Route path="/favorites" element={<Favorites/>}/> */}
              {/* <Route path="/profile" element={<Profile/>}/> */}
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
