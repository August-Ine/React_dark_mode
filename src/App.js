import "./styles.css";
import React, { useState } from "react";
import NavbarComponent from "./components/navbar";
import CardsComponent from "./components/cards";
import FooterComponent from "./components/footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={theme === "light" ? "light-theme" : "dark-theme"}>
      <NavbarComponent theme={theme} toggleTheme={toggleTheme} />
      <div style={{ width: "60%", margin: "auto" }}>
        <CardsComponent theme={theme} />
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
