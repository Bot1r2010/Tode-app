import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

const TodoItem = ({ todo }) => { 
  const { toggleTodo, deleteTodo } = useContext(TodoContext);

  if (!todo) return null; 

  return (
    <div className="flex items-center justify-between p-4 mb-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 group hover:bg-white/15 transition-all">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          className="w-5 h-5 cursor-pointer accent-blue-500"
        />
        <span className={`text-white transition-all ${todo.completed ? 'line-through opacity-50' : ''}`}>
          {todo.title}
        </span>
      </div>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="text-white/40 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100 text-xs"
      >
        Удалить
      </button>
    </div>
  );
};

export default TodoItem;