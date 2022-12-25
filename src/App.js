import './App.css';
import React from "react";
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import Alert from './components/Alert';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"


function App() {
  const [alert, setAlert] = useState(null)

  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }

  const [mode, setdmode] = useState('light')
  const toggleMode = () => {
    if (mode === "light") {
      setdmode('dark')
      document.body.style.backgroundColor = "black"
      showAlert('Dark Mode Is Enabled', "success")
      setTimeout(() => {
        setAlert(null)
      }, 1500)
    }
    else {
      setdmode('light')
      document.body.style.backgroundColor = "white"
      showAlert('Dark Mode Disaled', "success")
      setTimeout(() => {
        setAlert(null)
      }, 1500)
    }
  }
  let rohan = " rohan";
  return (
    <>
        <Router>
      <Navbar title="TextUtiles" mode={mode} toggleMode={toggleMode} />
      <Alert mess={alert} />
      <div className="container my-3" >
          <Routes>
          <Route exact path="/" element={<Textform mode={mode} />}></Route>
          <Route exact path="/about" element={<About mode={mode} />}></Route>
          </Routes>
      </div>
        </Router>
    </>
  );
}

export default App;
