function Todoitem({ todoname, duedate, onDeleteclick }) {
  return (
    <div className="row kg-row">
      <div className="col-6">{todoname}</div>
      <div className="col-4">{duedate}</div>
      <div className="col-2">
        <button
          type="button"
          className="btn btn-danger kg-button"
          onClick={() => onDeleteclick(todoname)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Todoitem;
