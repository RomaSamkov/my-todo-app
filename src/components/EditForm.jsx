import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

const EditForm = ({ editTodo, setEditTodo, editingTodo, index }) => {
  const editRef = useRef(null);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      editingTodo(index);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (editRef.current && !editRef.current.contains(e.target)) {
        editingTodo(index);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [editingTodo, index]);
  return (
    <div
      className="border rounded-xl p-4 flex justify-center items-center"
      ref={editRef}
    >
      <label htmlFor="todo"></label>
      <input
        type="text"
        id="todo"
        name="todo"
        value={editTodo.text || ""}
        onChange={(e) => setEditTodo({ ...editTodo, text: e.target.value })}
        onKeyDown={handleKeyDown}
        placeholder="Edit your task :"
        className="h-[35px] p-2"
      />
      <button className="cursor-pointer" onClick={() => editingTodo(index)}>
        <div className="flex px-2 gap-2 border rounded-2xl">
          <img
            src="/save_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"
            alt="add"
          />
          <span>Save</span>
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
