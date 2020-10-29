import React from 'react';
import NewTodoForm from './todos/NewTodoForm'
import './App.css';
import { hot } from 'react-hot-loader/root'
import TodoList from './todos/TodoList'


const App = () => (
  <div className="App">
    <NewTodoForm />
    <TodoList/>
  </div>
   );

export default hot(App);