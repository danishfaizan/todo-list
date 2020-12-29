import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Todo from './Todo';
import { getThemeClass } from '../utils';
import { addTodo, clearCompletedTodos, reorderTodos } from '../actions';

function TodoList(props) {
  const {
    filterType,
    incompleteItemsCount,
    completeItemsCount,
    clearCompletedTodosAction,
    isDarkMode,
    reorderTodosAction,
    todos,
  } = props;

  const handleOnDragEnd = (result) => {
    const { destination, source } = result;
    if (!destination) {
      return;
    }

    if (filterType === 'INCOMPLETE' && completeItemsCount) {
      reorderTodosAction(source.index + completeItemsCount, destination.index + completeItemsCount);
    } else {
      reorderTodosAction(source.index, destination.index);
    }
  };

  function generateTodos() {
    if (todos.length === 0) {
      return (
        <div className={`empty-todo-list ${getThemeClass('empty-todo-list', isDarkMode)}`}>
          <h1>No Tasks!</h1>
        </div>
      );
    }

    return todos.map(({ id, value, isCompleted }, index) => (
      <Todo id={id} key={id} isCompleted={isCompleted} value={value} index={index} />
    ));
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="todos">
        {(provided) => (
          <div className="todo-list" {...provided.droppableProps} ref={provided.innerRef}>
            <div>{generateTodos()}</div>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <div className={`flex todos-left ${getThemeClass('todos-left', isDarkMode)}`}>
        <span>
          {incompleteItemsCount}
          {' '}
          items left
        </span>
        <button type="button" onClick={clearCompletedTodosAction}>
          Clear Completed
        </button>
      </div>
    </DragDropContext>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  incompleteItemsCount: PropTypes.number.isRequired,
  completeItemsCount: PropTypes.number.isRequired,
  reorderTodosAction: PropTypes.func.isRequired,
  clearCompletedTodosAction: PropTypes.func.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
  filterType: PropTypes.string.isRequired,
};

function mapStateToProps({ todos, isDarkMode }, { filterType }) {
  const incompleteItemsCount = todos.reduce((sum, todo) => (!todo.isCompleted ? sum + 1 : sum), 0);
  const completeItemsCount = todos.length - incompleteItemsCount;
  let filteredTodos;

  switch (filterType) {
    case 'COMPLETED':
      filteredTodos = todos.filter((todo) => todo.isCompleted);
      break;

    case 'INCOMPLETE':
      filteredTodos = todos.filter((todo) => !todo.isCompleted);
      break;

    default:
      filteredTodos = todos;
  }

  return {
    todos: filteredTodos,
    incompleteItemsCount,
    completeItemsCount,
    isDarkMode,
  };
}

export default connect(mapStateToProps, {
  addTodoAction: addTodo,
  clearCompletedTodosAction: clearCompletedTodos,
  reorderTodosAction: reorderTodos,
})(TodoList);
