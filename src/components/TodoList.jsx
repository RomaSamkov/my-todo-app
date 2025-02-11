import { useEffect, useState } from "react";

const TodoList = () => {
  const todo = JSON.parse(localStorage.getItem("todo"));

  const [tasks, setTasks] = useState(todo || []);
  const [newTask, setNewTask] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editTask, setEditTask] = useState("");

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const editTodo = (index) => {
    const updateTodo = tasks.map((t, i) => (i === index ? editTask : t));
    setTasks(updateTodo);
    setEditingIndex(null);
    setEditTask("");
  };

  const removeTask = (index) => {
    const filteredTasks = tasks.filter((t, i) => i !== index);
    setTasks(filteredTasks);
  };

  return (
    <div className="px-8 flex flex-col justify-center items-center">
      <header>
        <h1 className="text-[36px] underline">Hello MY TODO APP</h1>
      </header>
      <main className="flex flex-col justify-center items-center">
        <h2 className="text-[28px] mb-6">Todo list:</h2>
        <div className="border rounded-xl p-4 mb-4 flex justify-center items-center">
          <label htmlFor="todo"></label>
          <input
            type="text"
            id="todo"
            name="todo"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="write your task :"
            className="h-[35px] p-2"
          />
          <button className="cursor-pointer" onClick={addTask}>
            <div className="border rounded-full">
              <img
                src="/add_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"
                alt="add"
              />
            </div>
          </button>
        </div>
        <ol className="list-decimal flex flex-col gap-4">
          {tasks.map((task, index) => {
            return (
              <li key={index} className="border rounded-4xl p-4 flex gap-6">
                {editingIndex === index ? (
                  <div className="border rounded-xl p-4 mb-4 flex justify-center items-center">
                    <label htmlFor="todo"></label>
                    <input
                      type="text"
                      id="todo"
                      name="todo"
                      value={editTask}
                      onChange={(e) => setEditTask(e.target.value)}
                      placeholder="Edit your task :"
                      className="h-[35px] p-2"
                    />
                    <button
                      className="cursor-pointer"
                      onClick={() => editTodo(index)}
                    >
                      <div className="border rounded-full">
                        <img
                          src="/save_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"
                          alt="add"
                        />
                      </div>
                    </button>
                  </div>
                ) : (
                  <span>{task}</span>
                )}
                <button
                  className="cursor-pointer"
                  onClick={() => removeTask(index)}
                >
                  <div className="">
                    <img
                      src="/delete_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"
                      alt="add"
                    />
                  </div>
                </button>
                <button
                  className="cursor-pointer"
                  onClick={() => {
                    setEditingIndex(index);
                    setEditTask(task);
                  }}
                >
                  <div className="">
                    <img
                      src="/edit_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"
                      alt="add"
                    />
                  </div>
                </button>
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
