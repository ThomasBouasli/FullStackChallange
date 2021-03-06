import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import './index.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";


import Home from "./routes/home";
import SignIn from "./routes/signin";
import LogIn from "./routes/login";
import LandingPage from "./routes/landingpage";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/login" element={<LogIn />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
