import React from "react";
import "../../style/demo-section.style.css";
import { FlashMessage } from "../FlashMessage/flash-message.component";

export class DemoSection extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.flashStatus = "success";
    this.flashDisplay = "visible";
    this.flashMessage = "";

    this.state = {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    };
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState(
      {
        ...this.state,
        [event.target.name]: value,
      },
      () => {
        // console.log(this.state);
      }
    );
  }

  handleSubmit(event) {
    // preventDefault prevents the 'normal procedure' from firing

    alert("Form Submitted");

    event.preventDefault();
    // const data = new FormData(event.target);
    // console.log(this.state);
    var data = this.state;

    fetch("http://localhost:7000/request-demo", {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(data),
    })
      .then((response) => console.log(response))
      .then((data) => console.log(data))
      .catch((error) => console.log("ERROR:" + error));
  }

  render() {
    return (
      <section id="request-demo" className="demo-section">
        <h2 className="section-title">Request Demo</h2>
        {/* Add in conditional display thing here through an if/else statement */}
        <FlashMessage
          className="flash-message"
          message=""
          status={this.flashStatus}
          display={this.flashDisplay}
        />
        <form className="demo-form" onSubmit={this.handleSubmit}>
          <div className="row row1">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              onChange={this.handleChange}
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              onChange={this.handleChange}
            />
          </div>
          <div className="row row2">
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="Phone Number"
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="company"
              id="company"
              placeholder="Company"
              onChange={this.handleChange}
            />
          </div>
          <div className="row row3">
            <textarea
              name="message"
              id="message"
              placeholder="Message"
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div className="row row4">
            <input type="submit" value="Submit" className="submit-btn" />
          </div>
        </form>
      </section>
    );
  }
}
