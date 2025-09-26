function TasksDone(props) {
  return (
    <section>
      <div className="header">
        <div className="text-box">
          <p id="tasksdone">Tasks Done</p>
          <p id="keepitup">Keep it up</p>
        </div>
        <div className="total">
          <p className="fraction">{props.todos_completed}/{props.total_todos}</p>
        </div>
      </div>
    </section>
  );
}
export default TasksDone;