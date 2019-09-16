import React from "react";
import PropTypes from "prop-types";
const SelectMenuOptions = ({name,value}) => (
  <option value={value}>{name}</option>
);
SelectMenuOptions.propTypes = {
  value: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
};
export default SelectMenuOptions;