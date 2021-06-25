import "./App.css";
import LandingPage from "./component/main/Landingpage";
import React from "react";
import Intro from "./component/intro/Intro";
import Resume from "./component/resume/Resume";
import Work from "./component/work/Work";
import Services from "./component/services/Service";
import Contact from "./component/contact/Contact";

function App() {

  return (
    <div className="App">
      <LandingPage/>
      <Intro/>
      <Resume/>
      <Work/>
      <Services/>
      <Contact/>
    </div>
  );
}

export default App;
