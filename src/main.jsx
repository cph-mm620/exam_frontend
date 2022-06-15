import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import FetchCreateForm from "./components/FetchCreateForm";
import FetchRead from "./components/FetchRead";
import FetchUpdate from "./components/FetchUpdate";
import FetchDelete from "./components/FetchDelete";
import LogOut from "./components/LogOut";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import Matches from "./components/Matches";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/LogIn" element={<LogIn />}></Route>
        <Route path="/LogOut" element={<LogOut />}></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>
        <Route path="/Matches" element={<Matches />}></Route>
      </Route>
      <Route
        // default for when the link is wrong
        // like this http://localhost:3000/hjklhjklh
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <h1>There's nothing here!</h1>
            <p>
              <a href="/">To go back click here!</a>
            </p>
          </main>
        }
      />
    </Routes>
  </BrowserRouter>
);
