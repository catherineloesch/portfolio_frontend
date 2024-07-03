import React, { useRef } from "react";
import { Header, Skills, Work, Experience, About, Footer } from "./components";
import { NavBar, NavDots, NavMobile } from "./components/Nav";
import { CurrentContext } from "./contexts/CurrentContext";

import "./App.scss";

const App = () => {
  const active = useRef("home");

  return (
    <div className="app">
      <CurrentContext.Provider value={{ active }}>
        <NavBar />
        <NavMobile />

        <Header />
        <Skills />
        <Work />

        <Experience />
        <About />

        <Footer />

        <NavDots />
      </CurrentContext.Provider>
    </div>
  );
};

export default App;
