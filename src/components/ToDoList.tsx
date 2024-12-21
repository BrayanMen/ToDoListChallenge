import React from 'react';
import Items from './Items';
import { typeTodo } from '../types/typeTodo';

interface TodoListProps {
  todos: typeTodo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newText: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onDelete, onEdit }) => (
  <div className="space-y-2">
    {todos.map((todo) => (
      <div
      key={todo.id}
      className="transition-all duration-300 transform ease-out opacity-0"
      style={{ opacity: 1, transform: 'translateX(0)' }}>
      <Items 
      key={todo.id} 
      todo={todo} 
      onToggle={onToggle} 
      onDelete={onDelete} 
      onEdit={onEdit} />
      </div>
    ))}
  </div>
);

export default TodoList;