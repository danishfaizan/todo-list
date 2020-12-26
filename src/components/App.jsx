import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddTodoBar from './AddTodoBar';
import TodoList from './TodoList';
import FilterBar from './FilterBar';
import './style.css';
import darkModeIcon from '../images/icon-moon.svg';
import lightModeIcon from '../images/icon-sun.svg';

class App extends React.Component {
	state = {
		todoList: [],
		incompleteItems: 0,
		filterMethod: 'all',
		isDarkMode: false,
	};

	addTodo = (data) => {
		this.setState({
			todoList: [
				...this.state.todoList,
				{
					id: uuidv4(),
					data,
					isCompleted: false,
				},
			],
		});
		this.setState({ incompleteItems: this.state.incompleteItems + 1, filterMethod: 'all' });
	};

	deleteTodo = (idToDelete) => {
		const updatedList = this.state.todoList.filter(({ id, isCompleted }) => {
			if (id === idToDelete) {
				if (!isCompleted) {
					this.setState({ incompleteItems: this.state.incompleteItems - 1 });
				}
				return false;
			} else {
				return true;
			}
		});
		this.setState({
			todoList: updatedList,
		});
	};

	toggleTodo = (toggleId) => {
		let updatedTodo;
		const updatedList = this.state.todoList.filter((todo) => {
			if (todo.id === toggleId) {
				updatedTodo = todo;
				updatedTodo.isCompleted = !updatedTodo.isCompleted;
				if (todo.isCompleted) {
					this.setState({ incompleteItems: this.state.incompleteItems - 1 });
				} else {
					this.setState({ incompleteItems: this.state.incompleteItems + 1 });
				}

				return false;
			}
			return true;
		});

		if (updatedTodo) {
			updatedList.unshift(updatedTodo);
		}

		this.setState({
			todoList: updatedList,
		});
	};

	getActiveTodos() {
		return this.state.todoList.filter(({ isCompleted }) => !isCompleted);
	}

	getCompletedTodos() {
		return this.state.todoList.filter(({ isCompleted }) => isCompleted);
	}

	clearCompleteTodos = () => {
		const updatedList = this.state.todoList.filter((todo) => !todo.isCompleted);
		this.setState({ todoList: updatedList });
	};

	getFilteredTodos = () => {
		if (this.state.filterMethod === 'completed') {
			return this.getCompletedTodos();
		} else if (this.state.filterMethod === 'active') {
			return this.getActiveTodos();
		}
		return this.state.todoList;
	};

	setFilterMethod = (filterMethod) => {
		this.setState({ filterMethod });
	};

	reorderTodos = (sourceIndex, destinationIndex) => {
		console.log('Reordering todos ', sourceIndex, destinationIndex);
		const filteredTodos = this.getFilteredTodos();
		const todoCopy = [...filteredTodos];
		todoCopy.splice(sourceIndex, 1);
		todoCopy.splice(destinationIndex, 0, filteredTodos[sourceIndex]);

		if (this.state.filterMethod === 'completed') {
			this.setState({ todoList: [...todoCopy, ...this.getActiveTodos()] });
		} else {
			this.setState({ todoList: [...this.getCompletedTodos(), ...todoCopy] });
		}
	};

	toggleDarkMode = () => {
		this.setState({ isDarkMode: !this.state.isDarkMode });
	};

	getThemeClass = (className) => {
		if (this.state.isDarkMode) {
			return className + '--dark';
		} else {
			return className + '--light';
		}
	};

	render() {
		return (
			<div className={`wrapper ${this.getThemeClass('wrapper')}`}>
				<header className={`${this.getThemeClass('header')}`}>
					<nav className="container flex">
						<h1>TODO</h1>
						<button onClick={this.toggleDarkMode}>
							<img src={this.state.isDarkMode ? lightModeIcon : darkModeIcon} alt="dark mode" />
						</button>
					</nav>
					<AddTodoBar addTodo={this.addTodo} />
				</header>
				<main className="container">
					<TodoList
						todos={this.getFilteredTodos()}
						toggleTodo={this.toggleTodo}
						deleteTodo={this.deleteTodo}
						incompleteItems={this.state.incompleteItems}
						clearCompleteTodos={this.clearCompleteTodos}
						reorderTodos={this.reorderTodos}
						getThemeClass={this.getThemeClass}
					/>
					<FilterBar
						getThemeClass={this.getThemeClass}
						setFilterMethod={this.setFilterMethod}
						filterMethod={this.state.filterMethod}
					/>
				</main>
				<footer className="container">
					<p>Drag and drop to reorder list</p>
				</footer>
			</div>
		);
	}
}

export default App;
