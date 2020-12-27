import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class AddTodoBar extends React.Component {
  constructor() {
    super();
    this.state = {
      newTodo: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({ newTodo: event.target.value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { newTodo } = this.state;
    const { addTodoAction } = this.props;
    if (newTodo) {
      addTodoAction(newTodo);
    }
    this.setState({ newTodo: '' });
  };

  render() {
    const { newTodo } = this.state;
    return (
      <form className="container" onSubmit={this.handleFormSubmit}>
        <input type="text" value={newTodo} onChange={this.handleInputChange} />
      </form>
    );
  }
}

AddTodoBar.propTypes = {
  addTodoAction: PropTypes.func.isRequired,
};

export default connect(null, { addTodoAction: addTodo })(AddTodoBar);
