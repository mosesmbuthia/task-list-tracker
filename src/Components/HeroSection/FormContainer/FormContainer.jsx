import { useState } from "react";
import useTodosStore from "../../../Store/Store";
import "./FormContainer.css";
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

function FormContainer() {
  const [todo, setTodo] = useState("");
  const [description, setDescription] = useState("");

  const addTodo = useTodosStore((state) => state.addTodo);

  function handleAddTodo(e) {
    e.preventDefault();

    if (!todo) {
        toast.error('enter todo title!', {
            position: "top-left",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            // transition: Flip,
            });
      return;
    }

    if (!description) {
        toast.error('enter todo description!', {
            position: "top-left",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            // transition: Flip,
            });
      return;
    }

    const newTodo = {
      id: Math.random() * 1000000000,
      title: todo,
      description: description,
      complete: false,
    };

    addTodo(newTodo);

    setTodo("");
    setDescription("");
  }

  return (
    <form className="form-container" action="">
      <input
        type="text"
        placeholder="enter todo title"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />

      <textarea
        value={description}
        placeholder="enter todo description"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      ></textarea>

      <button className="add-todo-button" onClick={handleAddTodo}>
        add todo
      </button>

      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        // transition={Flip}
      />
    </form>
  );
}

export default FormContainer;