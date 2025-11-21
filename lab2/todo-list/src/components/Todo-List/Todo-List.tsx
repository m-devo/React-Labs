import type { ToDoTypes } from "./ToDoTypes";
interface TodoListProps {
  todos: ToDoTypes[];
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

const TodoList = ({ todos, onDelete, onToggle }: TodoListProps) => {
  return (
    <div className="bg-white p-8 rounded-b-lg shadow-md">
      <h2 className="text-center text-gray-500 mb-6 text-lg">
        Let's get some work done!
      </h2>

      <div className="space-y-3">
        {todos.length === 0 ? (
          <p className="text-center text-gray-300">No tasks yet!</p>
        ) : (
          todos.map((todo) => (
            <div
              key={todo.id}
              className="flex justify-between items-center border-b pb-2">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => onToggle(todo.id)}
                  className="cursor-pointer w-5 h-5" />
                <span
                  className={`text-lg ${
                    todo.completed ? "line-through text-gray-400" : "text-gray-700"
                  }`}
                >
                  {todo.text}
                </span>
              </div>

              <button
                onClick={() => onDelete(todo.id)}
                className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
      
      <div className="mt-8 text-center text-xs text-gray-400">
        Proudly powered by Cosmic JS (Clone)
      </div>
    </div>
  )
}

export default TodoList;