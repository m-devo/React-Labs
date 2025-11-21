import { useState } from "react";
import Swal from "sweetalert2";

interface TodoInputProps {
  onAdd: (text: string) => void; 
}
const Todo = ({ onAdd }: TodoInputProps) => {
const [text, setText] = useState("");

  const inputFn = () => {
    const trimmedText = text.trim();
    if (trimmedText === "") {
      Swal.fire({
        title: "Error!",
        text: "Task cannot be embty! Please write a real task.",
        icon: "error",
        confirmButtonText: "OK",
        confirmButtonColor: "green"
      });
      return; 
    }; 
    const numbersRegex = /^\d+$/;

    if (!isNaN(Number(trimmedText)) && numbersRegex.test(trimmedText)) {
      Swal.fire({
        title: "Error!",
        text: "Task cannot be numbers only! Please add a valid task.",
        icon: "error",
        confirmButtonText: "OK",
        confirmButtonColor: "green"
      });
      return; 
    }

    if (trimmedText.length < 10) {
      Swal.fire({
        title: "Too Short!",
        text: "Task must be at least 10 characters long.",
        icon: "info",
        confirmButtonText: "OK",
        confirmButtonColor: "green"
      });
      return;
    }
    onAdd(text); 
    setText(""); 
  };

  return (
    <>
    <div className="bg-blue-500 p-8 rounded-t-lg text-white">
      <h1 className="text-3xl font-bold mb-2">To-Do App!</h1>
      <p className="text-sm mb-4">Add New To-Do</p>

      <div className="space-y-3">
        <input
          type="text"
          placeholder="Enter new task"
          className="w-full p-2 rounded text-gray-800 focus:outline-none"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          onClick={inputFn}
          className="border border-white text-white px-6 py-1 rounded hover:bg-white hover:text-blue-500 transition"
        >
          Add
        </button>
      </div>
    </div>
    </>
  );
};

export default Todo;