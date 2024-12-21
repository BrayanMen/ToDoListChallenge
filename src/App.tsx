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

  return (
    <div className="min-h-screen bg-gray-200 dark:bg-gray-900 p-8">
      <ThemeDarkLight />
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-white">
          To-Do List
        </h1>
        <TodoForm onAdd={addTodo} />
        <TodoList
          todos={todos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          onEdit={editTodo}
        />
      </div>
    </div>
  );
};

export default App;