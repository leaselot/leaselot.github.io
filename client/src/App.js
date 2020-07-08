import React, { Component } from 'react';
import './App.css';
import {NavBar} from "./components/NavBar/nav-bar.component";
import {HeroSection} from "./components/HeroSection/hero-section.component";
import {CardContainer} from "./components/CardContainer/card-container.component";
import {InfoSection} from "./components/InfoSection/info-section.component";
import {DemoSection} from "./components/DemoSection/demo-section.component";

class App extends Component {
  constructor(props){
    super(props);

    this.state = {};

  this.headline = "Enabling your customers to lease their dream cars"; 
  this.subhead = "Let us bring a new sales channel to your dealership";

  this.aboutCards = [
    {
      'title': 'Title',
      'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore',
      'image': 'card-icon.png'
    },
    {
      'title': 'Title',
      'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore',
      'image': 'card-icon.png'
    },
    {
      'title': 'Title',
      'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore',
      'image': 'card-icon.png'
    }
  ];

  this.howItWorks = {
    'title': 'How it works',
    'info': [{
        'subhead': 'More Volume',
        'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'
      },
      {
        'subhead': 'Fast Leases',
        'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'
      }
    ],
    'images': ['upward-icon.png', 'settings-icon.png']
  }

  }

  render() {
    return (
      <div className="App">
          <NavBar logo="../public/Navbar logo.png"/>
          <HeroSection headline={this.headline} subhead={this.subhead}/>
          <CardContainer content={this.aboutCards}/>
          <InfoSection content={this.howItWorks}/>
          <DemoSection/>
      </div>
    );
  }
}

export default App;
