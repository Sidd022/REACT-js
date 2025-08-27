import Appname from "./components/appname.jsx";
import Todo from "./components/todo.jsx";
import Todolist from "./components/todolist.jsx";
import Welcomemsg from "./components/welcome.jsx";
import style from "./components/appstyle.module.css";
import "./App.css";
import { useState } from "react";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const onNewitem = (itemName, dueDate) => {
    console.log("New Item: ", itemName, dueDate);
    const newItem = [...todoItems, { todoname: itemName, duedate: dueDate }];
    setTodoItems(newItem);
  };
  const handleDelete = (todoItem) => {
    const newItem = todoItems.filter((item) => item.todoname !== todoItem);
    setTodoItems(newItem);
  };

  return (
    <center className={style.todocontainer}>
      <Appname />
      <Todo onNewitem={onNewitem} />
      {todoItems.length === 0 && <Welcomemsg />}
      <Todolist todoItems={todoItems} onDeleteclick={handleDelete} />
    </center>
  );
}

export default App;

// const newItem=[...todoItems];
//     newItem.splice(index,1);
//     setTodoItems(newItem);
