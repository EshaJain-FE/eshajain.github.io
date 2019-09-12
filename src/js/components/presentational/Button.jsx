import React from "react";
import PropTypes from "prop-types";
const Button = ({ label, text, type, id, value, handleButtonChange }) => (

<input 
type="button" 
className="buttonProgressMarker"
    id={id} 
    className="buttonProgressMarker" 
    value={value}
    onClick={handleButtonChange}></input>
);
Button.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  handleButtonChange: PropTypes.func.isRequired
};
export default Button;