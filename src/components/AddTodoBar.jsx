import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

function AddTodoBar(props) {
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const { addTodoAction } = props;
    if (newTodo) {
      addTodoAction(newTodo);
    }
    setNewTodo('');
  };

  return (
    <form className="container" onSubmit={handleFormSubmit}>
      <input type="text" value={newTodo} onChange={handleInputChange} />
    </form>
  );
}

AddTodoBar.propTypes = {
  addTodoAction: PropTypes.func.isRequired,
};

export default connect(null, { addTodoAction: addTodo })(AddTodoBar);
