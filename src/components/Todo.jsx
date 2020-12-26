import React from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';
import crossIcon from '../images/icon-cross.svg';

class Todo extends React.Component {
  render() {
    const {
      id, index, value, isCompleted, getThemeClass, toggleTodo, deleteTodo,
    } = this.props;

    return (
      <Draggable key={id} draggableId={id} index={index}>
        {(provided) => (
          <div
            id={id}
            className={`todo flex ${getThemeClass('todo')} ${isCompleted ? 'todo--completed' : undefined}`}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <input
              type="checkbox"
              id={id}
              name="todo"
              defaultChecked={isCompleted}
              onClick={() => toggleTodo(id)}
            />
            <label htmlFor={id}>{value}</label>
            <button type="button" className="todo--delete" onClick={() => deleteTodo(id)}>
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
  getThemeClass: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default Todo;
