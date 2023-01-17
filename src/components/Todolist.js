import ToDoCard from "./Todocard";

const TodoList = ({ list, handleDone, handleEdit }) => {
  return (
    <div>
      {list.map((el) => (
        <ToDoCard
          todo={el}
          key={el.id}
          handleDone={handleDone}
          handleEdit={handleEdit}
        />
      ))}
    </div>
  );
};
export default TodoList;
