import React, { useState } from "react";
import "./App.css";
// import "./components/LoginStyle.css";
import Navbar from "./components/Navbar";
import Textarea from "./components/Textarea";
import Alert from "./components/Alert";
import About from "./components/About";
import Login from "./components/Login";
// import {mbtn, bbtn} from './logic';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      <Router>
          <Navbar />
          <Alert alert={alert} />
        <Routes>
          <Route exact path="/" element={<Textarea heading="Enter Text Here To Analyze" showAlert={showAlert} />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
