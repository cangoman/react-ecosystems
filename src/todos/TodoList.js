import React from 'react';
import TodoListItem from './TodoListItem';
import { connect } from 'react-redux';
import { removeTodo, markTodoAsCompleted } from './actions';
import './TodoList.css';

const TodoList = ({ todos = [], onRemovePressed, onCompletedPressed }) => (
  <div className="list-wrapper">
    {todos.map( (todo, key) => 
      <TodoListItem 
        key={key} 
        todo={todo} 
        onRemovePressed={onRemovePressed} 
        onCompletedPressed={onCompletedPressed}
      />)}
  </div>
);

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
  onRemovePressed: text => dispatch(removeTodo(text)),
  onCompletedPressed: text => dispatch(markTodoAsCompleted(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);


