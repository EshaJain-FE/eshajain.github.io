import React from "react";
import PropTypes from "prop-types";
const ProgressBar = ({ label, text, type, id, value, width,handleChange,className }) => (
<div>
<h6>{id}</h6>
<div className="progress_bar_outer">
    <span>{width+'%'}</span>
    <div 
    id={id} 
    className = {className+ ' , filler' } 
    style={{width:width+'%'}}
    onChange={handleChange}
    >
     </div>
 </div>
 </div>
);
ProgressBar.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
   className: PropTypes.string
};
export default ProgressBar;