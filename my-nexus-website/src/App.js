import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./NavBar/Navbar";
import Home from "./Home/Home";
import Learn from "./LearnPage/learn";
import Quiz from "./QuizPage/quiz";
import Login from "./Login/Login";
import Register from "./Register/Register";
import "./App.css";

function App() {
  return (
    <>
    <Router>
      <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="learn" element={<Learn />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
