import { useEffect, useState } from "react";
import EditForm from "./EditForm";
import InputForm from "./InputForm";

const TodoList = () => {
  const todo = JSON.parse(localStorage.getItem("todo"));

  const [allTodos, setAllTodos] = useState(todo || []);
  const [newTodo, setNewTodo] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editTodo, setEditTodo] = useState({ text: "", checked: false });

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(allTodos));
  }, [allTodos]);

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setAllTodos([...allTodos, { text: newTodo, checked: false }]);
      setNewTodo("");
    }
  };

  const editingTodo = (index) => {
    const updateTodo = allTodos.map((t, i) => (i === index ? editTodo : t));
    setAllTodos(updateTodo);
    setEditingIndex(null);
    setEditTodo({ text: "", checked: false });
  };

  const removeTodo = (index) => {
    const filteredTasks = allTodos.filter((t, i) => i !== index);
    setAllTodos(filteredTasks);
  };

  const handleCheckbox = (index) => {
    setAllTodos((prevTodos) =>
      prevTodos.map((t, i) => (i === index ? { ...t, checked: !t.checked } : t))
    );
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
                  <div className="flex items-center">
                    <label htmlFor="checkbox"></label>
                    <input
                      type="checkbox"
                      name=""
                      id="checkbox"
                      checked={task.checked}
                      onChange={() => handleCheckbox(index)}
                      className="relative peer shrink-0
                      appearance-none w-4 h-4 border-2 border-blue-500 rounded-sm bg-white
                      mt-1
                      checked:bg-blue-800 checked:border-0
                      focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-blue-100
                      disabled:border-steel-400 disabled:bg-steel-400"
                    />
                    <svg
                      className="
                      absolute
                      w-4 h-4 mt-1
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
                    <div
                      className={`flex gap-6 ml-2 ${
                        task.checked
                          ? "line-through bg-green-600 rounded-2xl"
                          : ""
                      }`}
                    >
                      <p
                        className={`break-all rounded-2xl px-4 ${
                          task.checked ? "line-throug" : ""
                        }`}
                      >
                        {task.text}
                      </p>
                    </div>
                  </div>
                )}
                <div className="flex justify-end gap-2">
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
