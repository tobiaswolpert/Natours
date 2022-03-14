import React from "react";
import Header from "./components/header/header.component";
import Section from "./components/section/about-section.component";
import Features from "./components/features/features.component";
import Tours from "./components/tours/tours.component";
import Stories from "./components/stories/stories.component";
import Booking from "./components/features/booking/booking.component";
import "./sass/main.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Section />
      <Features />
      <Tours />
      <Stories />
      <Booking />
    </div>
  );
}

export default App;
