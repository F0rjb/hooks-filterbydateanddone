import EditTask from "./EditTask";

const ToDoCard = ({ todo, handleDone, handleEdit }) => {
  return (
    <div>
      <input
        type="checkbox"
        name=""
        id=""
        checked={todo.isDone}
        onChange={() => handleDone(todo.id)}
      />
      <p>{todo.name}</p>
      <p>{todo.date}</p>
      <EditTask todo={todo} handleEdit={handleEdit} />
      <button>X</button>
    </div>
  );
};
export default ToDoCard;
