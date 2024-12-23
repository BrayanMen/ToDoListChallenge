import React, { useState, useEffect } from 'react';
import ThemeDarkLight from './components/ThemeDarkLight';
import TodoForm from './components/Form';
import TodoList from './components/ToDoList';
import { typeTodo } from './types/typeTodo';

const App: React.FC = () => {
  const [todos, setTodos] = useState<typeTodo[]>(() => {
    try {
      const savedTodos = localStorage.getItem('todos');
      return savedTodos ? JSON.parse(savedTodos) : [];
    } catch (error) {
      console.error('Error al cargar las tareas desde localStorage:', error);
      return [];
    }
  });

  const [filter, setFilter] = useState<"all" | "completed"| "pending">('all');

  useEffect(() => {
    try {
      localStorage.setItem('todos', JSON.stringify(todos));
    } catch (error) {
      console.error('Error al guardar las tareas en localStorage:', error);
    }
  }, [todos]);

  const addTodo = (text: string) => {
    const newTodo = { id: crypto.randomUUID(), text, completed: false };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const toggleTodo = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id: string, newText: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  const todoFilter = todos.filter((todo) => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'pending') return !todo.completed;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-200 dark:bg-gray-900 p-8">
      <ThemeDarkLight />
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-4 text-center shadow-xl text-gray-800 dark:text-white">
          To-Do List
        </h1>
        <TodoForm onAdd={addTodo} />
        <div className="flex justify-center space-x-2 my-4">
          <button 
            onClick={() => setFilter('all')} 
            className={`px-4 py-2 font-semibold rounded-md ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-300 hover:bg-blue-500 hover:text-white'}`}
          >
            Todas
          </button>
          <button 
            onClick={() => setFilter('pending')} 
            className={`px-4 py-2 font-semibold rounded-md ${filter === 'pending' ? 'bg-yellow-500 text-white' : 'bg-gray-300 hover:bg-yellow-500 hover:text-white'}`}
          >
            Pendientes
          </button>
          <button 
            onClick={() => setFilter('completed')} 
            className={`px-4 py-2 font-semibold rounded-md ${filter === 'completed' ? 'bg-green-500 text-white' : 'bg-gray-300 hover:bg-green-500 hover:text-white'}`}
          >
            Completadas
          </button>
        </div>
        <TodoList
          todos={todoFilter}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          onEdit={editTodo}
        />
      </div>
    </div>
  );
};

export default App;