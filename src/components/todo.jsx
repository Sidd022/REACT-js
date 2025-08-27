import { useState } from "react";
function Todo({ onNewitem }) {
  const [todoname, settodoname] = useState("");
  const [duedate, setduedate] = useState("");

  const handleNameChange = (event) => {
    settodoname(event.target.value);
  };
  const handleDateChange = (event) => {
    setduedate(event.target.value);
  };

  const handleaddbuttonclick = () => {
    onNewitem(todoname, duedate);
    settodoname("");
    setduedate("");
  };
  return (
    <div className="row kg-row">
      <div className="col-6">
        <input
          type="text"
          value={todoname}
          placeholder="enter to-do here"
          onChange={handleNameChange}
        />
      </div>
      <div className="col-4">
        <input type="date" value={duedate} onChange={handleDateChange} />
      </div>
      <div className="col-2">
        <button
          type="button"
          className="btn btn-success kg-button"
          onClick={handleaddbuttonclick}
        >
          Add
        </button>
      </div>
    </div>
  );
}
export default Todo;
