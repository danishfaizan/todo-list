import React from 'react';

class AddTodoBar extends React.Component {
	state = {
		newTodo: '',
	};

	handleInputChange = (event) => {
		this.setState({ newTodo: event.target.value });
	};

	handleFormSubmit = (event) => {
		event.preventDefault();
		if (this.state.newTodo) {
			this.props.addTodo(this.state.newTodo);
		}
		this.setState({ newTodo: '' });
	};

	render() {
		return (
			<form className="container" onSubmit={this.handleFormSubmit}>
				<input type="text" value={this.state.newTodo} onChange={this.handleInputChange} />
			</form>
		);
	}
}

export default AddTodoBar;
