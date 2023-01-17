import { useState } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

const AddTodo = ({ handleAdd }) => {
  const [nameTodo, setNameTodo] = useState("");
  const [dateTodo, setdateTodo] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Math.random(),
      name: nameTodo,
      date: dateTodo,
      isDone: false,
    };
    if (!nameTodo || !dateTodo) {
      return alert("Fill the form please");
    }
    handleAdd(newTask);

    setNameTodo("");
    setdateTodo("");
    closeModal();
  };

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Add ToDo</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form onSubmit={handleSubmit}>
          <h1>Add ToDo</h1>
          <input
            type="text"
            placeholder="Name"
            value={nameTodo}
            onChange={(e) => setNameTodo(e.target.value)}
          />
          <br />
          <input
            type="date"
            value={dateTodo}
            onChange={(e) => setdateTodo(e.target.value)}
          />
          <br />
          <button>Save</button>
          <button onClick={closeModal}>close</button>
        </form>
      </Modal>
    </div>
  );
};
export default AddTodo;
