import React from "react";
import Button from "./Button";
import PropTypes from "prop-types";
import "../index.css";
const Header = ({ title, onShow, showAdd }) => {
  return (
    <header className="header">
      <h1>{title} </h1>
      <Button
        text={showAdd ? "Add" : "Close"}
        color={showAdd ? "green" : "blue"}
        onShow={onShow}
      />
    </header>
  );
};
Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
