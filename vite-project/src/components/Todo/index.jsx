import TodoList from "./TodoList";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import TodoForm from "./TodoForm";

function TodoFeature() {
  const initTodoList = [
    {
      id: 1,
      title: "Eat",
      status: "new",
    },
    {
      id: 2,
      title: "Sleep",
      status: "completed",
    },
    {
      id: 3,
      title: "Code",
      status: "new",
    },
    {
      id: 4,
      title: "Playing",
      status: "new",
    },
  ];

  const [todoList, setTodoList] = useState(initTodoList);

  const location = useLocation();

  const [filterStatus, setFilterStatus] = useState(() => {
    const params = queryString.parse(location.search);
    return params.status || "all";
  });

  const handleTodoClick = (todo, index) => {
    // clone current array to the new one
    const newTodoList = [...todoList];
    // toggle state
    newTodoList[index] = {
      ...newTodoList[index],
      status: newTodoList[index].status === "new" ? "completed" : "new",
    };
    // update todo list
    setTodoList(newTodoList);
  };

  const handleShowAll = () => {
    setFilterStatus("all");
  };

  const handleShowCompleted = () => {
    setFilterStatus("completed");
  };

  const handleShowNew = () => {
    setFilterStatus("new");
  };
  const renderedTodoList = todoList.filter(
    (todo) => filterStatus === "all" || filterStatus === todo.status
  );

  const handleTodoFormSubmit = (values) => {
    console.log("Form submit: ", values);
    setTodoList([
      ...todoList,
      {
        id: Date.now().toString(),
        title: values.title,
        status: "new",
      },
    ]);
  };
  return (
    <div>
      <h2>What to do</h2>
      <TodoForm onSubmit={handleTodoFormSubmit} />
      <h2>Todo List</h2>
      <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick} />
      <div>
        <button onClick={handleShowAll}>ALL</button>
        <button onClick={handleShowCompleted}>COMPLETED</button>
        <button onClick={handleShowNew}>NEW</button>
      </div>
    </div>
  );
}

export default TodoFeature;
