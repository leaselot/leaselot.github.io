import React, { Component } from "react";
import "./App.css";
import { NavBar } from "./components/NavBar/nav-bar.component";
import { HeroSection } from "./components/HeroSection/hero-section.component";
import { CardContainer } from "./components/CardContainer/card-container.component";
import { InfoSection } from "./components/InfoSection/info-section.component";
import { DemoSection } from "./components/DemoSection/demo-section.component";

class App extends Component {
  constructor(props) {
    super(props);

    this.closeNav = this.closeNav.bind(this);

    this.state = {};

    this.headline = "Enabling your consumers to lease their dream cars.";
    this.subhead = "Let us bring used car leasing to your dealership.";

    this.aboutCards = [
      {
        title: "Provide a Differentiated Offering",
        content:
          "We enable our customers to go-to-market with a new consumer offering that could not be financed in the past. Tapping into this new channel will differentiate dealers from the competition and drive customer acquisition.",
        image: "card-icon.png",
      },
      {
        title: "Grow your Customer Base",
        content:
          'Consumers can afford "more car” when a lease option is available. They haven’t typically seen these offers presented and are likely to consider pursuing a more expensive vehicle.',
        image: "card-icon.png",
      },
      {
        title: "Maintain Margins",
        content:
          "Our partners’ profits are important. We ensure that dealers maintain their profit margins through our fair value assessment. Our platform enables dealers to sell their own aftermarket products, allowing you to keep and grow your standard revenue streams.",
        image: "card-icon.png",
      },
    ];

    this.howItWorks = {
      title: "How it works",
      info: [
        {
          subhead: "Plug and Play Platform",
          content:
            "Our easy to use web application allows your sales associates to login and go through the entire sales process. Leaselot’s end-to-end capability provides fast lease quotes, connects to our affordable lender partners, and generates lease contracts. We know your associates are busy meeting with clients. Our platform is designed to be plugged into any dealer sales process without a steep learning curve.",
        },
        {
          subhead: "White-Glove Service",
          content:
            "Leaselot is with you every step of the way. Our service is designed to guarantee that we will be by your side until your team understands how to effectively boost sales using our platform. We will onboard your sales representatives in an efficient yet thorough way and have dedicated account managers focused on ensuring that you get the most value from Leaselot.",
        },
      ],
      images: ["upward-icon.png", "settings-icon.png"],
    };
  }

  closeNav(event) {
    // get the bars element from the nav
    var navBars = document.querySelector(".bars");
    // check if the bars are open or closed
    console.log("testing..");
    if (navBars.classList.contains("bars-open")) {
      console.log("bars are open..");
      navBars.classList.remove("bars-open");
      navBars.classList.add("bars-closed");
    }
  }

  render() {
    return (
      <div className="App">
        <NavBar logo="../public/Navbar logo.png" />
        <HeroSection
          headline={this.headline}
          subhead={this.subhead}
          onclick={this.closeNav}
        />
        <CardContainer content={this.aboutCards} />
        <InfoSection content={this.howItWorks} />
        <DemoSection />
      </div>
    );
  }
}

export default App;
