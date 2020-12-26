import React from 'react';
import PropTypes from 'prop-types';

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
    const { addTodo } = this.props;
    if (newTodo) {
      addTodo(newTodo);
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
  addTodo: PropTypes.func.isRequired,
};

export default AddTodoBar;
