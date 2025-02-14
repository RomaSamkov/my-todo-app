import PropTypes from "prop-types";

const Checkbox = ({ checked, onChange }) => {
  return (
    <div className="relative">
      <label htmlFor="checkbox"></label>
      <input
        type="checkbox"
        name=""
        id="checkbox"
        checked={checked}
        onChange={onChange}
        className="relative peer shrink-0
                      appearance-none w-4 h-4 border-2 border-blue-500 rounded-sm bg-white
                      mt-1
                      checked:bg-blue-800 checked:border-0
                      focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-blue-100
                      disabled:border-steel-400 disabled:bg-steel-400 cursor-pointer"
      />
      <svg
        className="
                      absolute
                      w-4 h-4 bottom-1
                      hidden peer-checked:block
                      pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    </div>
  );
};

Checkbox.propTypes = {
  onChange: PropTypes.func,
  checked: PropTypes.bool,
};

export default Checkbox;
