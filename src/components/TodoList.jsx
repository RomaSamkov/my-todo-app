import { useEffect, useState } from "react";
import EditForm from "./EditForm";
import InputForm from "./InputForm";

const TodoList = () => {
  const todo = JSON.parse(localStorage.getItem("todo"));

  const [allTodos, setAllTodos] = useState(todo || []);
  const [newTodo, setNewTodo] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editTodo, setEditTodo] = useState("");

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(allTodos));
  }, [allTodos]);

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setAllTodos([...allTodos, newTodo]);
      setNewTodo("");
    }
  };

  const editingTodo = (index) => {
    const updateTodo = allTodos.map((t, i) => (i === index ? editTodo : t));
    setAllTodos(updateTodo);
    setEditingIndex(null);
    setEditTodo("");
  };

  const removeTodo = (index) => {
    const filteredTasks = allTodos.filter((t, i) => i !== index);
    setAllTodos(filteredTasks);
  };

  return (
    <div className="px-8 flex flex-col justify-center items-center">
      <header>
        <h1 className="text-[36px] underline">Hello MY TODO APP</h1>
      </header>
      <main className="flex flex-col justify-center items-center">
        <h2 className="text-[28px] mb-6">Todo list:</h2>
        <InputForm
          newTodo={newTodo}
          setNewTodo={setNewTodo}
          addTodo={addTodo}
        />
        <ol className="list-decimal flex flex-col gap-6">
          {allTodos.map((task, index) => {
            return (
              <li
                key={index}
                className="border rounded-4xl px-6 py-4 grid grid-cols-[2fr_1fr] justify-between gap-6"
              >
                {editingIndex === index ? (
                  <EditForm
                    editTodo={editTodo}
                    setEditTodo={setEditTodo}
                    editingTodo={editingTodo}
                    index={index}
                  />
                ) : (
                  <div className="flex gap-6">
                    <input type="checkbox" name="" id="" />
                    <p className="break-all">{task}</p>
                  </div>
                )}
                <div className="flex justify-end gap-6">
                  {editingIndex !== index && (
                    <button
                      className="cursor-pointer"
                      onClick={() => {
                        setEditingIndex(index);
                        setEditTodo(task);
                      }}
                    >
                      <div className="">
                        <img
                          src="/edit_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"
                          alt="add"
                        />
                      </div>
                    </button>
                  )}
                  <button
                    className="cursor-pointer"
                    onClick={() => removeTodo(index)}
                  >
                    <div className="">
                      <img
                        src="/delete_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"
                        alt="add"
                      />
                    </div>
                  </button>
                </div>
              </li>
            );
          })}
        </ol>
      </main>
      <footer></footer>
    </div>
  );
};

export default TodoList;
