import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import crossIcon from '../images/icon-cross.svg';
class Todo extends React.Component {
	render() {
		return (
			<Draggable key={this.props.id} draggableId={this.props.id} index={this.props.index}>
				{(provided) => (
					<div
						id={this.props.id}
						className={`todo flex ${this.props.getThemeClass('todo')} ${
							this.props.isCompleted ? 'todo--completed' : undefined
						}
						`}
						{...provided.draggableProps}
						{...provided.dragHandleProps}
						ref={provided.innerRef}
					>
						<input
							type="checkbox"
							id={this.props.id}
							name="todo"
							defaultChecked={this.props.isCompleted}
							onClick={() => this.props.toggleTodo(this.props.id)}
						/>
						<label htmlFor={this.props.id}>{this.props.value}</label>
						<button className="todo--delete" onClick={() => this.props.deleteTodo(this.props.id)}>
							<img src={crossIcon} alt="Delete todo" />
						</button>
					</div>
				)}
			</Draggable>
		);
	}
}

export default Todo;
