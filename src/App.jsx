import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, selectTodos } from './slice/todoslice';

function App() {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState('');

  const handleAddTodo = () => {
    if (todoText.length > 0) {
      dispatch(addTodo({
        id: Date.now(),
        text: todoText,
        completed: false,
      }));
      setTodoText('');
    }
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div>
       <h2 style={{ color: 'grey'}}>Todo List</h2>
      <input 
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        placeholder="Enter your todo..."
      />
      <button className='btn btn-success' onClick={handleAddTodo}>Add Todo</button>
      <h2 style={{ color: 'grey', textAlign: 'center' }}>All Todos</h2>
      <div className='row'>
        <ul>
          {todos.map(todo => (
            <div key={todo.id} style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
              <li>
                <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
                <button className='btn btn-success' style={{   float: 'right', backgroundColor: 'red' }} onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
