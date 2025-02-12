import PropTypes from "prop-types";

const InputForm = ({ newTodo, setNewTodo, addTodo }) => {
  return (
    <div className="border rounded-xl p-4 mb-4 flex justify-center items-center">
      <label htmlFor="todo"></label>
      <input
        type="text"
        id="todo"
        name="todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
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
