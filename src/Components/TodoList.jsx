import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'
import TodoItem from './TodoItem';


const TodoList = () => {
    const{todos, filter} = useContext(TodoContext);

    const filteredTodos = todos.filter(t => {
        if (filter === 'active') return !t.completed;
        if (filter === 'completed') return !t.completed; 
        return true;
    });
  return (
    <div className='max-h-[400px] overflow-y-auto pr-2 custom-scrollbar'>
        {filteredTodos.map(todo => (
            <TodoItem key={todo.id} todo={todo} />
        ))}
        {filteredTodos.length == 0 && (
            <p className='text-center text-white/50 py-10'>Задание не найдены...</p>
        )}
    </div>
  )
}

export default TodoList