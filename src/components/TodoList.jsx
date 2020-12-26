import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
	generateTodos() {
		if (this.props.todos.length === 0) {
			return (
				<div className={`empty-todo-list ${this.props.getThemeClass('empty-todo-list')}`}>
					<h1>No Tasks!</h1>
				</div>
			);
		}
		return this.props.todos.map(({ id, data, isCompleted }, index) => (
			<Todo
				id={id}
				key={id}
				isCompleted={isCompleted}
				value={data}
				deleteTodo={this.props.deleteTodo}
				toggleTodo={this.props.toggleTodo}
				index={index}
				getThemeClass={this.props.getThemeClass}
			/>
		));
	}

	handleOnDragEnd = (result) => {
		const { destination, source } = result;

		if (!destination) {
			return;
		}

		this.props.reorderTodos(source.index, destination.index);
	};

	render() {
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
				<div className={`flex todos-left ${this.props.getThemeClass('todos-left')}`}>
					<span>{this.props.incompleteItems} items left</span>
					<button onClick={this.props.clearCompleteTodos}>Clear Completed</button>
				</div>
			</DragDropContext>
		);
	}
}

export default TodoList;
