import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

const InputForm = ({ newTodo, setNewTodo, addTodo }) => {
  const inputRef = useRef(null);
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        setNewTodo("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setNewTodo]);
  return (
    <div
      className="border rounded-xl p-4 mb-4 flex justify-center items-center"
      ref={inputRef}
    >
      <label htmlFor="todo"></label>
      <input
        type="text"
        id="todo"
        name="todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="write your task :"
        className="h-[35px] p-2"
      />
      <button className="cursor-pointer" onClick={addTodo}>
        <div className="border rounded-full">
          <img
            src="/add_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"
            alt="add"
          />
        </div>
      </button>
    </div>
  );
};

InputForm.propTypes = {
  newTodo: PropTypes.string,
  setNewTodo: PropTypes.func,
  addTodo: PropTypes.func,
};

export default InputForm;
