import Todoitem from "./todoitem.jsx";
import StyleSheet from "./todolist.module.css";
const Todolist = ({ todoItems, onDeleteclick }) => {
  return (
    <div className={StyleSheet.itemscontainer}>
      {todoItems.map((item, index) => (
        <Todoitem
          key={index}
          todoname={item.todoname}
          duedate={item.duedate}
          onDeleteclick={onDeleteclick}
        />
      ))}
    </div>
  );
};

export default Todolist;
