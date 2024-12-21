import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';

interface TodoFormProps {
  onAdd: (text: string) => void;
}

const Form: React.FC<TodoFormProps> = ({ onAdd }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedText = newTodo.trim();
    if (trimmedText) {
      onAdd(trimmedText);
      setNewTodo('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 flex gap-2">
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Agregar nueva tarea..."
        className="flex-1 p-3 border rounded-lg bg-white focus:bg-gray-200 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
      />
      <button type="submit" className="bg-blue-500 text-white p-3 rounded-lg hover:bg-green-600 hover:border-green-600">
        <PlusCircle />
      </button>
    </form>
  );
};

export default Form;