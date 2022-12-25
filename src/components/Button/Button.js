import React from "react";
import "./Button.css";

const Button = ({ name, handleClick }) => {
  /**
   * PROPS:
   * @param {string} name text for the button
   * @param {() => void} handleClick function that handles the button click event
   */

  return <button onClick={() => handleClick()}>{name}</button>;
};

export default Button;
