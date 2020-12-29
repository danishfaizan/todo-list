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
    const { addTodoAction, filterType, setFilterType } = props;
    if (newTodo) {
      addTodoAction(newTodo);
    }
    setNewTodo('');

    if (filterType === 'COMPLETED') {
      setFilterType('ALL');
    }
  };

  return (
    <form className="container" onSubmit={handleFormSubmit}>
      <input type="text" value={newTodo} onChange={handleInputChange} />
    </form>
  );
}

AddTodoBar.propTypes = {
  addTodoAction: PropTypes.func.isRequired,
  filterType: PropTypes.string.isRequired,
  setFilterType: PropTypes.func.isRequired,
};

export default connect(null, { addTodoAction: addTodo })(AddTodoBar);
