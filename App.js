import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";

import "./App.css";

import Portfolio from "./components/Portfolio/Portfolio";

import Footer from "./components/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "./Context";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
      <Portfolio />

      <Footer />
    </div>
  );
}

export default App;
