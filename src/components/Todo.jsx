import React from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';
import { connect } from 'react-redux';
import crossIcon from '../images/icon-cross.svg';
import { getThemeClass } from '../utils';
import { toggleTodo, deleteTodo } from '../actions';

class Todo extends React.Component {
  render() {
    const {
      id,
      index,
      value,
      isCompleted,
      toggleTodoAction,
      deleteTodoAction,
      isDarkMode,
    } = this.props;

    return (
      <Draggable key={id} draggableId={id} index={index}>
        {(provided) => (
          <div
            id={id}
            className={`todo flex ${getThemeClass('todo', isDarkMode)} ${
              isCompleted ? 'todo--completed' : undefined
            }`}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <input
              type="checkbox"
              id={id}
              name="todo"
              defaultChecked={isCompleted}
              onClick={() => toggleTodoAction(id)}
            />
            <input className={`todo-text ${getThemeClass('todo-text', isDarkMode)}`} type="text" value={value} />
            <button type="button" className="todo--delete" onClick={() => deleteTodoAction(id)}>
              <img src={crossIcon} alt="Delete todo" />
            </button>
          </div>
        )}
      </Draggable>
    );
  }
}

Todo.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  toggleTodoAction: PropTypes.func.isRequired,
  deleteTodoAction: PropTypes.func.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
};

function mapStateToProps({ isDarkMode }) {
  return {
    isDarkMode,
  };
}

export default connect(mapStateToProps, {
  toggleTodoAction: toggleTodo,
  deleteTodoAction: deleteTodo,
})(Todo);
