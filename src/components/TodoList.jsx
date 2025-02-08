import { useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([
    "Write project",
    "Read book",
    "Watch Movie",
  ]);
  const [newTask, setNewTask] = useState("");
  // const [task, setTask] = useState(["Write project", "Read book", "Watch Movie"]);
  // const addTask = () => {
  //   setTask([...task, newTask]);
  //   console.log

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
    console.log(newTask);
  };

  const addTask = () => {
    setTasks([...tasks, newTask]);
  };
  return (
    <div className="px-8 flex flex-col justify-center items-center">
      <header>
        <h1 className="text-[36px] underline">Hello MY TODO APP</h1>
      </header>
      <main className="flex flex-col justify-center items-center">
        <h2 className="text-[28px] mb-6">Todo list:</h2>
        <div className="border rounded-xl p-4 mb-4">
          <form>
            <label htmlFor="todo"></label>
            <input
              type="text"
              id="todo"
              name="todo"
              value={newTask}
              onChange={handleInputChange}
              placeholder="write your task :"
              className="h-[35px] p-2"
            />
          </form>
        </div>
        <ul className="border rounded-xl p-8 flex flex-col gap-4">
          <li className="border rounded-4xl p-4">
            <p>Write project</p>
          </li>
          <li className="border rounded-4xl p-4">
            <p>Read book</p>
          </li>
          <li className="border rounded-4xl p-4">
            <p>Watch Movie</p>
          </li>
        </ul>
        <h2>List Demo</h2>
        <ol className="list-decimal">
          {tasks.map((task, index) => {
            return <li key={index}>{task}</li>;
          })}
        </ol>
      </main>
      <footer></footer>
    </div>
  );
};

export default TodoList;
