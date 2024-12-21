import React, { useState , useEffect} from 'react';
import { CheckCircle, Circle, Edit2, Trash2, Check, X } from 'lucide-react';
import{typeToDoItem} from '../types/typeToDoItem';

const Items: React.FC<typeToDoItem> = ({ todo, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  const handleDelete = () => {
    setShow(false);
    setTimeout(() => onDelete(todo.id), 300);
  };

  return (
    <div
    className={`flex items-center p-4 bg-white dark:bg-gray-800 dark:text-white rounded-lg shadow-sm mb-2 transition-all 
      ${show ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-10'}
    `}
  >
      {isEditing ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="flex-1 p-2 border rounded-md focus:bg-gray-200 focus:ring-2 dark:bg-gray-700 focus:outline-none focus:ring-yellow-500"
          />
          <button onClick={() => { onEdit(todo.id, editText); setIsEditing(false); }}  className="px-2 hover:text-green-600 transition-all transform duration-700"    
          style={{ opacity: 1, transform: 'translateX(0)'}}>
            <Check />
          </button>
          <button onClick={() => setIsEditing(false)} className="px-2 hover:text-red-600 transition-all transform duration-700"    
          style={{ opacity: 1, transform: 'translateX(0)'}}>
            <X />
          </button>
        </>
      ) : (
        <>
          <button onClick={() => onToggle(todo.id)} className='hover:text-yellow-500'>
            {todo.completed ? <CheckCircle className="text-green-500" /> : <Circle />}
          </button>
          <span className={`flex-1 px-4 ${todo.completed ? 'line-through' : ''}`}>{todo.text}</span>
          <button onClick={() => setIsEditing(true)} className="px-2 hover:text-green-600 transition-all transform duration-700"    
          style={{ opacity: 1, transform: 'translateX(0)'}}><Edit2 /></button>
          <button  onClick={handleDelete}  className="px-2 hover:text-red-600 transition-all transform duration-700"    
          style={{ opacity: 1, transform: 'translateX(100)'}}><Trash2 /></button>
        </>
      )}
    </div>
  );
};

export default Items;