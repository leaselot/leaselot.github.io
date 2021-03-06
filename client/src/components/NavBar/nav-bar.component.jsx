import React, { Component } from "react";
import Logo from "../../Navbar logo.png";
import "../../style/nav-bar.style.css";

// export const NavBar = (props) => {
//     return (
//         <section className="nav">
//             <img class="nav-logo" src={Logo} alt="Leaselot Logo"/>
//             <ul class="nav-options">
//                 <li class="nav-item"><a>Home</a></li>
//                 <li class="nav-item"><a>About</a></li>
//                 <li class="nav-item"><a>How it works</a></li>
//                 <li class="nav-item"><a>Contact us</a></li>
//                 <li class="bars nav-closed ">
//                     <div class="x-container">
//                         <span class="bar-1"></span>
//                         <span class="bar-2"></span>
//                         <span class="bar-3"></span>
//                     </div>
//                 </li>
//             </ul>
//         </section>
//     );
// };

export class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navState: "bars-closed",
    };

    this.toggleNav = this.toggleNav.bind(this);
  }

  componentDidMount() {}

  toggleNav() {
    // toggle bars-closed and bars-open class when the nav hamburger is clicke
    if (this.state.navState === "bars-closed") {
      this.setState({ navState: "bars-open" });
    } else {
      this.setState({ navState: "bars-closed" });
    }
  }

  render() {
    return (
      <div className="block-container" id="home">
        <section className="nav">
          <img className="nav-logo" src={Logo} alt="Leaselot Logo" />
          <ul className="nav-options">
            <li className="nav-item">
              <a href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a href="#about">About</a>
            </li>
            <li className="nav-item">
              <a href="#how-it-works">How it works</a>
            </li>
            <li className="nav-item">
              <a href="#contact-us">Contact us</a>
            </li>
            <li
              className={"bars nav-closed " + this.state.navState}
              onClick={this.toggleNav}
            >
              <span className="bar-1"></span>
              <span className="bar-2"></span>
              <span className="bar-3"></span>
            </li>
          </ul>
          <ul className={"nav-options " + this.state.navState}>
            <li className="nav-item">
              <a href="#home" onClick={this.toggleNav}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" onClick={this.toggleNav}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#how-it-works" onClick={this.toggleNav}>
                How it works
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact-us" onClick={this.toggleNav}>
                Contact us
              </a>
            </li>
          </ul>
        </section>
      </div>
    );
  }
}
