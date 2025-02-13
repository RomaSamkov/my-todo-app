import PropTypes from "prop-types";

const EditForm = ({ editTodo, setEditTodo, editingTodo, index }) => {
  return (
    <div className="border rounded-xl p-4 mb-4 flex justify-center items-center">
      <label htmlFor="todo"></label>
      <input
        type="text"
        id="todo"
        name="todo"
        value={editTodo.text || ""}
        onChange={(e) => setEditTodo({ ...editTodo, text: e.target.value })}
        placeholder="Edit your task :"
        className="h-[35px] p-2"
      />
      <button className="cursor-pointer" onClick={() => editingTodo(index)}>
        <div className="border rounded-full">
          <img
            src="/save_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"
            alt="add"
          />
        </div>
      </button>
    </div>
  );
};

EditForm.propTypes = {
  editTodo: PropTypes.shape({
    text: PropTypes.string,
    checked: PropTypes.bool,
  }),
  setEditTodo: PropTypes.func,
  editingTodo: PropTypes.func,
  index: PropTypes.number,
};

export default EditForm;
