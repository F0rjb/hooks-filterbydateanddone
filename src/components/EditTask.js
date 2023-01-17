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

const EditTask = ({ todo, handleEdit }) => {
  const [nameTodo, setTodoName] = useState(todo.name);
  const [dateTodo, setDatetodo] = useState(todo.date);
  const [modalIsOpen, setIsOpen] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const editedtask = { nameTodo, dateTodo };
    if (!nameTodo || !dateTodo) {
      return alert("Fill the form please");
    }
    handleEdit(todo.id, editedtask);
    closeModal();
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Edit ToDo</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form onSubmit={handleSubmit}>
          <h1>Edit ToDo</h1>
          <input
            type="text"
            placeholder=" "
            value={nameTodo}
            onChange={(e) => setTodoName(e.target.value)}
          />
          <br />
          <input
            type="date"
            value={dateTodo}
            onChange={(e) => setDatetodo(e.target.value)}
          />
          <br />
          <button>Save</button>
          <button onClick={closeModal}>close</button>
        </form>
      </Modal>
    </div>
  );
};
export default EditTask;
