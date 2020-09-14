import './App.css';

import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import AddTodo from './components/AddTodo';
import TodoItem from './components/TodoItem';
import todolist from './reducers/todos';
import { Todo } from './types/todo';

const store = createStore(todolist);

function App() {
  const [todos, setTodos]: [Todo[], any] = useState([]);

  store.subscribe(() => setTodos(store.getState()));

  return (
    <Provider store={store}>
      <AddTodo></AddTodo>
      {todos.map((todo) => (
        <TodoItem todo={todo}></TodoItem>
      ))}
    </Provider>
  );
}

export default App;
