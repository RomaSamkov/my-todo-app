import PropTypes from "prop-types";

const Button = ({ onClick, src }) => {
  return (
    <button className="cursor-pointer" onClick={onClick}>
      <div className="">
        <img src={src} alt="add" />
      </div>
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  src: PropTypes.string,
};

export default Button;
