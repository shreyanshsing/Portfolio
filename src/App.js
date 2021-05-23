import "./App.css";
import LandingPage from "./component/main/Landingpage";
import React from "react";
import LeftSideBar from "./component/leftSidebar/LeftSidebar";
import {Grid,makeStyles} from "@material-ui/core";
import Intro from "./component/intro/Intro";
import Img from "./component/main/data/Main.png";
import Resume from "./component/resume/Resume";
import Work from "./component/work/Work";
import Services from "./component/services/Service";
import Contact from "./component/contact/Contact";

const style = makeStyles(theme=>({
  leftSide:{
    width:'20%',
    flaot:'left',
    position:'fixed',
    left:'0px',
    top:'0px',
    boxShadow:'2px 2px 4px lightgrey'
  },
  body:{
    width:'80%',
    height:'100vh',
    float:'right',
    backgroundImage: `url(${Img})`,
    position:'relative',
    top:'0px',
    right:'0px',
    overflow:'scroll',
    backgroundPosition:'center',
    backgroundSize:'cover' ,
    backgroundRepeat:'no-repeat'
  }
}))

function App() {
  const classes = style();
  return (
    <div className="App">
      <div className={classes.leftSide}>
        <LeftSideBar/>
      </div>
      <Grid container className={classes.body} spacing={1}>
        <Grid item sm={12}>
          <div id="home">
            <LandingPage/>
          </div>
        </Grid>
        <Grid item sm={12}>
          <div id="about">
            <Intro/>
          </div>
        </Grid>
        <Grid item sm={12}>
          <div id="resume">
            <Resume/>
          </div>
        </Grid>
        <Grid item sm={12}>
          <div id="work">
            <Work/>
          </div>
        </Grid>
        <Grid item sm={12}>
          <div id="services">
            <Services/>
          </div>
        </Grid>
        <Grid item sm={12}>
          <div id="contact">
            <Contact/>
          </div>
        </Grid>
      </Grid>      
    </div>
  );
}

export default App;
