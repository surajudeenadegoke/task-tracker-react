import "../index.css";
import PropTypes from "prop-types";
const Button = ({ text, color, onShow }) => {
  return (
    <button className="btn" onClick={onShow} style={{ background: color }}>
      {text}
    </button>
  );
};

Button.protoTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onclick: PropTypes.func.isRequired,
};

export default Button;
