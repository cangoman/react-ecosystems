import React, { useEffect } from 'react';
import TodoListItem from './TodoListItem';
import { connect } from 'react-redux';
import { loadTodos, removeTodoRequest, markTodoAsCompletedRequest } from './thunks';
import './TodoList.css';

const TodoList = ({ todos = [], onRemovePressed, onCompletedPressed, isLoading, startLoadingTodos }) => {
  useEffect(() => {
    startLoadingTodos();
  }, [])
  
  
  const loadingMessage = <div>Loading todos...</div>
  const content =  (
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

  return isLoading ? loadingMessage : content;
}


const mapStateToProps = state => ({
  isLoading: state.isLoading,
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
  onRemovePressed: id => dispatch(removeTodoRequest(id)),
  onCompletedPressed: id => dispatch(markTodoAsCompletedRequest(id)),
  startLoadingTodos: () => dispatch(loadTodos())
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);


