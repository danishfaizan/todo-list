import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

class TodoList extends React.Component {
  handleOnDragEnd = (result) => {
    const { destination, source } = result;
    if (!destination) {
      return;
    }
    const { reorderTodos } = this.props;
    reorderTodos(source.index, destination.index);
  };

  generateTodos() {
    const {
      todos, getThemeClass, deleteTodo, toggleTodo,
    } = this.props;

    if (todos.length === 0) {
      return (
        <div className={`empty-todo-list ${getThemeClass('empty-todo-list')}`}>
          <h1>No Tasks!</h1>
        </div>
      );
    }
    return todos.map(({ id, data, isCompleted }, index) => (
      <Todo
        id={id}
        key={id}
        isCompleted={isCompleted}
        value={data}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
        index={index}
        getThemeClass={getThemeClass}
      />
    ));
  }

  render() {
    const { getThemeClass, incompleteItems, clearCompleteTodos } = this.props;
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
        <div className={`flex todos-left ${getThemeClass('todos-left')}`}>
          <span>
            {incompleteItems}
            {' '}
            items left
          </span>
          <button type="button" onClick={clearCompleteTodos}>
            Clear Completed
          </button>
        </div>
      </DragDropContext>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  incompleteItems: PropTypes.number.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  getThemeClass: PropTypes.func.isRequired,
  reorderTodos: PropTypes.func.isRequired,
  clearCompleteTodos: PropTypes.func.isRequired,
};

export default TodoList;
