import "./App.css";
import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import img from "./images/sportslogo.png";
import ShowHideComponent from "./components/ShowHideComponent";

function App() {
  const [dropDown, setDropDown] = useState(false);
  const [showHide, setShowHide] = useState(false);
  const [myLocalStorage, setMyLocalStorage] = useState("");

  useEffect(() => {
    let saved = localStorage.getItem("localStorage");
    if (
      localStorage.getItem("localStorage") === null ||
      localStorage.getItem("localStorage") === undefined
    ) {
      localStorage.setItem("localStorage", "something");
    }
    if (myLocalStorage === "") {
      setMyLocalStorage(saved);
    }
  });

  //set favicon
  var link = document.createElement("link");
  link.type = "image/png";
  link.rel = "icon";
  link.href = img;
  document.getElementsByTagName("head")[0].appendChild(link);

  return (
    <div className="App">
        <nav>
          <Link
            className="active links"
            onClick={(e) => {
              removeActive();
              addActive(e.target);
            }}
            to="/"
          >
            Home
          </Link>
          <Link className="links" to="/Matches">
            Matches
          </Link>
          <Link className="links" to="/Teams">
            Teams
          </Link>
          <Link className="links" to="/Players">
            Players
          </Link>
          <Link className="links" to="/LogIn">
            Login
          </Link>
          <Link className="links" to="/SignUp">
            Signup
          </Link>
        </nav>
      
      <Outlet />
      <button
        onClick={(e) => {
          setShowHide(!showHide);
        }}
      >
        Log Out
      </button>
      {showHide && <ShowHideComponent />}
    </div>
  );
}

export default App;
