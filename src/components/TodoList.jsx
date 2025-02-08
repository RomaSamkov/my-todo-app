const TodoList = () => {
  return (
    <div className="px-8 flex flex-col justify-center items-center">
      <header>
        <h1 className="text-[36px] underline">Hello MY TODO APP</h1>
      </header>
      <main className="flex flex-col justify-center items-center">
        <h2 className="text-[28px] mb-6">Todo list:</h2>
        <div className="border rounded-xl p-4 mb-4">
          <label htmlFor="todo"></label>
          <input
            type="text"
            id="todo"
            name="todo"
            placeholder="write your task :"
            className="h-[35px] p-2"
          />
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
      </main>
      <footer></footer>
    </div>
  );
};

export default TodoList;
