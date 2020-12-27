import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Todo from './Todo';
import { getThemeClass } from '../utils';
import { addTodo, clearCompletedTodos, reorderTodos } from '../actions';

class TodoList extends React.Component {
  handleOnDragEnd = (result) => {
    const { destination, source } = result;
    if (!destination) {
      return;
    }
    const { reorderTodosAction } = this.props;
    reorderTodosAction(source.index, destination.index);
  };

  generateTodos() {
    const { todos, isDarkMode } = this.props;

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

  render() {
    const { incompleteItemsCount, clearCompletedTodosAction, isDarkMode } = this.props;
    return (
      <DragDropContext onDragEnd={this.handleOnDragEnd}>
        <Droppable droppableId="todos">
          {(provided) => (
            <div className="todo-list" {...provided.droppableProps} ref={provided.innerRef}>
              <div>{this.generateTodos()}</div>
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
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  incompleteItemsCount: PropTypes.number.isRequired,
  reorderTodosAction: PropTypes.func.isRequired,
  clearCompletedTodosAction: PropTypes.func.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
};

function mapStateToProps({ todos, isDarkMode }, { filterType }) {
  const incompleteItemsCount = todos.reduce((sum, todo) => (!todo.isCompleted ? sum + 1 : sum), 0);
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
    isDarkMode,
  };
}

export default connect(mapStateToProps, {
  addTodoAction: addTodo,
  clearCompletedTodosAction: clearCompletedTodos,
  reorderTodosAction: reorderTodos,
})(TodoList);
