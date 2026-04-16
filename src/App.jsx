import React from 'react';
import { TodoProvider } from './context/TodoContext';
import TodoForm from './Components/TodoForm';
import FilterBar from './Components/FilterBar';
import TodoList from './Components/TodoList';


function App() {
  return (
    <TodoProvider>
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 py-12 px-4">
        <div className="max-w-lg mx-auto bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-[2rem] shadow-2xl">
          <h1 className="text-3xl font-bold text-white mb-8 text-center tracking-tight">
            Todo <span className="text-blue-400">App</span>
          </h1>
          <TodoForm />
          <FilterBar />
          <TodoList />
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;