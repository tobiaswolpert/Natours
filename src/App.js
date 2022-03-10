import React from "react";
import Header from "./components/header/header.component";
import Section from "./components/section/about-section.component";
import Features from "./components/features/features.component";
import "./sass/main.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Section />
      <Features />
    </div>
  );
}

export default App;
