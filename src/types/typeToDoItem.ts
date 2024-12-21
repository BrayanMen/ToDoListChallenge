import { typeTodo } from "./typeTodo";

export interface typeToDoItem {
    todo: typeTodo;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
    onEdit: (id: string, newText: string) => void;
  }