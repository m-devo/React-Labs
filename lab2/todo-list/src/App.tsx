import { Fragment } from 'react/jsx-runtime';
import { useState } from 'react';
import Todo from './components/TodoInput/TodoInput';
import TodoList from './components/Todo-List/Todo-List';
import type { ToDoTypes } from './components/Todo-List/ToDoTypes';
import Header from './components/Header/Header';
import './App.css'
const App = () => {
  <Header/>
  const [todos, setTodos] = useState<ToDoTypes[]>([]);

  const addTodo = (text: string) => {
    const newTodo: ToDoTypes = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  };
  return (
       <Fragment>
        <Header/>
    <div className="min-h-screen bg-gray-200 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Todo onAdd={addTodo} />
        <TodoList 
          todos={todos} 
          onDelete={deleteTodo} 
          onToggle={toggleTodo} 
        />
        
      </div>
    </div>
       </Fragment>

  );
}

export default App;



