import React from "react";
import "../../style/flash-message.style.css";

export const FlashMessage = (props) => {
  // Return this for an error flash message
  console.log(`Current Display: ${props.display}`);
  console.log(`Current Status: ${props.status}`);
  if (props.display === "visible" && props.status === "error") {
    return (
      <div className="flash flash-error">
        <h3>{props.message}</h3>
      </div>
    );
  }
  // Return this for a success flash message
  else if (props.display === "visible" && props.status == "success") {
    return (
      <div className="flash flash-success">
        <h3>{props.message}</h3>
      </div>
    );
  }
  // Return this for neither
  else {
    return <div className="flash no-flash"></div>;
  }
};
