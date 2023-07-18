import React, { useState } from 'react';
import './ToDoForm.css';

const TodoForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() !== '') {
      const newTodo = {
        id: new Date().getTime(),
        title: title.trim()
      };
      onAdd(newTodo);
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        placeholder="Add Todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="todo-input"
      />
      <button type="submit" className="todo-button">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
