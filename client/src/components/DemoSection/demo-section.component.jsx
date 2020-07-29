import React from "react";
import "../../style/demo-section.style.css";
import { FlashMessage } from "../FlashMessage/flash-message.component";

export class DemoSection extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.resetResponse = this.resetResponse.bind(this);

    this.flashStatus = "success";
    this.flashDisplay = "visible";
    this.flashMessage = "";

    this.state = {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
      flashStatus: "success",
      flashDisplay: "",
      flashMessage: "",
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

  resetResponse() {
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var phoneInput = document.getElementById("phone");
    var companyInput = document.getElementById("company");
    var messageInput = document.getElementById("message");

    nameInput.value = "";
    emailInput.value = "";
    phoneInput.value = "";
    companyInput.value = "";
    messageInput.value = "";
  }

  handleSubmit(event) {
    // preventDefault prevents the 'normal procedure' from firing
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
      .then((response) => response.json())
      .then((data) => {
        if (data == "INVALID_NAME") {
          this.setState({
            flashStatus: "error",
            flashMessage: "Invalid Name Entered",
            flashDisplay: "visible",
          });
        } else if (data == "INVALID_EMAIL") {
          this.setState({
            flashStatus: "error",
            flashMessage: "Invalid Email Entered.",
            flashDisplay: "visible",
          });
        } else if (data == "INVALID_PHONE") {
          this.setState({
            flashStatus: "error",
            flashMessage: "Invalid Phone Number Entered.",
            flashDisplay: "visible",
          });
        } else if (data == "INVALID_MESSAGE") {
          this.setState({
            flashStatus: "error",
            flashMessage: "Invalid Message Entered.",
            flashDisplay: "visible",
          });
        } else if (data == "INVALID_COMPANY") {
          this.setState({
            flashStatus: "error",
            flashMessage: "Invalid Company Name Entered.",
            flashDisplay: "visible",
          });
        } else {
          this.setState({
            flashStatus: "success",
            flashMessage: "Email Sent Successfully!",
            flashDisplay: "visible",
            name: "",
            email: "",
            phone: "",
            company: "",
            message: "",
          });
          this.resetResponse();
        }

        console.log(data);
      })
      .catch((error) => console.log("ERROR:" + error));
  }

  render() {
    return (
      <section id="request-demo" className="demo-section">
        <h2 className="section-title">Request Demo</h2>
        {/* Add in conditional display thing here through an if/else statement */}
        <FlashMessage
          className="flash-message"
          message={this.state.flashMessage}
          status={this.state.flashStatus}
          display={this.state.flashDisplay}
        />
        <form className="demo-form" onSubmit={this.handleSubmit}>
          <div className="row row1">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
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
