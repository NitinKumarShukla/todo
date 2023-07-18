import React from 'react';
import TodoItem from './ToDoItem';

const TodoList = ({ todos, onDelete }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default TodoList;
