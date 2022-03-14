import React from "react";
import Header from "./components/header/header.component";
import Section from "./components/section/about-section.component";
import Features from "./components/features/features.component";
import Tours from "./components/tours/tours.component";
import Stories from "./components/stories/stories.component";
import Booking from "./components/features/booking/booking.component";
import Footer from "./components/footer/footer.component";
import Navigation from "./components/navigation/navigation.component";
import "./sass/main.scss";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Section />
      <Features />
      <Tours />
      <Stories />
      <Booking />
      <Footer />
    </div>
  );
}

export default App;
