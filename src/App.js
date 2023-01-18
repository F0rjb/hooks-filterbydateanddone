import { data } from "./components/data";
import "./App.css";
import NavBar from "./components/Navbar";
import AddTodo from "./components/Add";
import TodoList from "./components/Todolist";
import { useState } from "react";

function App() {
  const [list, setList] = useState(data);
  const handleAdd = (newTask) => {
    console.log(newTask);
    setList([...list, newTask]);
  };
  const handleDone = (id) => {
    console.log(id);
    setList(
      list.map((el) => (el.id === id ? { ...el, isDone: !el.isDone } : el))
    );
  };
  const handleEdit = (id, editedTask) => {
    console.log(id, editedTask);
    setList(
      list.map((el) =>
        el.id === id
          ? { ...el, name: editedTask.nameTodo, date: editedTask.dateTodo }
          : el
      )
    );
  };
  const [filterdone, setfilterdone] = useState("all");
  const filterDone = (isDone) => {
    setfilterdone(isDone);
  };
  const [filterDate, setfilterDate] = useState("");
  const getfilterDate = (Date) => {
    setfilterDate(Date);
  };

  const filteredData = list.filter((item) => {
    if (filterDate !== "" && filterdone !== "all") {
      if (filterdone === "done") {
        return item.date > filterDate && item.isDone === true;
      }
      if (filterdone === "notdone") {
        return item.date > filterDate && item.isDone === false;
      }
    } else if (filterDate !== "") {
      return item.date > filterDate;
    } else if (filterdone !== "all") {
      if (filterdone === "done") {
        return item.isDone === true;
      }
      if (filterdone === "notdone") {
        return item.isDone === false;
      }
    } else {
      return data;
    }
  });

  return (
    <div className="App">
      <NavBar filterDone={filterDone} getfilterDate={getfilterDate} />
      <AddTodo handleAdd={handleAdd} />
      <TodoList
        // list={if (filterdone=="All" && filterdate)
        list={filteredData}
        handleDone={handleDone}
        handleEdit={handleEdit}
      />
    </div>
  );
}

export default App;
