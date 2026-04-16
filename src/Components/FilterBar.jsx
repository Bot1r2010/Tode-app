import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

const FilterBar = () => {
  const { filter, setFilter } = useContext(TodoContext);
  const filters = ['all', 'active', 'completed'];

  return (
    <div className="flex justify-center gap-2 mb-6">
      {filters.map(f => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className={`px-4 py-1.5 rounded-full text-sm font-medium capitalize transition-all ${
            filter === f ? 'bg-blue-500 text-white shadow-md' : 'bg-white/10 text-white hover:bg-white/20'
          }`}
        >
          {f === 'all' ? 'Все' : f === 'active' ? 'Активные' : 'Выполненные'}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;