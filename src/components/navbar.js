import React from "react";
import Switch from "./switch";

function navbarComponent(props) {
  const navTheme =
    props.theme === "light"
      ? "navbar navbar-expand navbar-light bg-light"
      : "navbar navbar-expand navbar-dark bg-dark";
  return (
    <nav className={navTheme} aria-label="Second navbar example">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Always expand
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample02"
          aria-controls="navbarsExample02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div></div>

        <div className="collapse navbar-collapse" id="navbarsExample02">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
          </ul>
          <Switch
            theme={props.theme}
            toggleTheme={props.toggleTheme}
            onLabel="Option 1"
            offLabel="Option 2"
          />
          <form>
            <input
              className="form-control"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
      </div>
    </nav>
  );
}

export default navbarComponent;
