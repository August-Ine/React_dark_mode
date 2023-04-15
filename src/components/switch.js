import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

function Switch(props) {
  const buttonTheme =
    props.theme === "light"
      ? "btn btn-outline-primary me-2"
      : "btn btn-outline-dark active me-2";
  return (
    <div>
      <a
        id="switch"
        href="#"
        className={buttonTheme}
        role="button"
        data-bs-toggle="button"
        onClick={props.toggleTheme}
      >
        <FontAwesomeIcon
          icon={props.theme === "light" ? faSun : faMoon}
          className="me-2"
        />
        {props.theme.charAt(0).toUpperCase() + props.theme.slice(1)} theme
      </a>
    </div>
  );
}

export default Switch;
